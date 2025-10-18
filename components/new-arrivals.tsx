"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"

const newArrivals = [
  {
    id: 1,
    name: "Midnight Elegance Kaftan",
    price: "₦52,000",
    image: "/luxury-midnight-blue-kaftan-with-gold-embroidery.jpg",
    category: "Kaftans",
    isNew: true,
    discount: "15%",
  },
  {
    id: 2,
    name: "Royal Heritage Agbada",
    price: "₦78,000",
    image: "/traditional-agbada-with-intricate-patterns.jpg",
    category: "Agbada",
    isNew: true,
    discount: "10%",
  },
  {
    id: 3,
    name: "Modern Fusion Kauda",
    price: "₦62,000",
    image: "/contemporary-kauda-suit-tailored-fit.jpg",
    category: "Kauda Suits",
    isNew: true,
    discount: "12%",
  },
  {
    id: 4,
    name: "Executive Power Suit",
    price: "₦85,000",
    image: "/formal-political-suit-for-leaders.jpg",
    category: "Political Suits",
    isNew: true,
    discount: "8%",
  },
]

export default function NewArrivals() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-secondary" size={24} />
            <span className="text-secondary font-bold text-sm tracking-widest">LATEST DROPS</span>
            <Sparkles className="text-secondary" size={24} />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">New Arrivals</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our freshly curated collection of bespoke pieces, featuring the latest designs and exclusive
            limited editions
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {newArrivals.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden bg-muted">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredId === product.id ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-6"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-secondary text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full shadow-md">
                      NEW
                    </span>
                    <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-bold rounded-full shadow-md">
                      -{product.discount}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 bg-card">
                  <p className="text-secondary text-xs font-semibold mb-2 tracking-widest">{product.category}</p>
                  <h3 className="font-serif text-lg font-bold mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-secondary">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary hover:text-primary transition-all shadow-md"
                    >
                      +
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-secondary hover:text-primary transition-all hover:scale-105 inline-block shadow-lg hover:shadow-xl">
            Explore All New Arrivals
          </button>
        </motion.div>
      </div>
    </section>
  )
}
