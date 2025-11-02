import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/protocontents', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/protocontents', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/protocontents', label: 'Instagram' },
  ]

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-neutral-dark text-white py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <svg
                width="180"
                height="40"
                viewBox="0 0 180 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8"
              >
                <text
                  x="0"
                  y="28"
                  fontFamily="Poppins, sans-serif"
                  fontSize="24"
                  fontWeight="700"
                  fill="white"
                >
                  Protocontents
                </text>
              </svg>
            </div>
            <p className="text-neutral-300 mb-4">
              We craft powerful brands for tech startups. From strategy to visuals, we bring
              your story to life.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <p className="text-neutral-300 mb-2">Bengaluru, India</p>
            <p className="text-neutral-300 mb-4">
              <a
                href="mailto:hello@protocontents.com"
                className="hover:text-white transition-colors"
              >
                hello@protocontents.com
              </a>
            </p>
          </div>
        </div>

        {/* Credits and Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Protocontents. All rights reserved.</p>
            <div className="text-center md:text-right">
              <p className="mb-1">
                Images from{' '}
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  Unsplash
                </a>
              </p>
              <p>
                Icons from{' '}
                <a
                  href="https://lucide.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  Lucide React
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

