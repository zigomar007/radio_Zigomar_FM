import { Radio, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const footerLinks = [
  { label: 'En Direct', href: '#live' },
  { label: 'Programmes', href: '#schedule' },
  { label: 'À Propos', href: '#about' },
  { label: 'Actualités', href: '#news' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8973a] to-[#a06b20] flex items-center justify-center">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white tracking-widest text-sm uppercase">
                  Radio <span className="text-[#c8973a]">Zigomar</span>
                </p>
                <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase">98.3 FM</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-2">
              La Radio des Aventuriers — café-radio franco-arabe depuis 2024.
            </p>
            <p className="text-white/25 text-xs" dir="rtl" lang="ar">
              راديو المغامرين — راديو مقهى عربي فرنسي منذ 2024
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-5">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#c8973a] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-5">Nous suivre</p>
            <div className="flex gap-3 mb-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-[#c8973a] hover:border-[#c8973a]/30 hover:bg-[#c8973a]/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-3">Contact</p>
            <a
              href="mailto:contact@radiozigomar.com"
              className="text-white/50 hover:text-[#c8973a] text-sm transition-colors"
            >
              contact@radiozigomar.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2024–2025 Radio Zigomar 98.3 FM. Tous droits réservés.
          </p>
          <p className="text-white/15 text-xs" dir="rtl" lang="ar">
            جميع الحقوق محفوظة — راديو زيڨومار
          </p>
        </div>
      </div>
    </footer>
  );
}
