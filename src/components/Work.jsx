import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, X } from 'lucide-react'

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)

  // Placeholder projects - in production, these would come from a CMS or API
  const projects = [
    {
      id: 1,
      title: 'FinTech Platform Rebrand',
      category: 'Brand Strategy & Visual Identity',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      description:
        'Complete brand transformation for a Series A fintech startup, including new visual identity, messaging framework, and launch campaign that resulted in 300% increase in brand recognition.',
    },
    {
      id: 2,
      title: 'SaaS Product Launch',
      category: 'Product Launch Collateral',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description:
        'End-to-end launch materials for a B2B SaaS platform, including website design, marketing assets, and content strategy that drove 500+ signups in the first month.',
    },
    {
      id: 3,
      title: 'AI Startup Branding',
      category: 'Visual Identity & UX/UI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      description:
        'Fresh brand identity and MVP UI/UX design for an AI-powered productivity tool, helping them stand out in a competitive market and secure seed funding.',
    },
    {
      id: 4,
      title: 'HealthTech Content Strategy',
      category: 'Growth-Focused Content',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      description:
        'Content marketing strategy and execution that positioned a healthtech startup as a thought leader, resulting in 10x organic traffic growth over 6 months.',
    },
    {
      id: 5,
      title: 'E-commerce Platform Rebrand',
      category: 'Brand Strategy & Visual Identity',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description:
        'Strategic rebrand for an e-commerce platform targeting Gen Z, including new logo, color palette, and brand voice that resonated with their audience.',
    },
    {
      id: 6,
      title: 'EdTech MVP Design',
      category: 'UX/UI for MVPs',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      description:
        'User-centered MVP design for an educational technology startup, focusing on intuitive user flows and beautiful interfaces that facilitated rapid user adoption.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <>
      <section id="work" ref={ref} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Our Work
            </h2>
            <p className="text-xl text-neutral-gray">
              Real results for real startups. See how we've helped tech companies build
              brands that scale.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-neutral-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium mb-1">{project.category}</p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary-600 font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-gray text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-light transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-neutral-dark" />
              </button>
            </div>
            <div className="p-8">
              <p className="text-sm text-primary-600 font-medium mb-2">
                {selectedProject.category}
              </p>
              <h3 className="text-3xl font-bold text-neutral-dark mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-neutral-gray leading-relaxed text-lg">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Work

