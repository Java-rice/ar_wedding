'use client'

import Image from 'next/image'

export function WeddingDetails() {
  return (
    <section id="details" className="relative overflow-hidden bg-[#f3e6dc] px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80"
          alt="Couple background"
          className="h-full w-full object-cover grayscale-[0.1]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(243,230,220,0.9),rgba(243,230,220,0.72),rgba(243,230,220,0.88))]" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b85c3b]">
            Our story
          </p>
          <h2 className="font-serif text-4xl font-light text-[#2d201c] md:text-5xl">
            A love story written with time, laughter, and quiet joy
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative h-[420px] overflow-hidden rounded-[30px] bg-[#f2e6dc] shadow-[0_22px_60px_rgba(45,32,28,0.12)] md:h-[500px]">
              <Image
                src="/Images/hero1.jpg"
                alt="The couple together"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative h-52 overflow-hidden rounded-[30px] bg-[#f2e6dc] shadow-[0_22px_60px_rgba(45,32,28,0.12)] md:h-64">
                <Image
                  src="/Images/hero2.jpg"
                  alt="The couple smiling"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-[30px] bg-[#fffaf5] p-6 shadow-[0_18px_40px_rgba(45,32,28,0.06)]">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#7a655d]">
                  Since then
                </p>
                <p className="mt-4 text-lg leading-relaxed text-[#554843]">
                  Every chapter has felt like home — full of patience, laughter, and the kind of love that keeps growing.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#fffaf5] p-7 shadow-[0_20px_50px_rgba(45,32,28,0.08)] md:p-9">
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-[#7a655d]">
              The celebration
            </p>
            <p className="text-lg leading-relaxed text-[#554843]">
              What began as a quiet connection flourished into a love that is steady, joyful, and deeply rooted in faith, friendship, and family. We are so grateful to walk this next chapter together and to celebrate it surrounded by the people who have shaped our story.
            </p>

            <blockquote className="mt-8 border-l-2 border-[#c97a5f] pl-5 text-xl italic leading-relaxed text-[#2d201c]">
              “And in time, we found our forever — not in a single moment, but in all the small ones.”
            </blockquote>

            <div className="mt-8 space-y-4 border-t border-[#ecdfd4] pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7a655d]">Date</p>
                <p className="mt-2 text-xl text-[#2d201c]">Tuesday, December 1, 2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7a655d]">Ceremony Time</p>
                <p className="mt-2 text-xl text-[#2d201c]">3:00 PM</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7a655d]">Church</p>
                <p className="mt-2 text-xl text-[#2d201c]">Iglesia Ni Cristo, Ciudad de Victoria</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7a655d]">Reception</p>
                <p className="mt-2 text-xl text-[#2d201c]">The Pace</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'The Bride',
                name: 'Regina Domingo',
                image: '/Images/bride.jpg',
              },
              {
                title: 'The Groom',
                name: 'Arvie Pandac',
                image: '/Images/groom.jpg',
              },
              {
                title: 'The Moment',
                name: 'A lifetime begins',
                image: '/Images/lifetime.jpg',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] bg-[#fffaf5] shadow-[0_18px_40px_rgba(45,32,28,0.08)]"
              >
                <div className="relative h-90 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d201c]/80 via-[#2d201c]/25 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f0d7b9]">
                    {item.title}
                  </p>
                  <h3 className="font-serif text-3xl font-light text-white">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-[#e9d8cb] bg-[#fffaf5]/80 p-5 shadow-[0_18px_40px_rgba(45,32,28,0.04)]">
            <div className="mb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b85c3b]">
                Featured Entourage
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: 'Best Man', people: ['Ludevico Domingo Jr'] },
                { label: 'Parents of the Bride', people: ['Socorro Domingo', 'Ervin Domingo'] },
                { label: 'Maid of Honor', people: ['Karina Domingo'] },
              ].map((group) => (
                <div
                  key={group.label}
                  className="rounded-[22px] border border-[#efe3d8] bg-[#f7f0ea] p-4 shadow-[0_12px_26px_rgba(45,32,28,0.04)]"
                >
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b85c3b]">
                    {group.label}
                  </p>
                  <div className="space-y-2">
                    {group.people.map((person) => (
                      <div key={person} className="rounded-full bg-white/70 px-3 py-2.5 text-center">
                        <p className="font-serif text-lg text-[#2d201c]">{person}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-center">
              <a
                href="/guest-list"
                className="inline-flex items-center justify-center rounded-full border border-[#d8bda7] bg-[#f7f0ea] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#2d201c] transition hover:bg-[#f0e0d3]"
              >
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
