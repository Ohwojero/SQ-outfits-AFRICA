"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingBag, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useCart } from "./cart-context"
import CartSidebar from "./cart-sidebar"

interface NavigationProps {
  isDark?: boolean
}

export default function Navigation({ isDark }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const pathname = usePathname()
  const { cartCount } = useCart()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  {/* <span className="font-serif font-bold text-primary text-lg">SQ</span> */}
                  <img src="/sq26.jpeg" alt="" className="font-serif font-bold text-primary text-lg rounded-full"  />
                </div>
                <span className="font-serif font-bold text-xl hidden sm:inline">Outfits</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href) ? "text-secondary" : "text-foreground hover:text-secondary"
                  }`}
                >
                  <motion.span whileHover={{ scale: 1.05 }}>{item.label}</motion.span>
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <Heart size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-muted rounded-lg transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 w-4 h-4 bg-secondary text-primary text-xs rounded-full flex items-center justify-center font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pb-4 border-t border-border"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.href) ? "bg-secondary/20 text-secondary" : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
