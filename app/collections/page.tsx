"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Collections from "@/components/collections"
import StatsCards from "@/components/stats-cards"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { motion } from "framer-motion"
import { Filter, Grid3x3, List } from "lucide-react"

export default function CollectionsPage() {
  const [isDark, setIsDark] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

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

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 via-background to-background"
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-bold text-sm tracking-widest mb-4 block">CURATED EXCELLENCE</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Masterpieces of <span className="text-secondary">African Craftsmanship</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Each piece in our collection represents years of dedication, cultural heritage, and uncompromising
              attention to detail. From the finest fabrics to the most intricate embroidery, discover garments that tell
              stories of African excellence.
            </p>
          </motion.div>

          {/* Filter & View Controls */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12 pb-8 border-b border-border"
          >
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-secondary" />
              <span className="text-muted-foreground">Filter & Sort</span>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid" ? "bg-secondary text-primary" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Grid3x3 size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list" ? "bg-secondary text-primary" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <List size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Collection Stats */}
          <StatsCards />
        </div>
      </motion.section>

      <Collections />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
