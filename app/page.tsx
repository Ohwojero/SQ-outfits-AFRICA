"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Collections from "@/components/collections"
import NewArrivals from "@/components/new-arrivals"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import NewsletterPopup from "@/components/newsletter-popup"
import DarkModeToggle from "@/components/dark-mode-toggle"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [showNewsletter, setShowNewsletter] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }

    const timer = setTimeout(() => setShowNewsletter(true), 5000)
    return () => clearTimeout(timer)
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
      <Hero />
      <Collections />
      <NewArrivals />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
      {showNewsletter && <NewsletterPopup onClose={() => setShowNewsletter(false)} />}
    </main>
  )
}
