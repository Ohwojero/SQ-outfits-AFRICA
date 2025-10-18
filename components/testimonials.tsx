"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Kwame Asante",
    role: "Business Executive",
    image: "/sq20.jpeg",
    text: "SQ-Outfits transformed my wardrobe. The attention to detail and quality is unmatched. I feel confident in every piece.",
    rating: 5,
  },
  {
    name: "Ama Osei",
    role: "Fashion Influencer",
    image: "/sq21.jpeg",
    text: "The craftsmanship is exceptional. Every stitch tells a story of dedication and excellence. Highly recommended!",
    rating: 5,
  },
  {
    name: "Kofi Mensah",
    role: "Government Official",
    image: "/sq22.jpeg",
    text: "Perfect for official events. The political suits are tailored to perfection. A true reflection of prestige.",
    rating: 5,
  },
  {
    name: "Nana Adwoa",
    role: "Entrepreneur",
    image: "/sq23.jpeg",
    text: "The luxury kaftans are breathtaking. Perfect blend of tradition and modernity. My go-to for special occasions.",
    rating: 5,
  },
  {
    name: "Yaw Boateng",
    role: "Artist",
    image: "/sq24.jpeg",
    text: "As an artist, I appreciate the creativity in their designs. Each piece is a work of art. Absolutely love it!",
    rating: 5,
  },
  {
    name: "Akua Mensah",
    role: "Journalist",
    image: "/sq25.jpeg",
    text: "Professional and reliable service. The suits for dignitaries are impeccable. Highly professional team.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [showCards, setShowCards] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Delay showing cards for 2 seconds
    const showTimer = setTimeout(() => {
      setShowCards(true)
    }, 2000)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!isHovered && showCards) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 2) % testimonials.length)
      }, 6000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, showCards])

  const next = () => {
    setCurrent((prev) => (prev + 2) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 2 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 2; i++) {
      visible.push(testimonials[(current + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">Trusted by hundreds of satisfied customers</p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/50 shadow-2xl">
            <div className="relative h-[32rem] md:h-[36rem] lg:h-[40rem] flex items-center justify-center">
              {showCards && getVisibleTestimonials().map((testimonial, position) => (
                <motion.div
                  key={`${testimonial.name}-${current}-${position}`}
                  initial={{ opacity: 0, x: position === 0 ? -300 : 300, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    x: position === 0 ? -100 : 100,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, x: position === 0 ? -300 : 300, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex-shrink-0 w-80 md:w-96 mx-2"
                >
                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 md:p-8 h-full flex flex-col justify-center"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Stars */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
                      className="flex justify-center gap-1 mb-6"
                    >
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                        >
                          <Star size={20} className="fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Quote */}
                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="font-serif text-lg md:text-xl font-semibold mb-6 leading-relaxed text-foreground flex-grow"
                    >
                      "{testimonial.text}"
                    </motion.p>

                    {/* Author */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="flex items-center gap-4"
                    >
                      <motion.img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-3 border-primary/40 shadow-lg"
                        whileHover={{
                          scale: 1.1,
                          borderColor: "hsl(var(--primary))",
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <div>
                        <h3 className="font-serif text-lg font-bold text-foreground">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-sm font-medium">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {showCards && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="flex justify-center gap-6 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="p-4 bg-card/80 backdrop-blur-sm text-foreground rounded-full border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="p-4 bg-card/80 backdrop-blur-sm text-foreground rounded-full border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight size={24} />
              </motion.button>
            </motion.div>
          )}

          {/* Indicators */}
          {showCards && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
              className="flex justify-center gap-3 mt-8"
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index * 2)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    Math.floor(current / 2) === index
                      ? "bg-gradient-to-r from-primary to-secondary w-12 shadow-lg"
                      : "bg-border/50 w-3 hover:bg-border"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
