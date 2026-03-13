"use server";

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// ─── Rate Limiting (IP Bazlı) ───────────────────────────────────────────────
// Her IP adresi belirli bir süre içinde sınırlı sayıda istek atabilir.
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 dakika
const RATE_LIMIT_MAX_REQUESTS = 10; // 1 dakikada max 10 istek

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Her 5 dakikada süresi dolmuş kayıtları temizle (bellek sızıntısı önleme)
setInterval(() => {
    const now = Date.now();
    for (const [key, value] of rateLimitMap.entries()) {
        if (now > value.resetTime) {
            rateLimitMap.delete(key);
        }
    }
}, 5 * 60 * 1000);

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    record.count++;
    if (record.count > RATE_LIMIT_MAX_REQUESTS) {
        return true;
    }

    return false;
}

// ─── İzin Verilen Origin'ler ────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://victorydgtl.com",
    "https://www.victorydgtl.com",
    // Vercel preview URL'leri
];

function isAllowedOrigin(request: NextRequest): boolean {
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");

    // Origin kontrolü
    if (origin) {
        if (ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed))) return true;
        // Vercel preview URL'lerini de kabul et
        if (origin.endsWith(".vercel.app")) return true;
        return false;
    }

    // Referer kontrolü (bazı tarayıcılar origin yerine referer gönderir)
    if (referer) {
        if (ALLOWED_ORIGINS.some((allowed) => referer.startsWith(allowed))) return true;
        if (referer.includes(".vercel.app")) return true;
        return false;
    }

    // Ne origin ne referer yoksa reddet (curl, Postman gibi araçlar)
    return false;
}

// ─── System Prompt ──────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `Sen Victory Digital'in AI asistanısın. Victory Digital, Çanakkale merkezli bir dijital pazarlama ajansıdır.

## Hakkında
- 5+ yıl sektör deneyimi
- Yerel işletmelere odaklı büyüme stratejileri
- Haftalık/aylık şeffaf raporlama

## Hizmetler

### 1. Local SEO (Google Haritalar)
- Bölgede arandığında öne çıkmayı sağlar
- Profil ve kategori optimizasyonu
- Yerel anahtar kelime ve içerik stratejisi
- Görünürlük takibi ve rapor

### 2. Google Ads Yönetimi
- Arama ve reklam bütçesini sonuca odaklar
- Hedef odaklı kampanya kurulumu
- Dönüşüm takibi ve optimizasyon
- Maliyet/lead raporlama

### 3. Meta Ads Yönetimi (Facebook & Instagram)
- Doğru kitleye lead ve farkındalık kampanyaları
- Hedef kitle ve teklif stratejisi
- Form ve lead entegrasyonu
- Performans raporlama

### 4. AI Automation Services
- Tekrarlayan işleri otomasyona bırakır
- Lead yakalama ve yönlendirme
- CRM ve takvim entegrasyonu
- Raporlama otomasyonu

### 5. Sosyal Medya Yönetimi
- Tutarlı görünürlük ve marka güveni
- İçerik takvimi ve yayınlar
- Yorum ve mesaj yönetimi
- Reklam ile koordinasyon

## Çalışma Şekli
1. Analiz & Hedef — Mevcut durum ve hedef netleştirilir
2. Kurulum & Lansman — Hesap, takip ve dönüşüm altyapısı kurulur
3. Optimizasyon — Veriye göre teklifler ve kreatifler güncellenir
4. Raporlama & Büyütme — Düzenli raporlarla ilerleme takip edilir

## Örnek Senaryolar
- Klinik/Sağlık: Local SEO + hedefli reklam ile randevu artışı
- Güzellik Salonu: Meta reklamları + randevu/lead entegrasyonu
- Restoran/Kafe: Google Haritalar + rezervasyon/lead formu

## Önemli Kurallar
1. Fiyatlandırma/paket ücretleri hakkında ASLA bilgi verme. Bu konuda şunu söyle: "Fiyatlandırma hakkında size özel bir teklif hazırlamamız gerekiyor. Lütfen bize e-posta ile ulaşın: hello@victorydgtl.com"
2. Kullanıcı hangi dilde yazıyorsa o dilde cevap ver (Türkçe veya İngilizce).
3. Kısa, net ve yardımcı cevaplar ver.
4. Victory Digital'in hizmetleriyle ilgili olmayan konularda: "Bu konu uzmanlık alanımız dışında kalıyor, ama dijital pazarlama konusunda size yardımcı olabilirim!" de.
5. Kullanıcıyı her zaman bir sonraki adıma yönlendir (ücretsiz ön analiz, e-posta ile iletişim vs.)
6. İletişim bilgisi: hello@victorydgtl.com, Çanakkale, Türkiye
7. Samimi ve profesyonel bir ton kullan.`;

// ─── Sabitler ───────────────────────────────────────────────────────────────
const MAX_MESSAGE_LENGTH = 500; // Tek mesaj max 500 karakter
const MAX_MESSAGES_COUNT = 20; // Konuşma geçmişi max 20 mesaj

export async function POST(request: NextRequest) {
    try {
        // 1) Origin / Referer kontrolü
        if (!isAllowedOrigin(request)) {
            return NextResponse.json(
                { error: "Unauthorized origin" },
                { status: 403 }
            );
        }

        // 2) Rate limiting
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            request.headers.get("x-real-ip") ||
            "unknown";

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyin." },
                { status: 429 }
            );
        }

        // 3) Body kontrolü
        const { messages } = await request.json();

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json(
                { error: "Messages array is required" },
                { status: 400 }
            );
        }

        // 4) Mesaj sayısı sınırı
        if (messages.length > MAX_MESSAGES_COUNT) {
            return NextResponse.json(
                { error: "Too many messages" },
                { status: 400 }
            );
        }

        // 5) Her mesajın uzunluk kontrolü ve sanitizasyonu
        for (const msg of messages) {
            if (
                typeof msg.content !== "string" ||
                typeof msg.role !== "string" ||
                !["user", "assistant"].includes(msg.role)
            ) {
                return NextResponse.json(
                    { error: "Invalid message format" },
                    { status: 400 }
                );
            }
            if (msg.content.length > MAX_MESSAGE_LENGTH) {
                return NextResponse.json(
                    { error: "Mesaj çok uzun. Lütfen daha kısa yazın." },
                    { status: 400 }
                );
            }
        }

        // 6) API key kontrolü
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: "OpenAI API key is not configured" },
                { status: 500 }
            );
        }

        // 7) OpenAI isteği
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.map((msg: { role: string; content: string }) => ({
                    role: msg.role as "user" | "assistant",
                    content: msg.content,
                })),
            ],
            max_tokens: 500,
            temperature: 0.7,
        });

        const reply = completion.choices[0]?.message?.content || "";

        return NextResponse.json({ reply });
    } catch (error: unknown) {
        console.error("Chat API error:", error);

        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";

        return NextResponse.json(
            { error: "Bir hata oluştu: " + errorMessage },
            { status: 500 }
        );
    }
}
