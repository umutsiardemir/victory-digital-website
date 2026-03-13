"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const CHAT_LABELS = {
    tr: {
        title: "Victory Digital AI",
        subtitle: "Dijital pazarlama asistanınız",
        placeholder: "Mesajınızı yazın...",
        greeting:
            "Merhaba! 👋 Ben Victory Digital'in AI asistanıyım. Size dijital pazarlama hizmetlerimiz hakkında yardımcı olabilirim. Ne sormak istersiniz?",
        errorMsg: "Bir hata oluştu. Lütfen tekrar deneyin.",
        blockedMsg: "Uygunsuz içerik tespit edildi. Lütfen kurallara uygun yazın.",
        dailyLimitMsg: "Günlük mesaj limitinize ulaştınız. Yarın tekrar deneyebilirsiniz veya hello@victorydgtl.com adresine yazabilirsiniz.",
        remainingFew: "mesaj hakkınız kaldı",
    },
    en: {
        title: "Victory Digital AI",
        subtitle: "Your digital marketing assistant",
        placeholder: "Type your message...",
        greeting:
            "Hello! 👋 I'm Victory Digital's AI assistant. I can help you learn about our digital marketing services. What would you like to know?",
        errorMsg: "An error occurred. Please try again.",
        blockedMsg: "Inappropriate content detected. Please follow the rules.",
        dailyLimitMsg: "You've reached your daily message limit. Please try again tomorrow or email hello@victorydgtl.com.",
        remainingFew: "messages remaining",
    },
};

