import { motion, AnimatePresence } from 'motion/react';
import { Eye, Heart, Users, Calendar, Video, Megaphone, BookOpen, ChevronDown, Palette } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

// Giornate mondiali
const img1 = '/festa-dei-lavoratori.jpeg';
const img2 = '/don-pino-puglisi.jpeg';
const img3 = '/ascolto.jpeg';
const img4 = '/la-scuola-che-vorrei.jpeg';
const img5 = '/lotto-marzo.jpeg';
const img6 = '/17novembre.jpeg';
const img7 = '/era-una-mattina-19-marzo.jpeg';
const img8 = '/10dicembre.jpeg';
const imgPapa = '/papa-francesco.jpeg';

// Dono Sospeso
const donoGiocattolo = '/giocattolo-sospeso-logo.png';
const donoLibro = '/libro-sospeso-logo.png';
const donoSanta = '/cosa-aspetti.jpeg';
const donoAnatale = '/a-natale.jpeg';

// Loghi
const logo1 = '/up-logo.png';
const logo2 = '/estate-in-servizio-logo.png';
const logo3 = '/caritas-whatsapp-logo.png';
const logo4 = '/libro-sospeso-logo.png';
const logo5 = '/giocattolo-sospeso-logo.png';
const logo6 = '/strappare-oltre-i-bordi.png';
const logo7 = '/il-coraggio-di-vivere-logo.png';
const logo8 = '/compagni-di-viaggio-logo.png';
const logo9 = '/una-grafica-e-mezza-logo.png';
const logo10 = '/Caro-amico-ti-dono.png';

// Video & Reels
const reelIstituzionali = '/reel-istituzionali.jpeg';
const reelYoung = '/reel-young-caritas.jpeg';

// FantaSanremo
const sanremo1 = '/Dargen.png';
const sanremo2 = '/Levante.png';
const sanremo3 = '/Malika.png';
const sanremoCanzonette = '/dargen-canzonette.jpeg';
const giochi1 = '/giochi-di-intrattenimento-1.jpeg';
const giochi2 = '/giochi-di-intrattenimento-2.jpeg';
const giochi3 = '/giochi-di-intrattenimento-3.jpeg';
const giochi4 = '/giochi-di-intrattenimento-4.jpeg';

interface ProjectCardProps {
  title: string;
  client: string;
  description?: string;
  image?: string;
  stats: {
    followers?: string;
    views?: string;
    engagement?: string;
  };
  delay: number;
  hideDescription?: boolean;
  logoOnly?: boolean;
  objectPosition?: string;
}

