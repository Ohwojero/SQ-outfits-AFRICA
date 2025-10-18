"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { motion } from "framer-motion"
import { Crown, Award, Sparkles, Zap, Scissors, Palette, Truck, Shield } from "lucide-react"

const services = [
  {
    icon: Crown,
    title: "Kaftans",
    description: "Elegant and flowing, our kaftans blend traditional African aesthetics with modern sophistication.",
    features: ["Custom embroidery", "Premium fabrics", "Perfect fit"],
    price: "From ₦45,000",
  },
  {
    icon: Award,
    title: "Agbada",
    description: "Majestic and commanding, perfect for celebrations and formal occasions with authentic craftsmanship.",
    features: ["Hand-stitched", "Intricate patterns", "Timeless elegance"],
    price: "From ₦65,000",
  },
  {
    icon: Sparkles,
    title: "Kauda Suits",
    description: "Contemporary tailored suits that combine comfort with style for the modern African gentleman.",
    features: ["Tailored fit", "Premium materials", "Modern design"],
    price: "From ₦55,000",
  },
  {
    icon: Zap,
    title: "Political Suits",
    description: "Bespoke formal wear designed for leaders, dignitaries, and those who command presence.",
    features: ["Executive quality", "Custom tailoring", "Distinguished look"],
    price: "From ₦75,000",
  },
]

const additionalServices = [
  {
    icon: Scissors,
    title: "Custom Alterations",
    description: "Perfect fit guaranteed with our expert alteration services",
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Work with our designers to create your perfect piece",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description: "Fast and secure delivery to over 45 countries",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all our pieces",
  },
]

export default function ServicesPage() {
  const [isDark, setIsDark] = useState(false)
  const [expandedService, setExpandedService] = useState<number | null>(null)

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
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-secondary font-bold text-sm tracking-widest mb-4 block">BESPOKE EXCELLENCE</span>
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
              Premium Tailoring <span className="text-secondary">Services</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              From concept to creation, we offer comprehensive bespoke tailoring services that transform your vision
              into wearable art. Each service is backed by decades of expertise and a commitment to perfection.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="p-6 bg-card border border-border rounded-xl hover:border-secondary/50 cursor-pointer transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-14 h-14 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-primary transition-all"
                  >
                    <Icon size={28} />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                  {/* Expandable Features */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: expandedService === index ? 1 : 0,
                      height: expandedService === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border">
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="font-bold text-secondary">{service.price}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="font-serif text-4xl font-bold text-center mb-12">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => {
                const Icon = service.icon
                const colors = [
                  {
                    gradient: "from-blue-500 to-cyan-500",
                    bg: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-900/20",
                    border: "border-blue-200 dark:border-blue-800/50",
                  },
                  {
                    gradient: "from-purple-500 to-pink-500",
                    bg: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-900/20",
                    border: "border-purple-200 dark:border-purple-800/50",
                  },
                  {
                    gradient: "from-green-500 to-emerald-500",
                    bg: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-900/20",
                    border: "border-green-200 dark:border-green-800/50",
                  },
                  {
                    gradient: "from-orange-500 to-red-500",
                    bg: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-900/20",
                    border: "border-orange-200 dark:border-orange-800/50",
                  },
                ]
                const color = colors[index]

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -15, scale: 1.05 }}
                    className={`group relative overflow-hidden p-8 bg-gradient-to-br ${color.bg} rounded-2xl border ${color.border} shadow-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Animated gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Animated background elements */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${color.gradient} opacity-5 rounded-full blur-3xl`}
                    />

                    {/* Icon with animated background */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${color.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="font-serif text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                      {/* Animated underline */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className={`h-0.5 bg-gradient-to-r ${color.gradient} rounded-full origin-left`}
                      />
                    </div>

                    {/* Floating accent dots */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      className={`absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-br ${color.gradient} rounded-full opacity-40`}
                    />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-12 text-center"
          >
            <h2 className="font-serif text-4xl font-bold mb-6">Our Bespoke Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {["Consultation", "Design", "Crafting", "Delivery"].map((step, index) => (
                <div key={index} className="relative">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="font-bold">{step}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-secondary/30" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
