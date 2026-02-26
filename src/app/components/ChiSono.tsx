import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function ChiSono() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="chi-sono" ref={ref} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl text-[#1877F2] mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
          >
            Chi Sono
          </h2>
          <p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Sono <span className="text-[#1877F2]" style={{ fontWeight: 700 }}>Doriana Rizzo</span>, 
            Social Media Manager & Communication Specialist. Mi occupo di strategie digitali, 
            gestione canali social e creazione di contenuti che raccontano storie autentiche e costruiscono community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              className="text-3xl text-gray-800 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Il mio approccio
            </h3>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Credo nella <span className="text-[#1877F2]" style={{ fontWeight: 600 }}>comunicazione autentica</span> che 
              parte dall'ascolto e si traduce in contenuti capaci di creare valore e connessione.
            </p>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Ogni progetto è un'opportunità per <span className="text-coral-500" style={{ fontWeight: 600 }}>raccontare 
              storie uniche</span>, costruire identità digitali coerenti e coinvolgere le persone in modo significativo.
            </p>
            <p
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Lavoro principalmente con la <span className="text-[#1877F2]" style={{ fontWeight: 600 }}>Caritas Diocesana di Pisa</span> e realtà del <span className="text-purple-600" style={{ fontWeight: 600 }}>terzo 
              settore</span>, dove la sfida è unire missione sociale e comunicazione efficace.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3
              className="text-3xl text-gray-800 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Le mie competenze
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                'Social Media Strategy',
                'Content Creation',
                'Community Management',
                'Video Editing & Reels',
                'Campagne Sociali',
                'Graphic Design',
                'Progettazione Infografiche',
                'Ideazione Loghi',
                'Web Design & UX',
                'Editing Testuale',
                'Collaborazioni Editoriali',
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ x: 20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1877F2] to-purple-500 flex-shrink-0" />
                  <span
                    className="text-gray-700 text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* NUOVA SEZIONE: Progetti in Evidenza */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3
            className="text-3xl text-gray-800 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Progetti in Evidenza
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* In lavorazione */}
            <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-sm text-yellow-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  In Lavorazione
                </span>
              </div>
              <p className="text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Nuovo Sito Web Caritas Pisa
              </p>
            </div>

            {/* Progetti di successo - Fantasanremo */}
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="text-sm text-green-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  Lavori in evidenza
                </span>
              </div>
              <p className="text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Fantasanremo Caritas Pisa
              </p>
            </div>

            {/* Servizio Civile */}
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="text-sm text-green-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  Lavori in evidenza
                </span>
              </div>
              <p className="text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Bandi Servizio Civile (dal 2023 ad oggi)
              </p>
            </div>

            {/* Dono Sospeso */}
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="text-sm text-green-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  Lavori in evidenza
                </span>
              </div>
              <p className="text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Campagne "Dono Sospeso a Natale"
              </p>
            </div>

            {/* Festival */}
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="text-sm text-green-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  Lavori in evidenza
                </span>
              </div>
              <p className="text-gray-800 mb-1" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Festival Di Storie in Movimento
              </p>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                in collaborazione con cooperativa Il simbolo, AIPD Pisa e Impresa sociale Con I Bambini
              </p>
            </div>

            {/* Bilancio Sociale */}
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm text-purple-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  Altri lavori e collaborazioni
                </span>
              </div>
              <p className="text-gray-800 mb-1" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Bilancio Sociale 2024
              </p>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Cooperativa Il Simbolo
              </p>
            </div>

            {/* Infografica */}
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm text-purple-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  Altri lavori e collaborazioni
                </span>
              </div>
              <p className="text-gray-800 mb-1" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Infografica Natale Sospeso
              </p>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Sistema infografico completo
              </p>
            </div>

            {/* Collaborazioni */}
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm text-purple-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  Altri lavori e collaborazioni
                </span>
              </div>
              <p className="text-gray-800 mb-1" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Collaborazioni Editoriali
              </p>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Toscana Oggi, Vita Nova
              </p>
            </div>

            {/* Design per il Sociale */}
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm text-purple-700" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  Altri lavori e collaborazioni
                </span>
              </div>
              <p className="text-gray-800 mb-1" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Design per il Sociale
              </p>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Locandine e loghi
              </p>
            </div>
          </div>
        </motion.div>

        {/* NUOVA SEZIONE: La mia filosofia Caritas */}
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="relative"
        >
          {/* Decorative corner accents */}
          <div className="absolute -top-3 -left-3 w-24 h-24 border-t-4 border-l-4 border-[#1877F2] rounded-tl-3xl opacity-30" />
          <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-4 border-r-4 border-coral-400 rounded-br-3xl opacity-30" />
          
          <div className="bg-gradient-to-br from-[#1877F2]/5 via-purple-50 to-coral-50 rounded-3xl p-10 md:p-12 shadow-xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="currentColor" className="text-[#1877F2]" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1877F2] to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-3xl md:text-4xl text-[#1877F2]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
                >
                  La mia visione della comunicazione per la Caritas Diocesana
                </h3>
              </div>

              <div className="space-y-5">
                <p
                  className="text-lg text-gray-800 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Nel mondo <span className="text-[#1877F2]" style={{ fontWeight: 700 }}>Caritas</span>, penso 
                  che oggi più che mai per essere{' '}
                  <span className="text-[#1877F2]" style={{ fontWeight: 700 }}>"chiesa in uscita"</span> dobbiamo 
                  spingerci a <span className="text-coral-500" style={{ fontWeight: 600 }}>comunicare con l'esterno</span>, 
                  nelle modalità più adatte ai tempi ma senza mai perdere di vista la nostra mission.
                </p>

                <p
                  className="text-lg text-gray-800 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <span className="text-purple-600" style={{ fontWeight: 600 }}>Non dobbiamo omologarci</span> ma 
                  non possiamo non comunicare quello che facciamo, far trasparire quello che siamo:{' '}
                  <em className="text-gray-700" style={{ fontWeight: 600 }}>
                    "una chiesa che esce fuori, che si sporca le mani e che vive i tempi e risponde alle esigenze di oggi"
                  </em>.
                </p>

                <p
                  className="text-lg text-gray-800 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Quello che provo a comunicare con il mio lavoro in Caritas è tutto questo. Promuovere il mondo 
                  Caritas significa renderlo <span className="text-[#1877F2]" style={{ fontWeight: 700 }}>accessibile, 
                  accattivante</span>.
                </p>

                {/* Quote highlight box */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-[#1877F2] shadow-md my-6">
                  <p
                    className="text-xl text-gray-800 italic"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
                  >
                    Non si tratta di renderci <span className="line-through text-gray-400">"virali"</span> ma di 
                    renderci <span className="text-[#1877F2]" style={{ fontWeight: 700 }}>"visibili"</span> per{' '}
                    <span className="text-coral-500" style={{ fontWeight: 700 }}>contaminarci</span>.
                  </p>
                </div>

                <p
                  className="text-lg text-gray-800 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  La comunicazione in Caritas non deve essere alla ricerca di{' '}
                  <span className="line-through text-gray-400">follower</span> ma di{' '}
                  <span className="text-[#1877F2]" style={{ fontWeight: 700 }}>seguaci</span>, che vogliono 
                  condividere, animare e divulgare la nostra missione:{' '}
                  <span className="text-purple-600" style={{ fontWeight: 700 }}>
                    "camminare al passo degli ultimi"
                  </span>.
                </p>

                {/* Papa Francesco Quote */}
                <div className="mt-8 text-center">
                  <div className="inline-block relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#1877F2] via-purple-500 to-coral-400 rounded-2xl blur-lg opacity-20" />
                    <div className="relative bg-white rounded-2xl px-8 py-6 shadow-lg">
                      <svg className="w-8 h-8 text-[#1877F2] opacity-30 mb-2 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                      </svg>
                      <p
                        className="text-2xl text-gray-800 italic mb-3"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                      >
                        "Il potere della condivisione è la prossimità."
                      </p>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
                      >
                        — Papa Francesco
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="flex gap-2 mt-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    className={`w-3 h-3 rounded-full ${
                      i % 3 === 0 ? 'bg-[#1877F2]' : i % 3 === 1 ? 'bg-coral-400' : 'bg-purple-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wavy divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f3f4f6"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}