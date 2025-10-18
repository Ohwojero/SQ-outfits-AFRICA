"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Trash2, Plus, Minus } from "lucide-react"
import { useCart } from "./cart-context"
import { useState } from "react"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const total = items.reduce((sum, item) => {
    const price = Number.parseFloat(item.price.replace(/[^0-9]/g, ""))
    return sum + price * item.quantity
  }, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-border">
              <h2 className="font-serif text-2xl font-bold">Shopping Cart</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-6xl mb-4">🛍️</div>
                  <p className="text-muted-foreground">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mt-2">Add items to get started</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-4 p-4 bg-muted/50 rounded-xl border border-border hover:border-secondary/50 transition-colors"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm line-clamp-2">{item.name}</h3>
                      <p className="text-secondary font-bold text-sm mt-1">{item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-background rounded transition-colors"
                        >
                          <Minus size={14} />
                        </motion.button>
                        <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-background rounded transition-colors"
                        >
                          <Plus size={14} />
                        </motion.button>
                      </div>
                    </div>

                    {/* Remove */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </motion.button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                {/* Delivery Message */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚚</span>
                    <div>
                      <p className="font-semibold text-blue-700 dark:text-blue-300">Estimated Delivery</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Your order will arrive in 15 days</p>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-bold text-lg">₦{total.toLocaleString()}</span>
                </div>

                {/* Buttons */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/checkout'}
                  className="w-full py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Proceed to Checkout
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="w-full py-3 bg-muted text-foreground font-bold rounded-lg hover:bg-muted/80 transition-all"
                >
                  Clear Cart
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
