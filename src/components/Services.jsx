import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Target,
  Brush,
  Rocket,
  FileText,
  Layout,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      icon: Target,
      title: 'Brand Strategy',
      tagline: 'Strategic foundations for lasting impact',
      bullets: [
        'Market research and competitive analysis',
        'Brand positioning and differentiation',
        'Voice and tone guidelines',
      ],
      description:
        'We dive deep into your market, audience, and vision to create a brand strategy that positions your startup for long-term success.',
    },
    {
      icon: Brush,
      title: 'Visual Identity',
      tagline: 'Memorable design that reflects your values',
      bullets: [
        'Logo design and brand marks',
        'Color palette and typography',
        'Brand guidelines and asset library',
      ],
      description:
        'From concept to execution, we design visual identities that capture your startup’s personality and make a lasting impression.',
    },
    {
      icon: Rocket,
      title: 'Product Launch Collateral',
      tagline: 'Launch-ready materials that generate buzz',
      bullets: [
        'Website design and development support',
        'Marketing materials and presentations',
        'Social media assets and templates',
      ],
      description:
        'Get your product launch right with compelling collateral that tells your story and drives early adoption.',
    },
    {
      icon: FileText,
      title: 'Growth-Focused Content',
      tagline: 'Content that converts and scales',
      bullets: [
        'Blog posts and thought leadership',
        'Email marketing campaigns',
        'Social media strategy and content',
      ],
      description:
        'Content marketing that builds trust, educates your audience, and converts prospects into customers at scale.',
    },
    {
      icon: Layout,
      title: 'UX/UI for MVPs',
      tagline: 'User-centered design for rapid validation',
      bullets: [
        'Wireframing and prototyping',
        'UI design and component libraries',
        'User testing and iteration support',
      ],
      description:
        'Design MVPs that users love. We create intuitive, beautiful interfaces that help you validate quickly and iterate smartly.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="services" ref={ref} className="py-24 bg-neutral-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Our Services
          </h2>
          <p className="text-xl text-neutral-gray">
            Comprehensive branding and marketing solutions tailored for tech startups
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, rotateY: 5 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
              onClick={() =>
                setExpandedService(expandedService === index ? null : index)
              }
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <button
                  className="text-neutral-gray hover:text-primary-500 transition-colors"
                  aria-label={`${expandedService === index ? 'Collapse' : 'Expand'} ${service.title}`}
                >
                  {expandedService === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>

              <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-4">
                {service.tagline}
              </p>

              <ul className="space-y-2 mb-4">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="text-neutral-gray flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {expandedService === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-neutral-200"
                >
                  <p className="text-neutral-gray leading-relaxed">
                    {service.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                  >
                    Learn More →
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

