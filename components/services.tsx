"use client"

import { motion } from "framer-motion"
import { Sparkles, Crown, Zap, Award } from "lucide-react"

const services = [
  {
    icon: Crown,
    title: "Kaftans",
    description: "Elegant and flowing, our kaftans blend traditional African aesthetics with modern sophistication.",
  },
  {
    icon: Award,
    title: "Agbada",
    description: "Majestic and commanding, perfect for celebrations and formal occasions with authentic craftsmanship.",
  },
  {
    icon: Sparkles,
    title: "Kauda Suits",
    description: "Contemporary tailored suits that combine comfort with style for the modern African gentleman.",
  },
  {
    icon: Zap,
    title: "Political Suits",
    description: "Bespoke formal wear designed for leaders, dignitaries, and those who command presence.",
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Specialized in crafting the finest bespoke African wear
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-6 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg hover:border-secondary/50 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 bg-secondary text-primary rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 inline-block">
            Customize Your Outfit
          </button>
        </motion.div>
      </div>
    </section>
  )
}
