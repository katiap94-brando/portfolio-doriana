import { motion, AnimatePresence } from 'motion/react';
import { Eye, Heart, Users, Calendar, Video, Megaphone, BookOpen, ChevronDown, Palette } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

import img1 from 'figma:asset/9e5257420224d681d98ff345ab41e7ac52615d6a.png';
import img2 from 'figma:asset/dfc2858aa5d896d586d1886c64f3c97833bcf941.png';
import img3 from 'figma:asset/a05268e3582ac962072c091acc47673b65fd221a.png';
import img4 from 'figma:asset/eedc18de54d963fb23f76681a9fe6f31cc2e57be.png';
import img5 from 'figma:asset/6ca2edc43df0fa54074336e23b1525c7839714b6.png';
import img6 from 'figma:asset/78c5eeccb933820e23f2a883859ae50a3068afbc.png';
import img7 from 'figma:asset/d33c7bd9047ea3003024c1d98496011165b0f138.png';
import img8 from 'figma:asset/d1fe1e5e169a5fc98d7ce5a02bd3d89b05194e34.png';

// Dono Sospeso
import donoLibro from 'figma:asset/722dc78efb2a28cf684ec369e4638fe4879a6744.png';
import donoGiocattolo from 'figma:asset/d238894d5645f88243f78e1404e315d43da1be70.png';
import donoSanta from 'figma:asset/354108f93fc898a48da575fccb55c6f9b12a0976.png';
import donoAnatale from 'figma:asset/242587be55b57870f057914fe043fde79c6e22ce.png';

// Loghi
import logo1 from 'figma:asset/cb5478b80c0c60b1aa269f1b5f4187bbc44635a0.png';
import logo2 from 'figma:asset/8147c53868ef66f8345279579bb2e0e7adb0c11b.png';
import logo3 from 'figma:asset/f7ee72dd97657c274bb9b82fb090e7f7488baded.png';
import logo4 from 'figma:asset/7b5e737b8aee07cb531565f510a51d5309c5e60c.png';
import logo5 from 'figma:asset/f64745a4f99379b5415c8b06da1a3305bf63399f.png';
import logo6 from 'figma:asset/326ac95f8ad81b099682d73f6863f7eba519dbaa.png';
import logo7 from 'figma:asset/53b26f220358c08f99ebbba0467274cfbf8a01ba.png';
import logo8 from 'figma:asset/0c22e943c5b187b79ba3bb126c783d2946f6ae8c.png';
import logo9 from 'figma:asset/8dfbcb86db281adba8027522bf2410a252a6aed0.png';
import logo10 from 'figma:asset/23a1a7c99ceab037f197f5b11ce2ba06d429811b.png';

// Campagna FantaSanremo 2026
import sanremo1 from 'figma:asset/2372c8ad7957dda89858c9f67d2b16a530527950.png';
import sanremo2 from 'figma:asset/105092877d4a4811d8aa092ba343fdab047640ac.png';
import sanremo3 from 'figma:asset/46b3fc226e1e3cc437d5a36732ef1ba270982b2c.png';

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  image?: string;
  stats: {
    followers?: string;
    views?: string;
    engagement?: string;
  };
  delay: number;
}

