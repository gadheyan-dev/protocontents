import { motion, useInView } from 'framer-motion'
import { Palette, TrendingUp, MessageSquare } from 'lucide-react'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Palette,
      title: 'Branding',
      description: 'Distinct visual identities that capture your startup’s essence and stand out in crowded markets.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Data-driven strategies that scale your brand and accelerate customer acquisition.',
    },
    {
      icon: MessageSquare,
      title: 'Product Messaging',
      description: 'Clear, compelling narratives that resonate with your target audience and drive conversions.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            About Us
          </h2>
          <p className="text-xl text-neutral-gray leading-relaxed">
            We help startups tell stories that scale. At Protocontents, we combine
            strategic thinking with creative excellence to build brands that resonate,
            inspire, and drive real business results for tech companies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-neutral-light p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

