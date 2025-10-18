"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Kwame Asante",
    role: "Business Executive",
    image: "/professional-portrait-man.jpg",
    text: "SQ-Outfits transformed my wardrobe. The attention to detail and quality is unmatched. I feel confident in every piece.",
    rating: 5,
  },
  {
    name: "Ama Osei",
    role: "Fashion Influencer",
    image: "/professional-portrait-woman.jpg",
    text: "The craftsmanship is exceptional. Every stitch tells a story of dedication and excellence. Highly recommended!",
    rating: 5,
  },
  {
    name: "Kofi Mensah",
    role: "Government Official",
    image: "/professional-portrait-dignitary.jpg",
    text: "Perfect for official events. The political suits are tailored to perfection. A true reflection of prestige.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">Trusted by hundreds of satisfied customers</p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative bg-card rounded-xl border border-border shadow-lg p-8 md:p-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {index === current && (
                <>
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={20} className="fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-serif text-2xl md:text-3xl font-bold mb-8 leading-relaxed">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-secondary"
                    />
                    <h3 className="font-serif text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "bg-secondary w-8" : "bg-border w-2"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
