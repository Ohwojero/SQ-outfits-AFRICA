"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

interface DarkModeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export default function DarkModeToggle({ isDark, onToggle }: DarkModeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-24 right-4 z-40 p-3 bg-secondary text-primary rounded-full shadow-lg hover:shadow-xl transition-all"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )
}
