"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Globe, Crown } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "500+",
    label: "Total Pieces",
    description: "Crafted with excellence",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    value: "25+",
    label: "Master Tailors",
    description: "Skilled artisans",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Globe,
    value: "45+",
    label: "Countries Served",
    description: "Global reach",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Crown,
    value: "10+",
    label: "Years of Heritage",
    description: "Legacy of excellence",
    color: "from-rose-500 to-rose-600",
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
            />

            <div className="relative p-8 z-10">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Value */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="font-serif text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.h3>

              {/* Label */}
              <h4 className="font-bold text-lg mb-1">{stat.label}</h4>

              {/* Description */}
              <p className="text-muted-foreground text-sm">{stat.description}</p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4`}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
