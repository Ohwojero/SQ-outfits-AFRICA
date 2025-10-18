"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    title: "Bespoke Elegance",
    subtitle: "Handcrafted luxury tailoring from Accra, Ghana",
    image: "/sq1.jpeg",
    cta: "Shop Kaftans",
  },
  {
    title: "Timeless Agbada",
    subtitle: "Traditional meets contemporary in every stitch",
    image: "/sq2.jpeg",
    cta: "Explore Agbada",
  },
  {
    title: "Political Prestige",
    subtitle: "Tailored for leaders and visionaries",
    image: "/sq3.jpeg",
    cta: "View Political Suits",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setAutoPlay(false)
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-20">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-[900px]" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === current ? 1 : 0, y: index === current ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-bold mb-4 text-balance"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === current ? 1 : 0, y: index === current ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl mb-8 max-w-2xl text-balance"
            >
              {slide.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === current ? 1 : 0, y: index === current ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <button className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105">
                {slide.cta}
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                View Collections
              </button>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all backdrop-blur-sm"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`h-2 rounded-full transition-all ${index === current ? "bg-secondary w-8" : "bg-white/50 w-2"}`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  )
}
