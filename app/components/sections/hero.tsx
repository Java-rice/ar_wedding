'use client'

import { PhotoGallery } from '../ui/photo-gallery'

export function Hero() {
  const galleryImages = [
    { src: '/Images/main1.jpg', alt: 'Arvie & Regina - Wedding Moment' },
    { src: '/Images/main2.jpg', alt: 'Dancing Together' },
    { src: '/Images/main3.jpg', alt: 'Bride' },
    { src: '/Images/main4.jpg', alt: 'Groom' },
    { src: '/Images/main5.jpg', alt: 'Wedding Details' },
  ]

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#120e0d]">
      <div className="absolute inset-0 h-full w-full">
        <PhotoGallery images={galleryImages} autoplay interval={6000} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),transparent_50%),linear-gradient(120deg,rgba(18,14,13,0.82),rgba(18,14,13,0.58),rgba(18,14,13,0.9))]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-3xl rounded-[34px] border border-white/5 bg-[#201a19]/15 p-6 shadow-[0_30px_90px_rgba(18,14,13,0.18)] backdrop-blur-[2px] sm:p-8 md:p-12">
          <div className="mb-2 flex items-center justify-center gap-3 text-[16px] font-semibold uppercase tracking-[0.42em] text-[#f7e0c9]">
            <span className="h-px w-10 bg-[#f7e0c9]/70" />
            with love
            <span className="h-px w-10 bg-[#f7e0c9]/70" />
          </div>

          <div className="space-y-4 text-center">

            <div className="flex justify-center">
              <img
                src="/Images/logo.png"
                alt="Couple's Logo"
                className="h-auto w-full max-w-[300px] object-contain sm:max-w-[360px] md:max-w-[430px] lg:max-w-[500px]"
              />
            </div>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Join us as we celebrate a new chapter filled with joy, laughter, and a lifetime of love.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              Tuesday • 3:00 PM
            </div>
            <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              RSVP by October 15, 2026
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-full space-y-2 px-2 text-center sm:px-0">
            <p className="break-words text-xs font-medium leading-relaxed tracking-[0.12em] text-[#f7d4ae] sm:text-sm sm:tracking-[0.3em]">
              #LifetimeARVIEntureswithREGINA
            </p>
            <p className="break-words text-xs font-medium leading-relaxed tracking-[0.12em] text-[#f7d4ae] sm:text-sm sm:tracking-[0.3em]">
              #ARVIEryspecialmomentswithREGINA
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#rsvp"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f2d0a8] to-[#d89c76] px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#241a18] shadow-[0_20px_40px_rgba(214,153,112,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(214,153,112,0.42)]"
            >
              RSVP Now
            </a>

            <a
              href="/story"
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
