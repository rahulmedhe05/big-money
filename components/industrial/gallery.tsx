"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface GalleryProps {
  images: GalleryImage[]
  title?: string
  subtitle?: string
}

export function Gallery({ images, title, subtitle }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ""
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <div className="mb-10">
              {title && (
                <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-3">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-gray-600 max-w-3xl">{subtitle}</p>
              )}
            </div>
          )}

          {/* Gallery Grid — masonry-like layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className={`group relative rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f97316] ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    quality={75}
                  />
                </div>
                <div className="absolute inset-0 bg-[#0c2340]/0 group-hover:bg-[#0c2340]/40 transition-colors duration-300 flex items-end">
                  <div className="p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.caption && (
                      <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded">
                        {img.caption}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-4 text-white/70 hover:text-white z-10 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-4 text-white/70 hover:text-white z-10 p-2"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
                priority
              />
            </div>
            {images[activeIndex].caption && (
              <div className="text-center mt-3">
                <p className="text-white/80 text-sm">{images[activeIndex].caption}</p>
              </div>
            )}
            <div className="text-center mt-2">
              <span className="text-white/50 text-xs">
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