function ProjectCard({ title, client, description, image, stats, delay }: ProjectCardProps) {
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
          <img src={image} alt={title} className="w-full h-full object-cover" />
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
        <p
          className="text-sm text-gray-600 mb-4 leading-relaxed"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {description}
        </p>

        {/* Stats */}
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
  const [ref, isInView] = useInView({ threshold: 0.1 });
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
          description: 'Contenuto per sensibilizzare sull\'importanza dell\'ascolto come atto di amore e trasformazione.',
          image: img3,
          stats: {},
        },
        {
          title: 'La Scuola che Vorrei',
          client: 'Young Caritas Pisa',
          description: 'Campagna per promuovere i diritti degli studenti e una scuola inclusiva e sicura.',
          image: img4,
          stats: {},
        },
        {
          title: 'Giornata Mondiale dei Poveri',
          client: 'Caritas Diocesana di Pisa',
          description: 'Post emozionale per sensibilizzare sulla povertà con citazione biblica e imagery potente.',
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
      ],
    },
    {
      name: 'Dono Sospeso',
      icon: Megaphone,
      color: 'from-coral-400 to-yellow-400',
      description: 'Campagne natalizie di solidarietà e raccolta fondi',
      projects: [
        {
          title: 'Giocattolo Sospeso',
          client: 'Caritas Diocesana di Pisa',
          description: 'Campagna virale per il Giocattolo Sospeso con bambino supereroe, coinvolgendo la community con un tone divertente e ironico.',
          image: donoGiocattolo,
          stats: {},
        },
        {
          title: 'Libro Sospeso',
          client: 'Caritas Diocesana di Pisa',
          description: 'Campagna per il Libro Sospeso con bambina che legge, promuovendo la cultura e la solidarietà.',
          image: donoLibro,
          stats: {},
        },
        {
          title: 'Cosa Aspetti?',
          client: 'Caritas Diocesana di Pisa',
          description: 'Post virale con Babbo Natale ironico per stimolare la partecipazione alla campagna #LibroSospeso e #GiocattoloSospeso.',
          image: donoSanta,
          stats: {},
        },
        {
          title: 'Sei un Negoziante?',
          client: 'Caritas Diocesana di Pisa',
          description: 'Campagna dedicata ai negozianti per aderire all\'iniziativa Dono Sospeso Anatale con librerie e giocattolerie.',
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
          stats: {},
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Video Eventi',
          description: 'Documentazione video di eventi, percorsi nelle scuole e attività di volontariato giovanile.',
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
          description: 'Logo colorato e dinamico per progetto giovanile "Coloriamo il mondo" con palette vibrante.',
          image: logo1,
          stats: {},
        },
        {
          client: 'Young Caritas Pisa',
          title: 'E-STATE al Servizio 2025',
          description: 'Logo estivo per campo di volontariato giovanile con elementi playful e accoglienti.',
          image: logo2,
          stats: {},
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Canale WhatsApp',
          description: 'Logo per il lancio del canale WhatsApp istituzionale, unendo l\'identità Caritas con lo strumento digital.',
          image: logo3,
          stats: {},
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Libro Sospeso 2025',
          description: 'Logo natalizio per la campagna solidale "Libro Sospeso" con decorazioni festive.',
          image: logo4,
          stats: {},
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Giocattolo Sospeso 2025',
          description: 'Logo coordinato per la campagna "Giocattolo Sospeso" con palette calda e tema natalizio.',
          image: logo5,
          stats: {},
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Strappare Lungo i Bordi OLTRE',
          description: 'Logo bold e ironico per progetto sociale ispirato alla serie cult, con stile street e autentico.',
          image: logo6,
          stats: {},
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Il Coraggio di Vivere',
          description: 'Logo per Convegno Diocesano Caritas con tipografia elegante e palette istituzionale.',
          image: logo7,
          stats: {},
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Compagni di Viaggio',
          description: 'Logo per convegno del 30 novembre 2024 con simbolismo del cammino condiviso.',
          image: logo8,
          stats: {},
        },
        {
          client: 'Progetto Personale',
          title: '1 Grazie & 1/2 - Dori&Ka',
          description: 'Logo personale colorato e giocoso per brand "1 Grazie & 1/2" con palette multicolor.',
          image: logo9,
          stats: {},
        },
        {
          client: 'Caritas Diocesana di Pisa',
          title: 'Caro Amico Ti Dono',
          description: 'Logo per campagna solidale dedicata ai bambini, con illustrazioni colorate e messaggio inclusivo.',
          image: logo10,
          stats: {},
        },
      ],
    },
    {
      name: 'FantaSanremo 2026',
      icon: Megaphone,
      color: 'from-coral-400 to-yellow-400',
      description: 'Campagna virale "Lo Sapevi Che...?" su valori Caritas durante Sanremo',
      projects: [
        {
          client: 'Young Caritas Pisa',
          title: 'Lo Sapevi Che... #impegno',
          description: 'Format virale FantaSanremo per Young Caritas. Campagna social \"Lo Sapevi Che...?\" che usa il trend Sanremo per educare sui valori della Caritas: l\'impegno verso gli ultimi.',
          image: sanremo1,
          stats: {},
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Lo Sapevi Che... #accoglienza',
          description: 'Secondo episodio della serie FantaSanremo. Format ironico e accattivante che parla di accoglienza unendo il linguaggio pop del Festival alla missione sociale.',
          image: sanremo2,
          stats: {},
        },
        {
          client: 'Young Caritas Pisa',
          title: 'Lo Sapevi Che... #dirittidelledonne',
          description: 'Terzo episodio dedicato ai diritti delle donne. Campagna che intercetta il buzz di Sanremo per veicolare messaggi di giustizia sociale con tone divertente.',
          image: sanremo3,
          stats: {},
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
            Alcuni dei lavori di cui vado più fiera · Clicca per esplorare
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