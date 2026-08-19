'use client'

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
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#120e0d]">
      <div className="absolute inset-0 h-full w-full">
        <PhotoGallery images={galleryImages} autoplay interval={6000} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),transparent_28%),linear-gradient(120deg,rgba(18,14,13,0.82),rgba(18,14,13,0.58),rgba(18,14,13,0.9))]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-3xl rounded-[34px] border border-white/15 bg-[#201a19]/55 p-6 shadow-[0_30px_90px_rgba(18,14,13,0.45)] backdrop-blur-md sm:p-8 md:p-12">
          <div className="mb-8 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-[#f7e0c9]">
            <span className="h-px w-10 bg-[#f7e0c9]/70" />
            with love
            <span className="h-px w-10 bg-[#f7e0c9]/70" />
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.52em] text-[#f2caa5]">
              December 1, 2026
            </p>

            <h1 className="font-serif text-5xl font-light text-white sm:text-6xl md:text-[5.5rem]">
              Arvie
              <span className="my-2 block text-[#f7d4ae]">&</span>
              Regina
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Join us as we celebrate a new chapter filled with joy, laughter, and a lifetime of love.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              Sunday • 4:00 PM
            </div>
            <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              Garden Venue
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#rsvp"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f2d0a8] to-[#d89c76] px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#241a18] shadow-[0_20px_40px_rgba(214,153,112,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(214,153,112,0.42)]"
            >
              RSVP Now
            </a>

            <a
              href="#details"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
