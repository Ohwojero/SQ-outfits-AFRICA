"use client"

import { motion } from "framer-motion"
import { CheckCircle, Home, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <Card>
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4"
            >
              <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
            </motion.div>
            <CardTitle className="text-2xl font-serif">Order Confirmed!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground">
              Thank you for your order. We've received your payment and will start processing your custom outfit right away.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 justify-center">
                <span className="text-2xl">🚚</span>
                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300">Estimated Delivery</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Your order will arrive in 15 days</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to your email address with order details.
              </p>
              <p className="text-sm text-muted-foreground">
                Our team will contact you within 24 hours to discuss measurements and customization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <Link href="/" className="flex items-center gap-2">
                  <Home size={16} />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href="/collections" className="flex items-center gap-2">
                  <ShoppingBag size={16} />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
