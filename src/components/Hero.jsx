import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400"
        animate={{
          background: [
            'linear-gradient(135deg, #38BDF8 0%, #E879F9 50%, #2DD4BF 100%)',
            'linear-gradient(225deg, #E879F9 0%, #38BDF8 50%, #2DD4BF 100%)',
            'linear-gradient(315deg, #2DD4BF 0%, #E879F9 50%, #38BDF8 100%)',
            'linear-gradient(135deg, #38BDF8 0%, #E879F9 50%, #2DD4BF 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ opacity: 0.1 }}
      />

      {/* Abstract Blob SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D946EF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#blobGradient)"
          initial={{ d: 'M0,400 Q300,200 600,300 T1200,400 L1200,800 L0,800 Z' }}
          animate={{
            d: [
              'M0,400 Q300,200 600,300 T1200,400 L1200,800 L0,800 Z',
              'M0,400 Q300,300 600,250 T1200,350 L1200,800 L0,800 Z',
              'M0,400 Q300,250 600,350 T1200,450 L1200,800 L0,800 Z',
              'M0,400 Q300,200 600,300 T1200,400 L1200,800 L0,800 Z',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-12 h-12 text-primary-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-neutral-dark mb-6 text-balance"
          >
            We craft powerful brands for{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              tech startups.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-neutral-gray mb-12 max-w-2xl mx-auto"
          >
            From strategy to visuals, we bring your story to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            >
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#services')}
              className="px-8 py-4 bg-white text-primary-500 border-2 border-primary-500 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all"
            >
              See Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-gray rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-gray rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

