import { Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: 'Actualités',
    categoryAr: 'أخبار',
    title: 'La Matinale fête ses 100 émissions',
    titleAr: 'الصباحية تحتفل بـ 100 برنامج',
    excerpt: 'Dali et toute l\'équipe de Radio Zigomar remercient les auditeurs pour leur fidélité. Un siècle d\'aventures sonores qui ne fait que commencer.',
    date: '18 avril 2025',
    image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    category: 'Musique',
    categoryAr: 'موسيقى',
    title: 'Nouveau: Les Perles Franco-Arabes du vendredi',
    titleAr: 'جديد: جواهر عربية فرنسية كل جمعة',
    excerpt: 'Une nouvelle émission hebdomadaire dédiée aux artistes qui ont su marier les deux cultures avec brio — de Khaled à Calogero.',
    date: '10 avril 2025',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    category: 'Événement',
    categoryAr: 'حدث',
    title: 'Radio Zigomar en live au Café des Arts',
    titleAr: 'راديو زيڨومار مباشرة من مقهى الفنون',
    excerpt: 'Pour la première fois, Radio Zigomar sort de ses studios pour un événement exceptionnel le 15 mai. Réservez votre place !',
    date: '2 avril 2025',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c8973a] mb-4">Actualités</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Dernières nouvelles
            </h2>
            <p className="text-white/30 mt-2" dir="rtl" lang="ar">آخر الأخبار</p>
          </div>
          <button className="flex items-center gap-2 text-sm text-[#c8973a] hover:text-[#e8b84b] transition-colors tracking-wider uppercase group">
            Toutes les actualités
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={article.id}
              className={`group cursor-pointer ${i === 0 ? 'md:col-span-1' : ''}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[16/10]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-[#c8973a]/90 text-[#0a0a0a] font-semibold px-3 py-1 rounded-full tracking-wider uppercase">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center gap-2 text-white/30 text-xs mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </div>

              <h3 className="text-white font-bold text-lg leading-snug mb-1 group-hover:text-[#c8973a] transition-colors">
                {article.title}
              </h3>
              <p className="text-white/30 text-xs mb-3" dir="rtl" lang="ar">
                {article.titleAr}
              </p>
              <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-1.5 text-[#c8973a] text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Lire la suite
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
