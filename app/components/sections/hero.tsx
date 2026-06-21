'use client'

import Image from 'next/image'
import { PhotoGallery } from '../ui/photo-gallery'

export function Hero() {
  const galleryImages = [
    { src: '/couple-1.png', alt: 'Arvie & Regina - Wedding Moment' },
    { src: '/couple-2.png', alt: 'Dancing Together' },
    { src: '/bride.png', alt: 'Bride' },
    { src: '/groom.png', alt: 'Groom' },
    { src: '/wedding-details.png', alt: 'Wedding Details' },
  ]

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <PhotoGallery images={galleryImages} autoplay interval={6000} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/80" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <div className="max-w-3xl space-y-8 text-center">
          {/* Decorative element */}
          <div className="flex justify-center gap-3 opacity-60">
            <div className="h-px w-8 bg-accent" />
            <div className="text-accent text-sm tracking-widest">WEDDING</div>
            <div className="h-px w-8 bg-accent" />
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
              Arvie
              <span className="block text-accent">& Regina</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl font-light text-foreground/80">
              Celebrating a lifetime of love
            </p>
          </div>

          {/* Date highlight */}
          <div className="space-y-4 border-y border-foreground/20 py-8">
            <p className="text-sm tracking-widest text-muted-foreground">SUNDAY</p>
            <p className="font-serif text-3xl md:text-4xl font-light text-foreground">
              December 1, 2026
            </p>
            <p className="text-foreground/70">at 4:00 in the afternoon</p>
          </div>

          {/* Bible Verse */}
          <div className="space-y-3 italic text-foreground/80">
            <p className="text-sm tracking-wide">"Love never fails."</p>
            <p className="text-xs tracking-widest text-muted-foreground">1 CORINTHIANS 13:8</p>
          </div>

          {/* CTA */}
          <a
            href="#rsvp"
            className="inline-block mt-8 px-8 py-3 bg-accent text-white font-medium tracking-wide hover:bg-opacity-90 transition-all duration-300"
          >
            Join Our Celebration
          </a>
        </div>
      </div>
    </section>
  )
}
