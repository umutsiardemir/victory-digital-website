import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, email, businessType, message } = await req.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Ad, e-posta ve mesaj alanları zorunludur." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const toEmail = process.env.CONTACT_TO_EMAIL || "hello@victorydgtl.com";

        await transporter.sendMail({
            from: `"${name} (Website Form)" <${process.env.SMTP_USER}>`,
            to: toEmail,
            replyTo: email,
            subject: `Yeni İletişim Formu: ${name}`,
            html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>İşletme Türü:</strong> ${businessType || "Belirtilmedi"}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "E-posta gönderilirken bir hata oluştu." },
            { status: 500 }
        );
    }
}