function ProjectCard({ title, client, description, image, stats, delay, hideDescription, logoOnly, objectPosition }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300"
    >
      {/* Image */}
      <div className="h-64 relative overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ objectPosition: objectPosition || 'center' }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-coral-200 to-yellow-200 flex items-center justify-center">
            <svg className="w-24 h-24 text-white/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h4
          className="text-xl text-[#1877F2] mb-1"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
        >
          {title}
        </h4>
        <p
          className="text-base text-gray-800 mb-2"
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
        >
          {client}
        </p>
        {!hideDescription && description && (
          <p
            className="text-sm text-gray-600 mb-4 leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {description}
          </p>
        )}

        {/* Stats */}
        {!hideDescription && (
          <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-100">
            {stats.followers && (
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#1877F2]" />
                <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  {stats.followers}
                </span>
              </div>
            )}
            {stats.views && (
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-coral-500" />
                <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  {stats.views}
                </span>
              </div>
            )}
            {stats.engagement && (
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-pink-500" />
                <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  {stats.engagement}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface CategorySectionProps {
  category: {
    name: string;
    icon: any;
    color: string;
    description: string;
  };
  projects: any[];
  isOpen: boolean;
  onToggle: () => void;
  isInView: boolean;
}

function CategorySection({ category, projects, isOpen, onToggle, isInView }: CategorySectionProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6"
    >
      {/* Header - Clickable */}
      <motion.button
        onClick={onToggle}
        whileHover={{ backgroundColor: 'rgba(24, 119, 242, 0.02)' }}
        className="w-full p-8 flex items-center justify-between transition-colors duration-300"
      >
        <div className="flex items-center gap-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
            <category.icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-left">
            <h3
              className="text-3xl text-gray-800 mb-2"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
            >
              {category.name}
            </h3>
            <p
              className="text-base text-gray-600"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {category.description}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1877F2] to-purple-500 flex items-center justify-center"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.button>

      {/* Content - Expandable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.05 });
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const categories = [
    {
      name: 'Giornate mondiali',
      icon: Calendar,
      color: 'from-[#1877F2] to-purple-500',
      description: 'Post per celebrazioni e ricorrenze significative',
      projects: [
        {
          title: 'Festa dei Lavoratori',
          client: 'Caritas Diocesana di Pisa',
          description: 'Post per la celebrazione della Festa dei Lavoratori con focus sul valore e dignità del lavoro.',
          image: img1,
          stats: {},
        },
        {
          title: 'Don Pino Puglisi',
          client: 'Caritas Diocesana di Pisa',
          description: 'Commemorazione di Don Pino Puglisi, eroe della fede, con messaggio di speranza e coraggio.',
          image: img2,
          stats: {},
        },
        {
          title: 'Giornata dell\'Ascolto',
          client: 'Caritas Diocesana di Pisa',
          description: 'Contenuto per sensibilizzare l\'importanza dell\'ascolto, cuore del servizio in Caritas.',
          image: img3,
          stats: {},
        },
        {
          title: 'La Scuola che Vorrei',
          client: 'Young Caritas Pisa',
          description: 'Post per il contrasto alla Povertà Educativa',
          image: img4,
          stats: {},
        },
        {
          title: 'Giornata Mondiale dei Poveri',
          client: 'Caritas Diocesana di Pisa',
          description: 'Post per la sensibilizzazione della giornata mondiale dei poveri.',
          image: img5,
          stats: {},
        },
        {
          title: '8 Marzo - Festa della Donna',
          client: 'Caritas Diocesana di Pisa',
          description: 'Celebrazione della Festa della Donna con grafica inclusiva e messaggio di empowerment.',
          image: img6,
          stats: {},
        },
        {
          title: 'Una Mattina di Marzo',
          client: 'Caritas Diocesana di Pisa',
          description: 'Ricordo del 19 marzo 1994 con messaggio sulla legalità e giustizia sociale.',
          image: img7,
          stats: {},
        },
        {
          title: 'Giornata Diritti Umani',
          client: 'Caritas Diocesana di Pisa',
          description: 'Post per la Giornata Mondiale dei Diritti Umani con citazione di Papa Francesco.',
          image: img8,
          stats: {},
        },
        {
          title: 'Pillole di Papa Leone',
          client: 'Caritas Diocesana di Pisa',
          description: 'Rubrica per la divulgazione di messaggi di Papa Leone.',
          image: imgPapa,
          stats: {},
        },
      ],
    },
    {
      name: 'Dono Sospeso',
      icon: Megaphone,
      color: 'from-coral-400 to-yellow-400',
      description: 'Progetto Natalizio di solidarietà Caritas Pisa',
      projects: [
        {
          title: 'Giocattolo Sospeso',
          client: 'Caritas Diocesana di Pisa',
          description: 'Progettazione locandina Giocattolo sospeso a Natale',
          image: donoGiocattolo,
          stats: {},
        },
        {
          title: 'Libro Sospeso',
          client: 'Caritas Diocesana di Pisa',
          description: 'Progettazione locandina Libro Sospeso a Natale',
          image: donoLibro,
          stats: {},
        },
        {
          title: 'Cosa Aspetti?',
          client: 'Caritas Diocesana di Pisa',
          description: 'Post con Babbo Natale ironico per stimolare la partecipazione alla campagna #LibroSospeso e #GiocattoloSospeso.',
          image: donoSanta,
          stats: {},
        },
        {
          title: 'Sei un Negoziante?',
          client: 'Caritas Diocesana di Pisa',
          description: 'Campagna dedicata ai negozianti per aderire all\'iniziativa Dono Sospeso A Natale con librerie e giocattolerie.',
          image: donoAnatale,
          stats: {},
        },
      ],
    },
    {
      name: 'Video & Reels',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      description: 'Contenuti video per storytelling e engagement',
      projects: [
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Reels Istituzionali',
          description: 'Creazione di reels per raccontare le attività quotidiane della Caritas e sensibilizzare il pubblico.',
          image: reelIstituzionali,
          objectPosition: 'top',
          stats: {},
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Reels Progetti',
          description: 'Documentazione video di eventi, percorsi nelle scuole e attività di volontariato giovanile.',
          image: reelYoung,
          objectPosition: 'top',
          stats: {},
        },
      ],
    },
    {
      name: 'Loghi & Identità Visiva',
      icon: Palette,
      color: 'from-pink-500 to-purple-600',
      description: 'Ideazione e progettazione di loghi per eventi e progetti sociali',
      projects: [
        {
          client: 'Young Caritas Pisa',
          title: 'UP! To the Next Level',
          image: logo1,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Young Caritas Pisa',
          title: 'E-STATE al Servizio 2025',
          image: logo2,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Canale WhatsApp',
          image: logo3,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Libro Sospeso 2025',
          image: logo4,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Giocattolo Sospeso 2025',
          image: logo5,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Strappare oltre i bordi',
          image: logo6,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Il Coraggio di Vivere',
          image: logo7,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Compagni di Viaggio',
          image: logo8,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Progetto Personale',
          title: '1 Grafica & 1/2 - Dori&Ka',
          image: logo9,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Caro Amico Ti Dono',
          image: logo10,
          stats: {},
          hideDescription: true,
        },
      ],
    },
    {
      name: 'FantaSanremo 2026',
      icon: Megaphone,
      color: 'from-coral-400 to-yellow-400',
      description: 'Progetto per la promozione di Young Caritas Pisa',
      projects: [
        {
          client: 'Young Caritas Pisa',
          title: 'Lo Sapevi Che... #impegno',
          image: sanremo1,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Lo Sapevi Che... #accoglienza',
          image: sanremo2,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Lo Sapevi Che... #dirittidelledonne',
          image: sanremo3,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Non "sono solo" canzonette',
          image: sanremoCanzonette,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Giochi di intrattenimento',
          image: giochi1,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Giochi di intrattenimento',
          image: giochi2,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Giochi di intrattenimento',
          image: giochi3,
          stats: {},
          hideDescription: true,
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Giochi di intrattenimento',
          image: giochi4,
          stats: {},
          hideDescription: true,
        },
      ],
    },
  ];

  return (
    <section id="progetti" ref={ref} className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-coral-50 relative overflow-hidden">
      {/* Decorative confetti dots */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-3 opacity-30">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i % 3 === 0 ? 'bg-[#1877F2]' : i % 3 === 1 ? 'bg-coral-400' : 'bg-yellow-400'
            }`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl text-[#1877F2] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
          >
            Progetti / Portfolio
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Clicca per esplorare
          </p>
        </motion.div>

        {/* Category Accordions */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <CategorySection
              key={category.name}
              category={category}
              projects={category.projects}
              isOpen={openCategories.includes(category.name)}
              onToggle={() => toggleCategory(category.name)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Wavy divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#1877F2"
            fillOpacity="0.1"
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}