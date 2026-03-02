"use client"

import { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

interface HeroSliderProps {
  images: { src: string; alt: string }[]
  /** Optional overlay opacity 0-100 (default: 60) */
  overlayOpacity?: number
  children: React.ReactNode
}

export function HeroSlider({ images, overlayOpacity = 60, children }: HeroSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()

    // Auto-play
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => {
      clearInterval(interval)
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative overflow-hidden text-white">
      {/* Slider background */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
                quality={80}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(135deg, rgba(12,35,64,${overlayOpacity / 100}) 0%, rgba(2,6,23,${(overlayOpacity + 15) / 100}) 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {children}
      </div>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-[#f97316] w-6"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
