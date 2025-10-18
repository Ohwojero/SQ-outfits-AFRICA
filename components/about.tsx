"use client"

import { motion } from "framer-motion"
import { Users, Crown } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/tailoring-process-african-craftsman.jpg"
                alt="Tailoring Process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-lg" />
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6">
              <span className="text-secondary font-bold text-sm tracking-widest">ABOUT US</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">Crafted with Precision in Accra</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              SQ-Outfits AFRICA is a luxury bespoke tailoring brand dedicated to creating timeless pieces that celebrate
              African heritage and contemporary elegance. Each garment is meticulously handcrafted by master tailors in
              Accra, Ghana.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We specialize in traditional African wear including Kaftans, Agbada, Kauda Suits, and Political Suits. Our
              commitment to quality, attention to detail, and use of premium fabrics ensures that every piece is a work
              of art.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800/50 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-2 shadow-md"
                  >
                    <Users className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="font-serif text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">500+</h3>
                  <p className="text-muted-foreground text-sm font-medium">Satisfied Clients</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/50 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-amber-400/20 rounded-full blur-xl"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-2 shadow-md"
                  >
                    <Crown className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="font-serif text-3xl font-bold text-amber-600 dark:text-amber-400 mb-1">10+</h3>
                  <p className="text-muted-foreground text-sm font-medium">Years of Excellence</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2"
                  />
                </div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Learn Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
