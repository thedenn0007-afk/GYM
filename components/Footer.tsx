import Link from "next/link";

const footerLinks = {
  Programs: ["Strength Training", "Cardio Fitness", "Personal Training", "CrossFit", "Weight Loss"],
  Company: ["About Us", "Our Trainers", "Membership", "Gallery", "Contact"],
  Support: ["FAQ", "Privacy Policy", "Terms of Service", "Refund Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[var(--border)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 px-10 md:px-16 pt-20 pb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 font-bebas text-[22px] tracking-[3px] mb-5">
            <div
              className="w-7 h-7 bg-[var(--red)] flex items-center justify-center text-white text-xs font-extrabold"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
              I
            </div>
            IRON<span className="text-[var(--red)]">FORGE</span>
          </div>
          <p className="text-[var(--gray)] text-[13px] leading-[1.85] max-w-[260px]">
            Built for people who want real results. World-class equipment, expert
            coaching, and a community that drives you.
          </p>

          {/* Socials */}
          <div className="flex gap-3 mt-6">
            {["𝕏", "📸", "📘", "▶"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-sm hover:bg-[var(--red)] hover:border-[var(--red)] transition-all duration-300 no-underline"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <div className="font-condensed font-bold text-[12px] tracking-[2px] uppercase mb-6">
              {section}
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[var(--gray)] text-[13px] hover:text-white transition-colors duration-300 no-underline flex items-center gap-2 group"
                  >
                    <span className="text-[var(--red)] text-[10px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border)] px-10 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[var(--gray)]">
        <span>
          © {new Date().getFullYear()} <span className="text-[var(--red)]">IronForge Gym</span>. All rights reserved.
        </span>
        <span className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors no-underline">Privacy</a>
          <a href="#" className="hover:text-white transition-colors no-underline">Terms</a>
          <a href="#" className="hover:text-white transition-colors no-underline">Sitemap</a>
        </span>
      </div>
    </footer>
  );
}
