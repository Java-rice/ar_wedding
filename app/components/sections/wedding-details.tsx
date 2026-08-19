'use client'

import Image from 'next/image'

export function WeddingDetails() {
  return (
    <section id="details" className="bg-[#f8f3ef] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b06a4c]">
            Our story
          </p>
          <h2 className="font-serif text-4xl font-light text-[#2e221f] md:text-5xl">
            Our Journey Together
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(46,34,31,0.14)] ring-1 ring-black/5">
              <Image src="/wedding-rings.png" alt="Wedding Rings" fill className="object-cover" />
            </div>
            <div className="relative h-80 overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(46,34,31,0.14)] ring-1 ring-black/5">
              <Image src="/wedding-venue.png" alt="Wedding Venue" fill className="object-cover" />
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e9dacc] bg-[#fffdfb] p-7 shadow-[0_28px_70px_rgba(46,34,31,0.08)] md:p-9">
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-[#7d625d]">
              The celebration
            </p>
            <p className="text-lg leading-relaxed text-[#564842]">
              We are filled with joy as we invite you to share in the celebration of our love story. This intimate gathering brings together our dearest family and friends to witness the beginning of our forever.
            </p>

            <div className="mt-8 space-y-4 border-t border-[#f0e3db] pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7d625d]">Date</p>
                <p className="mt-2 text-xl text-[#2e221f]">Sunday, December 1, 2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7d625d]">Time</p>
                <p className="mt-2 text-xl text-[#2e221f]">4:00 PM</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7d625d]">Venue</p>
                <p className="mt-2 text-xl text-[#2e221f]">[Venue Location]</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[24px] border border-[#ebddd3] bg-[#fffaf7] p-6 text-center shadow-[0_14px_28px_rgba(46,34,31,0.04)]">
            <h3 className="font-serif text-2xl text-[#2e221f]">The Bride</h3>
            <p className="mt-3 text-lg text-[#564842]">Regina Domingo</p>
          </div>
          <div className="rounded-[24px] border border-[#ebddd3] bg-[#fffaf7] p-6 text-center shadow-[0_14px_28px_rgba(46,34,31,0.04)]">
            <h3 className="font-serif text-2xl text-[#2e221f]">The Groom</h3>
            <p className="mt-3 text-lg text-[#564842]">Arvie Pandac</p>
          </div>
          <div className="rounded-[24px] border border-[#ebddd3] bg-[#fffaf7] p-6 text-center shadow-[0_14px_28px_rgba(46,34,31,0.04)]">
            <h3 className="font-serif text-2xl text-[#2e221f]">The Moment</h3>
            <p className="mt-3 text-lg text-[#564842]">A lifetime begins</p>
          </div>
        </div>
      </div>
    </section>
  )
}