export default function ChatBot() {
    const { locale } = useLanguage();
    const labels = CHAT_LABELS[locale];

    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: labels.greeting },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [remaining, setRemaining] = useState<number | null>(null);
    const [dailyLimitReached, setDailyLimitReached] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Update greeting when locale changes
    useEffect(() => {
        setMessages((prev) => {
            if (prev.length === 1 && prev[0].role === "assistant") {
                return [{ role: "assistant", content: labels.greeting }];
            }
            return prev;
        });
    }, [locale, labels.greeting]);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
        }
    }, [open]);

    const sendMessage = async () => {
        const text = input.trim();
        if (!text || loading) return;

        const userMsg: Message = { role: "user", content: text };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: newMessages.filter((m) => m.role !== "assistant" || newMessages.indexOf(m) !== 0),
                }),
            });

            const data = await res.json();

            if (res.ok && data.reply) {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: data.reply },
                ]);
                if (typeof data.remaining === "number") {
                    setRemaining(data.remaining);
                }
            } else if (data.dailyLimitReached) {
                setDailyLimitReached(true);
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: labels.dailyLimitMsg },
                ]);
            } else if (data.blocked) {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: labels.blockedMsg },
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: labels.errorMsg },
                ]);
            }
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: labels.errorMsg },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="chatbot-fab d-flex align-items-center justify-content-center border-0"
                    aria-label="Open chat"
                    style={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #e11d2e 0%, #b91425 100%)",
                        color: "#fff",
                        cursor: "pointer",
                        zIndex: 9999,
                        boxShadow: "0 4px 24px rgba(225, 29, 46, 0.4), 0 2px 8px rgba(0,0,0,0.3)",
                        transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                >
                    <Bot style={{ width: 28, height: 28 }} />
                </button>
            )}

            {/* Chat Window */}
            {open && (
                <div
                    className="chatbot-window"
                    style={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        width: "min(400px, calc(100vw - 32px))",
                        height: "min(580px, calc(100vh - 48px))",
                        borderRadius: 16,
                        overflow: "hidden",
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(225,29,46,0.1)",
                        background: "#0d0d10",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: "16px 20px",
                            background: "linear-gradient(135deg, #e11d2e 0%, #b91425 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0,
                        }}
                    >
                        <div className="d-flex align-items-center gap-3">
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.2)",
                                }}
                            >
                                <Bot style={{ width: 20, height: 20, color: "#fff" }} />
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: "#fff",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {labels.title}
                                </div>
                                <div
                                    style={{
                                        fontSize: 12,
                                        color: "rgba(255,255,255,0.8)",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {labels.subtitle}
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="d-flex align-items-center justify-content-center border-0"
                            aria-label="Close chat"
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.15)",
                                color: "#fff",
                                cursor: "pointer",
                                transition: "background 0.2s",
                            }}
                        >
                            <X style={{ width: 18, height: 18 }} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        className="chatbot-messages"
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                            background: "#0d0d10",
                        }}
                    >
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    justifyContent:
                                        msg.role === "user" ? "flex-end" : "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: "85%",
                                        padding: "10px 14px",
                                        borderRadius:
                                            msg.role === "user"
                                                ? "14px 14px 4px 14px"
                                                : "14px 14px 14px 4px",
                                        background:
                                            msg.role === "user"
                                                ? "linear-gradient(135deg, #e11d2e, #c41828)"
                                                : "rgba(255,255,255,0.06)",
                                        color: msg.role === "user" ? "#fff" : "#e4e4e7",
                                        fontSize: 14,
                                        lineHeight: 1.5,
                                        border:
                                            msg.role === "user"
                                                ? "none"
                                                : "1px solid rgba(255,255,255,0.06)",
                                        whiteSpace: "pre-wrap",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                <div
                                    className="chatbot-typing"
                                    style={{
                                        padding: "10px 14px",
                                        borderRadius: "14px 14px 14px 4px",
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                    }}
                                >
                                    <span className="chatbot-dot" style={{ animationDelay: "0s" }} />
                                    <span className="chatbot-dot" style={{ animationDelay: "0.2s" }} />
                                    <span className="chatbot-dot" style={{ animationDelay: "0.4s" }} />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Remaining messages indicator */}
                    {remaining !== null && remaining <= 10 && !dailyLimitReached && (
                        <div
                            style={{
                                padding: "6px 16px",
                                background: remaining <= 5 ? "rgba(239, 68, 68, 0.15)" : "rgba(250, 204, 21, 0.1)",
                                borderTop: "1px solid rgba(255,255,255,0.04)",
                                fontSize: 12,
                                color: remaining <= 5 ? "#f87171" : "#facc15",
                                textAlign: "center",
                                flexShrink: 0,
                            }}
                        >
                            ⚠️ {remaining} {labels.remainingFew}
                        </div>
                    )}

                    {/* Input */}
                    <div
                        style={{
                            padding: "12px 16px",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            background: "#111114",
                            flexShrink: 0,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                background: dailyLimitReached ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                                borderRadius: 12,
                                border: "1px solid rgba(255,255,255,0.08)",
                                padding: "4px 4px 4px 14px",
                                opacity: dailyLimitReached ? 0.5 : 1,
                            }}
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={dailyLimitReached ? "—" : labels.placeholder}
                                disabled={loading || dailyLimitReached}
                                style={{
                                    flex: 1,
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                    color: "#e4e4e7",
                                    fontSize: 14,
                                }}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={loading || !input.trim() || dailyLimitReached}
                                className="d-flex align-items-center justify-content-center border-0"
                                aria-label="Send message"
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 8,
                                    background:
                                        input.trim() && !loading && !dailyLimitReached
                                            ? "linear-gradient(135deg, #e11d2e, #b91425)"
                                            : "rgba(255,255,255,0.06)",
                                    color:
                                        input.trim() && !loading && !dailyLimitReached
                                            ? "#fff"
                                            : "rgba(255,255,255,0.2)",
                                    cursor:
                                        input.trim() && !loading && !dailyLimitReached ? "pointer" : "default",
                                    transition: "all 0.2s",
                                    flexShrink: 0,
                                }}
                            >
                                {loading ? (
                                    <Loader2
                                        style={{
                                            width: 18,
                                            height: 18,
                                            animation: "spin 1s linear infinite",
                                        }}
                                    />
                                ) : (
                                    <Send style={{ width: 18, height: 18 }} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
