"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import DarkModeToggle from "@/components/dark-mode-toggle"
import VideoPlayer from "@/components/video-player"
import { motion } from "framer-motion"
import { Award, Users, Zap, Heart, Crown } from "lucide-react"

export default function AboutPage() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation isDark={isDark} />
      <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />

      {/* About Header with Video */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-bold text-sm tracking-widest mb-4 block">OUR HERITAGE</span>
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">The Art of Bespoke Tailoring</h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Discover the passion, heritage, and meticulous craftsmanship behind every SQ-Outfits AFRICA creation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 w-full"
          >
            <VideoPlayer />
          </motion.div>
        </div>
      </motion.section>

      {/* About Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 md:h-[550px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/master-tailor-crafting-luxury-african-garment.jpg"
                  alt="Master Tailor at Work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/20 rounded-xl blur-2xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <span className="text-secondary font-bold text-sm tracking-widest">ABOUT SQ-OUTFITS AFRICA</span>
                <h2 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6">
                  Crafted with <span className="text-secondary">Precision</span> in Accra
                </h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                SQ-Outfits AFRICA is a luxury bespoke tailoring brand dedicated to creating timeless pieces that
                celebrate African heritage and contemporary elegance. Each garment is meticulously handcrafted by master
                tailors in Accra, Ghana, using only the finest premium fabrics sourced from around the world.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We specialize in traditional African wear including Kaftans, Agbada, Kauda Suits, and Political Suits.
                Our commitment to quality, attention to detail, and use of premium materials ensures that every piece is
                a work of art that transcends fashion and becomes a cultural statement.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-8 -right-8 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-3 shadow-lg"
                    >
                      <Users className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-serif text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">500+</h3>
                    <p className="text-muted-foreground font-medium">Satisfied Clients Worldwide</p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-3"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-8 -right-8 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-3 shadow-lg"
                    >
                      <Crown className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-serif text-4xl font-bold text-amber-600 dark:text-amber-400 mb-1">10+</h3>
                    <p className="text-muted-foreground font-medium">Years of Excellence</p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-3"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Explore Our Craft
              </motion.button>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="font-serif text-4xl font-bold text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  desc: "Uncompromising quality in every stitch",
                  color: "from-rose-500 to-pink-500",
                  bgColor: "from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-900/20",
                },
                {
                  icon: Heart,
                  title: "Heritage",
                  desc: "Celebrating African cultural traditions",
                  color: "from-emerald-500 to-teal-500",
                  bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-900/20",
                },
                {
                  icon: Users,
                  title: "Community",
                  desc: "Supporting local artisans and tailors",
                  color: "from-violet-500 to-purple-500",
                  bgColor: "from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-900/20",
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  desc: "Blending tradition with modern design",
                  color: "from-orange-500 to-amber-500",
                  bgColor: "from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-900/20",
                },
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -12, scale: 1.03 }}
                    className={`group relative overflow-hidden p-8 bg-gradient-to-br ${value.bgColor} rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Floating animated circles */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${value.color} opacity-10 rounded-full blur-3xl`}
                    />

                    {/* Icon container with gradient */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 15 }}
                      className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="font-serif text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">{value.desc}</p>

                      {/* Animated bottom accent line */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                        className={`h-1 bg-gradient-to-r ${value.color} rounded-full`}
                      />
                    </div>

                    {/* Corner accent */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className={`absolute -bottom-8 -left-8 w-24 h-24 border-2 border-gradient-to-br ${value.color} opacity-10 rounded-full`}
                    />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
