"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-2xl shadow-[0_8px_28px_rgba(37,211,102,0.45)] animate-float hover:scale-110 hover:shadow-[0_12px_36px_rgba(37,211,102,0.55)] transition-all duration-300"
    >
      💬
    </a>
  );
}
