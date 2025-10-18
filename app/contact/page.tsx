"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isDark, setIsDark] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
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
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-secondary font-bold text-sm tracking-widest mb-4 block">GET IN TOUCH</span>
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
              Let's Create <span className="text-secondary">Together</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Have questions about our bespoke services? Our team is ready to help you create the perfect piece.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Email */}
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-secondary/50 transition-all"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@sqoutfits.com</p>
                    <p className="text-muted-foreground text-sm">Response within 24 hours</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-secondary/50 transition-all"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+233 (0) 123 456 789</p>
                    <p className="text-muted-foreground text-sm">Mon - Fri, 9AM - 6PM GMT</p>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-secondary/50 transition-all"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Accra, Ghana</p>
                    <p className="text-muted-foreground text-sm">West Africa</p>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-secondary/50 transition-all"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-xl p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+233 (0) 123 456 789"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="custom-order">Custom Order</option>
                          <option value="inquiry">General Inquiry</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your vision..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                        required
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-6 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Send Message
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.6 }}>
                      <CheckCircle size={64} className="text-secondary mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/30 rounded-xl p-12"
          >
            <h2 className="font-serif text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: "What is the typical turnaround time?",
                  a: "Most custom orders take 4-8 weeks depending on complexity and current workload.",
                },
                {
                  q: "Do you offer international shipping?",
                  a: "Yes! We ship to over 45 countries worldwide with secure and insured delivery.",
                },
                {
                  q: "Can I customize my order?",
                  a: "All our pieces are bespoke and fully customizable to your specifications.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, bank transfers, and secure payment platforms.",
                },
              ].map((faq, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} className="p-6 bg-card border border-border rounded-lg">
                  <h4 className="font-bold mb-3 text-secondary">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
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
