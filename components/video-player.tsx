"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { motion } from "framer-motion"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative w-full">
      {!isPlaying ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group cursor-pointer rounded-2xl overflow-hidden"
          onClick={() => setIsPlaying(true)}
        >
          <div className="relative w-full aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/luxury-african-fashion-brand-video-thumbnail.jpg"
              alt="SQ-Outfits AFRICA Brand Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
          </div>

          {/* Play Button */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-2xl"
            >
              <Play size={48} className="text-primary fill-primary ml-2" />
            </motion.div>
          </motion.div>

          {/* Video Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">The Art of Bespoke Tailoring</h3>
            <p className="text-gray-200 text-lg">Discover our craftsmanship, heritage, and commitment to excellence</p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="SQ-Outfits AFRICA Brand Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 p-2 bg-secondary text-primary rounded-full hover:bg-opacity-90 transition-all z-10"
          >
            <X size={24} />
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
