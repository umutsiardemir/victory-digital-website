export type Locale = "tr" | "en";

export const translations = {
  tr: {
    nav: {
      items: [
        { href: "#hizmetler", label: "Hizmetler" },
        { href: "#calisma-sekli", label: "Çalışma Şeklimiz" },
        { href: "#yorumlar", label: "Yorumlar" },
        { href: "#sss", label: "SSS" },
      ],
      menuAria: "Menüyü aç/kapat",
    },
    hero: {
      headline: "Yerel İşletmeler İçin Daha Fazla Müşteri.",
      headlineHighlight: "Daha Net Sonuç.",
      subline:
        "Local SEO, reklam yönetimi ve otomasyonla daha çok arama, daha çok çağrı ve daha çok randevu.",
      proof: "5+ yıl deneyim • Yerel işletme odaklı • Şeffaf raporlama",
      ctaPrimary: "Ücretsiz Ön Analiz",
      ctaSecondary: "Hizmetleri İncele",
      videoTitle: "Tanıtım Videomuz",
      videoDuration: "3:03",
      videoSubtitle: "Nasıl çalışıyoruz, neler sunuyoruz — kısa özet.",
    },
    stats: {
      chips: [
        "5+ Yıl Sektör Deneyimi",
        "Yerel İşletme Odaklı Büyüme",
        "Haftalık/Aylık Raporlama",
      ],
    },
    whatWeDo: {
      title: "Ne Yapıyoruz?",
      description:
        "Yerel işletmelerin hem aranırken görünmesini hem de reklamlarla doğru kişiye ulaşmasını sağlıyoruz. Sonuçları takip edilebilir kılıyoruz.",
      bullets: [
        "Bulunurluk (Local SEO)",
        "Talep (Google/Meta Ads)",
        "Süreç (AI otomasyon + takip)",
      ],
    },
    services: {
      title: "Hizmetler",
      description:
        "Yerel işletmeler için performans odaklı hizmetler. Her biri ölçülebilir sonuçlara bağlanır.",
      detailLink: "Detaylar",
      list: [
        {
          title: "Local SEO (Google Haritalar)",
          headline: "Bölgenizde arandığınızda öne çıkın.",
          description:
            "Harita sıralaması ve profil gücüyle daha fazla arama ve rota alırsınız.",
          bullets: [
            "Profil ve kategori optimizasyonu",
            "Yerel anahtar kelime ve içerik",
            "Görünürlük takibi ve rapor",
          ],
        },
        {
          title: "Google Ads Yönetimi",
          headline: "Arama ve reklam bütçesini sonuça odaklayın.",
          description:
            "Arama, performans ve remarketing kampanyalarıyla nitelikli trafik.",
          bullets: [
            "Hedef odaklı kampanya kurulumu",
            "Dönüşüm takibi ve optimizasyon",
            "Maliyet/lead raporlama",
          ],
        },
        {
          title: "Meta Ads Yönetimi",
          headline: "Facebook ve Instagram'da doğru kitleye ulaşın.",
          description:
            "Lead ve farkındalık kampanyaları; kreatif ve hedef kitle yönetimi.",
          bullets: [
            "Hedef kitle ve teklif stratejisi",
            "Form ve lead entegrasyonu",
            "Performans raporlama",
          ],
        },
        {
          title: "AI Automation Services",
          headline: "Tekrarlayan işleri otomasyona bırakın.",
          description:
            "Lead yönlendirme, takip ve raporlama süreçlerini otomatikleştiriyoruz.",
          bullets: [
            "Lead yakalama ve yönlendirme",
            "CRM ve takvim entegrasyonu",
            "Raporlama otomasyonu",
          ],
        },
        {
          title: "Sosyal Medya Yönetimi",
          headline: "Tutarlı görünürlük ve marka güveni.",
          description:
            "İçerik planı, topluluk yönetimi ve reklamla uyumlu kanal yönetimi.",
          bullets: [
            "İçerik takvimi ve yayınlar",
            "Yorum ve mesaj yönetimi",
            "Reklam ile koordinasyon",
          ],
        },
      ],
    },
    servicesRail: {
      eyebrow: "Hizmetler",
      heading: "Büyümenizi hızlandıran kanallar.",
      sub: "Sosyal medya, arama, reklam ve otomasyon — tek çatı altında, ölçülebilir sonuçlarla.",
      viewAll: "Tüm paketleri incele",
      cta: "Teklif al",
      prevAria: "Önceki hizmet",
      nextAria: "Sonraki hizmet",
      featuredBadge: "Öne çıkan",
      cards: [
        { title: "Sosyal Medya Yönetimi", tags: ["İçerik", "Topluluk", "Reklam"] },
        { title: "Lokal SEO & Website Optimizasyonu", tags: ["Google Haritalar", "Arama", "Site hızı"] },
        { title: "Yapay Zeka Otomasyonları", tags: ["Lead", "CRM", "Raporlama"] },
        { title: "Google Ads", tags: ["Arama", "Performans", "Dönüşüm"] },
        { title: "Meta Reklamları", tags: ["Facebook", "Instagram", "Lead"] },
      ],
    },
    eligibility: {
      title: "Sizin İçin Uygun mu?",
      description:
        "Aşağıdaki durumlardan biri sizin için geçerliyse, konuşmaya değer.",
      tags: [
        "Daha fazla çağrı istiyorum",
        "Randevu/rezervasyon artmalı",
        "Bütçe boşa gidiyor",
        "Haritalarda görünmüyorum",
        "Takip & rapor yok",
        "Ekip zamanı yetmiyor",
      ],
      cta: "Bunlardan en az biri sizin için geçerliyse",
      ctaLink: "ücretsiz ön analiz",
      ctaSuffix: "ile başlayabiliriz.",
    },
    process: {
      title: "Çalışma Şeklimiz",
      description:
        "Dört adımda ilerliyoruz: hedef, kurulum, optimizasyon, raporlama.",
      steps: [
        {
          title: "Analiz & Hedef",
          text: "Mevcut durum ve hedef netleştirilir; neyi ölçeceğimiz belirlenir.",
        },
        {
          title: "Kurulum & Lansman",
          text: "Hesap, takip ve dönüşüm altyapısı kurulur; kampanyalar devreye alınır.",
        },
        {
          title: "Optimizasyon",
          text: "Veriye göre teklifler, hedefler ve kreatifler güncellenir.",
        },
        {
          title: "Raporlama & Büyütme",
          text: "Düzenli raporlarla ilerleme takip edilir; işe yarayan büyütülür.",
        },
      ],
    },
    scenarios: {
      title: "Kısa Örnek Senaryolar",
      description:
        "Farklı sektörlerde tipik problemler ve yaptığımız işlerin özeti. Garanti değil, yön göstericidir.",
      list: [
        {
          sector: "Klinik / Sağlık",
          problem:
            "Randevu sayısı düşük; haritada ve aramada zayıf görünürlük.",
          done: [
            "Local SEO ile harita ve arama optimizasyonu",
            "Hedefli reklam ve randevu takibi kurulumu",
          ],
          impact:
            "Randevu ve arama talebinde artış beklenir (sektör ve bütçeye bağlı).",
        },
        {
          sector: "Güzellik Salonu",
          problem: "Sosyal medya var ama randevu ve müşteri takibi dağınık.",
          done: [
            "Meta reklamları ve randevu/lead entegrasyonu",
            "Harita profili ve yorum stratejisi",
          ],
          impact:
            "Daha düzenli randevu akışı ve takip edilebilir sonuçlar hedeflenir.",
        },
        {
          sector: "Restoran / Kafe",
          problem:
            "Yerel aramada ve rezervasyon tarafında yetersiz görünürlük.",
          done: [
            "Google Haritalar ve arama odaklı Local SEO",
            "Rezervasyon/lead formu ve takip süreci",
          ],
          impact:
            "Harita ve arama trafiğinde artış; rezervasyon talebinde iyileşme hedeflenir.",
        },
      ],
    },
    testimonials: {
      title: "Müşteri Yorumları",
      description:
        "İletişim, raporlama ve süreç odaklı kısa geri bildirimler.",
      list: [
        {
          name: "—",
          role: "Yerel hizmet işletmesi",
          quote:
            "İletişim düzenli, raporlama anlaşılır. Lead kalitesi önceye göre daha iyi; süreç net.",
        },
        {
          name: "—",
          role: "Sağlık sektörü",
          quote:
            "Randevu ve arama sayıları raporlarda takip ediliyor. Süreç yavaş yavaş oturdu, beklentiye uygun ilerliyoruz.",
        },
        {
          name: "—",
          role: "Perakende / hizmet",
          quote:
            "Raporlama ve takip düzenli. Lead'lerin nereden geldiğini görüyoruz; bütçe daha kontrollü kullanılıyor.",
        },
      ],
    },
    faq: {
      title: "Sık Sorulan Sorular",
      description:
        "Merak ettiklerinizi kısaca yanıtlıyoruz. Detay için iletişime geçebilirsiniz.",
      items: [
        {
          question: "Ne kadar sürede etki görürüm?",
          answer:
            "Reklamda ilk veriler birkaç hafta içinde gelir. Local SEO'da sıralama ve arama hareketi genelde 4–8 hafta sonra başlar. Süre sektör ve rekabete göre değişir; ilk görüşmede kabaca söyleriz.",
        },
        {
          question: "Local SEO ve reklam birlikte mi daha iyi?",
          answer:
            "Çoğu yerel işletme için ikisi birlikte daha güçlü: biri aranırken görünürlük, diğeri anlık talep. Tek kanal da mümkün; hedefe göre seçiyoruz.",
        },
        {
          question: "Raporlama nasıl geliyor?",
          answer:
            "Haftalık kısa özet ve aylık detaylı rapor. Çağrı, lead, trafik, harcama gibi metrikler tek yerde. Nasıl ileteceğimizi başta netleştiriyoruz.",
        },
        {
          question: "AI otomasyon hangi araçlarla?",
          answer:
            "Mevcut kullandığınız araçlara (CRM, e‑posta, takvim vb.) göre seçiyoruz. Form, lead ve randevu akışları için yaygın entegrasyonlar kullanılıyor; ihtiyaca göre kapsam çizilir.",
        },
        {
          question: "Sözleşme ve iptal koşulları?",
          answer:
            "Başlangıç süresi (örn. 3 ay) ve iptal koşulları sözleşmede yazar. Uzun yıllık bağlayıcı taahhüt yok; süre sonunda bildirimle ayrılabilirsiniz.",
        },
      ],
    },
    contact: {
      title: "İletişim",
      description: "Ücretsiz ön analiz veya teklif için form veya e-posta.",
      contactTitle: "İletişim Bilgileri",
      location: "Çanakkale, Türkiye",
      whatsapp: "WhatsApp'tan Yaz",
      formName: "Ad Soyad",
      formEmail: "E‑posta",
      formBusiness: "İşletme türü",
      formMessage: "Mesaj",
      formPlaceholderName: "Adınız soyadınız",
      formPlaceholderEmail: "ornek@domain.com",
      formPlaceholderBusiness: "Örn. Klinik, restoran, salon",
      formPlaceholderMessage: "Kısaca hedefleriniz veya sorunuz...",
      submit: "Gönder",
    },
    footer: {
      tagline: "Yerel işletmeler için performans odaklı pazarlama.",
      services: "Hizmetler",
      process: "Çalışma Şeklimiz",
      testimonials: "Yorumlar",
      contact: "İletişim",
      copyright: "Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: {
      items: [
        { href: "#hizmetler", label: "Services" },
        { href: "#calisma-sekli", label: "How We Work" },
        { href: "#yorumlar", label: "Reviews" },
        { href: "#sss", label: "FAQ" },
      ],
      menuAria: "Open/close menu",
    },
    hero: {
      headline: "More Customers for Local Businesses.",
      headlineHighlight: "Clearer Results.",
      subline:
        "Local SEO, ad management and automation for more searches, more calls and more bookings.",
      proof: "5+ years experience • Local business focus • Transparent reporting",
      ctaPrimary: "Free Initial Analysis",
      ctaSecondary: "View Services",
      videoTitle: "Intro Video",
      videoDuration: "3:03",
      videoSubtitle: "How we work and what we offer — short overview.",
    },
    stats: {
      chips: [
        "5+ Years Industry Experience",
        "Local Business Growth Focus",
        "Weekly/Monthly Reporting",
      ],
    },
    whatWeDo: {
      title: "What We Do",
      description:
        "We help local businesses get found when people search and reach the right audience with ads. We make results measurable.",
      bullets: [
        "Visibility (Local SEO)",
        "Demand (Google/Meta Ads)",
        "Process (AI automation + tracking)",
      ],
    },
    services: {
      title: "Services",
      description:
        "Performance-focused services for local businesses. Each ties to measurable outcomes.",
      detailLink: "Details",
      list: [
        {
          title: "Local SEO (Google Maps)",
          headline: "Stand out when people search for you locally.",
          description:
            "More searches and directions with stronger map ranking and profile.",
          bullets: [
            "Profile and category optimisation",
            "Local keywords and content",
            "Visibility tracking and reports",
          ],
        },
        {
          title: "Google Ads Management",
          headline: "Focus your search and ad budget on results.",
          description:
            "Search, performance and remarketing campaigns for qualified traffic.",
          bullets: [
            "Goal-focused campaign setup",
            "Conversion tracking and optimisation",
            "Cost/lead reporting",
          ],
        },
        {
          title: "Meta Ads Management",
          headline: "Reach the right audience on Facebook and Instagram.",
          description:
            "Lead and awareness campaigns; creative and audience management.",
          bullets: [
            "Audience and bidding strategy",
            "Form and lead integration",
            "Performance reporting",
          ],
        },
        {
          title: "AI Automation Services",
          headline: "Let automation handle repetitive tasks.",
          description:
            "We automate lead routing, follow-up and reporting workflows.",
          bullets: [
            "Lead capture and routing",
            "CRM and calendar integration",
            "Reporting automation",
          ],
        },
        {
          title: "Social Media Management",
          headline: "Consistent visibility and brand trust.",
          description:
            "Content calendar, community management and ad-aligned channel management.",
          bullets: [
            "Content calendar and posts",
            "Comment and message management",
            "Coordination with ads",
          ],
        },
      ],
    },
    servicesRail: {
      eyebrow: "Services",
      heading: "Channels that accelerate your growth.",
      sub: "Social media, search, ads and automation — under one roof, with measurable results.",
      viewAll: "View all packages",
      cta: "Get a quote",
      prevAria: "Previous service",
      nextAria: "Next service",
      featuredBadge: "Featured",
      cards: [
        { title: "Social Media Management", tags: ["Content", "Community", "Ads"] },
        { title: "Local SEO & Website Optimisation", tags: ["Google Maps", "Search", "Site speed"] },
        { title: "AI Automation", tags: ["Lead", "CRM", "Reporting"] },
        { title: "Google Ads", tags: ["Search", "Performance", "Conversion"] },
        { title: "Meta Ads", tags: ["Facebook", "Instagram", "Lead"] },
      ],
    },
    eligibility: {
      title: "Is It Right for You?",
      description:
        "If one of the following applies to you, it's worth a conversation.",
      tags: [
        "I want more calls",
        "Bookings/reservations need to grow",
        "Budget is going to waste",
        "I don't show on maps",
        "No tracking or reports",
        "Team doesn't have time",
      ],
      cta: "If at least one applies to you, we can start with a",
      ctaLink: "free initial analysis",
      ctaSuffix: ".",
    },
    process: {
      title: "How We Work",
      description:
        "Four steps: goal, setup, optimisation, reporting.",
      steps: [
        {
          title: "Analysis & Goals",
          text: "We clarify the current situation and goals; we define what we'll measure.",
        },
        {
          title: "Setup & Launch",
          text: "Accounts, tracking and conversion setup; campaigns go live.",
        },
        {
          title: "Optimisation",
          text: "Bids, targets and creatives updated based on data.",
        },
        {
          title: "Reporting & Growth",
          text: "Progress tracked with regular reports; we scale what works.",
        },
      ],
    },
    scenarios: {
      title: "Short Example Scenarios",
      description:
        "Typical problems and what we do in different sectors. Indicative, not a guarantee.",
      list: [
        {
          sector: "Clinic / Health",
          problem:
            "Low booking numbers; weak visibility on map and search.",
          done: [
            "Local SEO for map and search optimisation",
            "Targeted ads and booking tracking setup",
          ],
          impact:
            "Increase in bookings and search demand expected (depends on sector and budget).",
        },
        {
          sector: "Beauty Salon",
          problem: "Social media exists but booking and customer tracking is scattered.",
          done: [
            "Meta ads and booking/lead integration",
            "Map profile and review strategy",
          ],
          impact:
            "More consistent booking flow and trackable results aimed for.",
        },
        {
          sector: "Restaurant / Cafe",
          problem:
            "Poor visibility in local search and reservations.",
          done: [
            "Google Maps and search-focused Local SEO",
            "Reservation/lead form and follow-up process",
          ],
          impact:
            "Increase in map and search traffic; improvement in reservation demand aimed for.",
        },
      ],
    },
    testimonials: {
      title: "Client Reviews",
      description:
        "Short feedback on communication, reporting and process.",
      list: [
        {
          name: "—",
          role: "Local service business",
          quote:
            "Communication is regular, reporting is clear. Lead quality is better than before; process is clear.",
        },
        {
          name: "—",
          role: "Healthcare sector",
          quote:
            "Booking and call numbers are tracked in reports. Process is settling in, we're progressing as expected.",
        },
        {
          name: "—",
          role: "Retail / service",
          quote:
            "Reporting and tracking are regular. We see where leads come from; budget is used more in control.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      description:
        "We answer your questions briefly. Contact us for more detail.",
      items: [
        {
          question: "How soon will I see results?",
          answer:
            "First ad data comes within a few weeks. For Local SEO, ranking and search movement usually start after 4–8 weeks. Timing depends on sector and competition; we give a rough estimate in the first meeting.",
        },
        {
          question: "Are Local SEO and ads better together?",
          answer:
            "For most local businesses, both together are stronger: one for visibility when people search, the other for immediate demand. Single channel is possible too; we choose by goal.",
        },
        {
          question: "How does reporting work?",
          answer:
            "Weekly short summary and monthly detailed report. Calls, leads, traffic, spend in one place. We agree how we'll share it from the start.",
        },
        {
          question: "Which tools for AI automation?",
          answer:
            "We choose based on tools you already use (CRM, email, calendar, etc.). Common integrations for forms, leads and bookings; scope is defined by need.",
        },
        {
          question: "Contract and cancellation?",
          answer:
            "Initial period (e.g. 3 months) and cancellation terms are in the contract. No long-term binding commitment; you can leave with notice at the end of the period.",
        },
      ],
    },
    contact: {
      title: "Contact",
      description: "Free initial analysis or quote via form or email.",
      contactTitle: "Contact Details",
      location: "Çanakkale, Turkey",
      whatsapp: "Message on WhatsApp",
      formName: "Name",
      formEmail: "Email",
      formBusiness: "Business type",
      formMessage: "Message",
      formPlaceholderName: "Your name",
      formPlaceholderEmail: "example@domain.com",
      formPlaceholderBusiness: "e.g. Clinic, restaurant, salon",
      formPlaceholderMessage: "Your goals or question briefly...",
      submit: "Send",
    },
    footer: {
      tagline: "Performance-focused marketing for local businesses.",
      services: "Services",
      process: "How We Work",
      testimonials: "Reviews",
      contact: "Contact",
      copyright: "All rights reserved.",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
