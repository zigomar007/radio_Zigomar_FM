import { Clock, Mic2, Music2, Coffee, Star } from 'lucide-react';

const programs = [
  {
    time: '06h – 09h',
    title: 'La Matinale avec Dali',
    titleAr: 'الصباحية مع دالي',
    desc: 'Réveillez-vous en douceur avec Dali — actualités, musique des années 80 et bonne humeur garantie.',
    days: 'Lun – Ven',
    icon: Coffee,
    featured: true,
  },
  {
    time: '09h – 12h',
    title: 'Pop & Rock Vintage',
    titleAr: 'بوب وروك كلاسيكي',
    desc: "Les meilleurs titres pop et rock des années 70, 80 et 90 — une plongée nostalgique dans l'âge d'or de la musique.",
    days: 'Tous les jours',
    icon: Music2,
    featured: false,
  },
  {
    time: '14h – 16h',
    title: 'Perles Franco-Arabes',
    titleAr: 'جواهر عربية فرنسية',
    desc: 'Une sélection de pépites musicales à la croisée des cultures — de Fairouz à Gainsbourg, en passant par Khaled.',
    days: 'Lun – Sam',
    icon: Star,
    featured: false,
  },
  {
    time: '18h – 20h',
    title: 'Chroniques du Soir',
    titleAr: 'وقائع المساء',
    desc: 'Théâtre radiophonique, sitcom et humour élégant pour terminer la journée avec le sourire.',
    days: 'Lun – Ven',
    icon: Mic2,
    featured: false,
  },
  {
    time: '21h – 00h',
    title: 'World Music Night',
    titleAr: 'ليلة الموسيقى العالمية',
    desc: 'World, électro oriental et rock alternatif — une invitation au voyage sonore pour les esprits libres.',
    days: 'Jeu – Sam',
    icon: Music2,
    featured: false,
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c8973a] mb-4">Grille des programmes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Nos Émissions</h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#c8973a]/40" />
        </div>

        <div className="grid gap-4">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.title}
                className={`group relative flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  prog.featured
                    ? 'border-[#c8973a]/30 bg-gradient-to-r from-[#c8973a]/10 to-transparent hover:border-[#c8973a]/50'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                }`}
              >
                {prog.featured && (
                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <span className="text-xs bg-[#c8973a]/20 text-[#c8973a] border border-[#c8973a]/30 px-2.5 py-1 rounded-full tracking-widest uppercase">
                      Phare
                    </span>
                  </div>
                )}

                {/* Time + icon */}
                <div className="flex items-start gap-4 md:w-48 flex-shrink-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    prog.featured ? 'bg-[#c8973a]/20' : 'bg-white/5'
                  }`}>
                    <Icon className={`w-5 h-5 ${prog.featured ? 'text-[#c8973a]' : 'text-white/40'}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-white/40 text-xs mb-1">
                      <Clock className="w-3 h-3" />
                      <span className="tracking-wider">{prog.time}</span>
                    </div>
                    <p className="text-xs text-white/30 tracking-wider uppercase">{prog.days}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                    <h3 className={`text-lg font-bold ${prog.featured ? 'text-[#c8973a]' : 'text-white'}`}>
                      {prog.title}
                    </h3>
                    <span className="text-white/30 text-sm" dir="rtl" lang="ar">
                      {prog.titleAr}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
