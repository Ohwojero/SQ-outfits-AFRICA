"use client"

import { motion } from "framer-motion"
import { Heart, ShoppingBag, Eye } from "lucide-react"
import { useState } from "react"
import { useCart } from "./cart-context"

const products = [
  {
    id: 1,
    name: "Royal Kaftans Collection",
    price: "₦45,000",
    image: "/sq4.jpeg",
    category: "Kaftans",
    inStock: true,
  },
  {
    id: 2,
    name: "Traditional Agbada",
    price: "₦65,000",
    image: "/sq5.jpeg",
    category: "Agbada",
    inStock: true,
  },
  {
    id: 3,
    name: "Kauda Suit Premium",
    price: "₦55,000",
    image: "/sq6.jpeg",
    category: "Kauda Suits",
    inStock: true,
  },
  {
    id: 4,
    name: "Political Suit Executive",
    price: "₦75,000",
    image: "/sq7.jpeg",
    category: "Political Suits",
    inStock: false,
  },
  {
    id: 5,
    name: "Embroidered Kaftan Gold",
    price: "₦52,000",
    image: "/sq8.jpeg",
    category: "Kaftans",
    inStock: true,
  },
  {
    id: 6,
    name: "Agbada Royal Blue",
    price: "₦68,000",
    image: "/sq9.jpeg",
    category: "Agbada",
    inStock: true,
  },
  {
    id: 7,
    name: "Kauda Suit Burgundy",
    price: "₦58,000",
    image: "/sq10.jpeg",
    category: "Kauda Suits",
    inStock: true,
  },
  {
    id: 8,
    name: "Political Suit Navy",
    price: "₦78,000",
    image: "/sq11.jpeg",
    category: "Political Suits",
    inStock: true,
  },
  {
    id: 9,
    name: "Kaftan Silk Premium",
    price: "₦48,000",
    image: "/sq12.jpeg",
    category: "Kaftans",
    inStock: true,
  },
  {
    id: 10,
    name: "Agbada Ceremonial",
    price: "₦72,000",
    image: "/sq13.jpeg",
    category: "Agbada",
    inStock: true,
  },
  {
    id: 11,
    name: "Kauda Suit Charcoal",
    price: "₦56,000",
    image: "/sq14.jpeg",
    category: "Kauda Suits",
    inStock: false,
  },
  {
    id: 12,
    name: "Political Suit Maroon",
    price: "₦80,000",
    image: "/sq15.jpeg",
    category: "Political Suits",
    inStock: true,
  },
]

export default function Collections() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { addToCart } = useCart()

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

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Featured Collections</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated selection of bespoke pieces, each crafted with precision and passion
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-secondary text-primary rounded-full hover:bg-opacity-90 transition-all shadow-lg"
                    >
                      <Eye size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-secondary text-primary rounded-full hover:bg-opacity-90 transition-all shadow-lg"
                    >
                      <Heart size={20} />
                    </motion.button>
                  </motion.div>

                  {/* Stock Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold shadow-md ${
                        product.inStock ? "bg-green-500/90 text-white" : "bg-red-500/90 text-white"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Made on Request"}
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
                      onClick={() => handleAddToCart(product)}
                      className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary hover:text-primary transition-all shadow-md"
                    >
                      <ShoppingBag size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 inline-block shadow-lg hover:shadow-xl">
            View All Collections
          </button>
        </motion.div>
      </div>
    </section>
  )
}
