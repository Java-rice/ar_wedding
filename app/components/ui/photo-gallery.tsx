'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PhotoGalleryProps {
  images: { src: string; alt: string }[]
  autoplay?: boolean
  interval?: number
}

export function PhotoGallery({ images, autoplay = true, interval = 5000 }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, interval, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative z-0 h-full w-full overflow-hidden rounded-lg shadow-2xl pointer-events-auto">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === currentIndex}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 cursor-pointer bg-black/30 p-2 text-white rounded-full transition-all hover:bg-black/50"
        aria-label="Previous photo"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 cursor-pointer bg-black/30 p-2 text-white rounded-full transition-all hover:bg-black/50"
        aria-label="Next photo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
              index === currentIndex
                ? 'w-6 bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute right-4 top-4 z-30 rounded-full bg-black/40 px-3 py-1 text-sm text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
