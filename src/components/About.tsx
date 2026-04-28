import { Compass, Music, Mic, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Music,
    title: 'Musique Éclectique',
    titleAr: 'موسيقى متنوعة',
    desc: 'Pop 80\'s, rock alternatif, world et perles franco-arabes — une curation sans frontières.',
  },
  {
    icon: Mic,
    title: 'Théâtre Radiophonique',
    titleAr: 'مسرح إذاعي',
    desc: 'À la croisée du théâtre et de la sitcom, des chroniques incarnées qui font voyager.',
  },
  {
    icon: Globe,
    title: 'Franco-Arabe',
    titleAr: 'عربي فرنسي',
    desc: 'Un pont entre deux cultures, deux langues et deux imaginaires qui se rencontrent.',
  },
  {
    icon: Compass,
    title: 'Esprits Libres',
    titleAr: 'أرواح حرة',
    desc: 'Pour les voyageurs éternels, nostalgiques des années 80 et amoureux de la liberté.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8973a]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c8973a] mb-4">À propos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Un refuge sonore
            </h2>
            <p className="text-2xl text-white/30 mb-8" dir="rtl" lang="ar">
              ملجأ صوتي
            </p>

            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>
                <strong className="text-[#c8973a]">Radio Zigomar 98.3 FM</strong>, créée en 2024, est une café-radio franco-arabe pensée comme un refuge sonore pour voyageurs éternels, nostalgiques des années 80 et esprits libres.
              </p>
              <p>
                À la croisée du théâtre radiophonique et de la sitcom, elle mêle musique éclectique, chroniques incarnées et humour élégant — un univers sonore unique où se rencontrent deux cultures.
              </p>
              <p>
                Son programme phare, <em className="text-white/80 not-italic font-medium">La Matinale avec Dali</em>, donne le ton chaque matin du lundi au vendredi de 06h à 09h.
              </p>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-[#c8973a]/10 border border-[#c8973a]/20">
              <p className="text-[#c8973a] font-bold text-lg tracking-wide italic">
                « La Radio des Aventuriers ! »
              </p>
              <p className="text-white/40 text-sm mt-1" dir="rtl" lang="ar">
                راديو المغامرين
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#c8973a]/20 hover:bg-[#c8973a]/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#c8973a]/10 flex items-center justify-center mb-4 group-hover:bg-[#c8973a]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#c8973a]" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{p.title}</h3>
                  <p className="text-white/30 text-xs mb-2" dir="rtl" lang="ar">{p.titleAr}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
