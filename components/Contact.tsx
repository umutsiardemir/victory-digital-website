"use client";

import { useState, FormEvent } from "react";
import Section from "./Section";
import { MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Bir hata oluştu.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", businessType: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Bir hata oluştu. Lütfen tekrar deneyin."
      );
    }
  };

  return (
    <Section id="iletisim" title={c.title} description={c.description}>
      <div className="row g-4">
        <div className="col-12 col-md-5">
          <div className="d-flex flex-column gap-4">
            <div>
              <h3 className="mb-2 fs-sm fw-semibold text-zinc-100">
                {c.contactTitle}
              </h3>
              <div className="d-flex flex-column gap-2 fs-sm text-vd-muted">
                <p className="d-flex align-items-center gap-2 mb-0">
                  <MapPin className="shrink-0 text-vd-red" style={{ height: 16, width: 16 }} />
                  {c.location}
                </p>
                <p className="mb-0">
                  E‑posta:{" "}
                  <span className="text-zinc-200">hello@victorydgtl.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <form
            className="d-flex flex-column gap-3 rounded-2xl border border-vd-border bg-vd-card p-3 p-md-4"
            onSubmit={handleSubmit}
          >
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label
                  htmlFor="contact-name"
                  className="form-label fs-xs fw-medium text-zinc-100 mb-1"
                >
                  {c.formName}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={c.formPlaceholderName}
                  className="form-control form-control-dark rounded-3 fs-sm"
                />
              </div>
              <div className="col-12 col-md-6">
                <label
                  htmlFor="contact-email"
                  className="form-label fs-xs fw-medium text-zinc-100 mb-1"
                >
                  {c.formEmail}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={c.formPlaceholderEmail}
                  className="form-control form-control-dark rounded-3 fs-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="business-type"
                className="form-label fs-xs fw-medium text-zinc-100 mb-1"
              >
                {c.formBusiness}
              </label>
              <input
                id="business-type"
                name="businessType"
                type="text"
                value={formData.businessType}
                onChange={handleChange}
                placeholder={c.formPlaceholderBusiness}
                className="form-control form-control-dark rounded-3 fs-sm"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="form-label fs-xs fw-medium text-zinc-100 mb-1"
              >
                {c.formMessage}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={c.formPlaceholderMessage}
                className="form-control form-control-dark rounded-3 fs-sm"
                style={{ resize: "none" }}
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="d-flex align-items-center gap-2 rounded-3 p-2 fs-xs fw-medium"
                style={{ backgroundColor: "rgba(34, 197, 94, 0.15)", color: "#22c55e" }}>
                <CheckCircle style={{ height: 16, width: 16 }} />
                Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.
              </div>
            )}

            {status === "error" && (
              <div className="d-flex align-items-center gap-2 rounded-3 p-2 fs-xs fw-medium"
                style={{ backgroundColor: "rgba(239, 68, 68, 0.15)", color: "#ef4444" }}>
                <AlertCircle style={{ height: 16, width: 16 }} />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn w-100 rounded-pill bg-vd-red text-white fs-xs fw-medium transition-colors bg-vd-red-hover d-flex align-items-center justify-content-center gap-2"
              style={{ opacity: status === "loading" ? 0.7 : 1 }}
            >
              {status === "loading" && (
                <Loader2
                  className="animate-spin"
                  style={{ height: 14, width: 14, animation: "spin 1s linear infinite" }}
                />
              )}
              {c.submit}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
