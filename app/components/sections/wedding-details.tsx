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
            The Journey
          </p>
          <h2 className="break-words font-serif text-3xl font-light leading-tight text-[#2d201c] sm:text-4xl md:text-5xl">
            Our Love Story <span aria-hidden="true">🤍</span>
          </h2>
        </div>

        <div className="mx-auto mb-14 max-w-4xl space-y-5 text-center text-base leading-relaxed text-[#554843] sm:text-lg">
          <p>
            Our story began in college, when we were simply two young hearts finding our way through life. What started as a friendship slowly grew into something deeper—something neither of us expected.
          </p>
          <p>
            Our bond deepened in both love and faith. Through God’s steady guidance, he discovered and wholeheartedly embraced our shared beliefs. His decision to walk this spiritual path with me marked one of the most profound milestones of our journey—not just because it unified us in faith, but because it anchored the foundation of the life and future we were building together.
          </p>
          <p>
            After years of growing, learning, and continually choosing one another, we stand ready for our next chapter—moving forward as two hearts united in faith, prepared to make a lifelong promise before God.
          </p>
          <p className="font-serif text-lg italic text-[#2d201c] sm:text-xl">
            From young love to a lifetime of faith and love. And through it all, God was guiding us home to each other. <span aria-hidden="true">🤍</span>
          </p>
          <blockquote className="break-words border-y border-[#e7d6c5] px-3 py-5 font-serif text-lg italic text-[#2d201c] sm:px-5 sm:text-xl">
            “House and wealth are the inheritance from fathers, but a prudent wife is from God.”
            <footer className="mt-3 text-xs not-italic uppercase tracking-[0.24em] text-[#b85c3b]">
              Proverbs 19:14
            </footer>
          </blockquote>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[24px] bg-[#f2e6dc] shadow-[0_22px_60px_rgba(45,32,28,0.12)] sm:h-[420px] sm:rounded-[30px] md:h-[500px]">
            <Image
              src="/Images/main5.jpg"
              alt="The couple together"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 rounded-[26px] bg-[#fffaf5] p-5 shadow-[0_20px_50px_rgba(45,32,28,0.08)] sm:rounded-[32px] sm:p-7 md:p-9">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#7a655d] sm:text-sm sm:tracking-[0.28em]">
              The celebration
            </p>

            <div className="mt-2 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7a655d]">Date</p>
                <p className="mt-2 break-words text-lg text-[#2d201c] sm:text-xl">Tuesday, December 1, 2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7a655d]">Ceremony Time</p>
                <p className="mt-2 text-lg text-[#2d201c] sm:text-xl">3:00 PM</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7a655d]">Church</p>
                <p className="mt-2 break-words text-lg text-[#2d201c] sm:text-xl">Iglesia Ni Cristo, Ciudad de Victoria</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7a655d]">Reception</p>
                <p className="mt-2 text-lg text-[#2d201c] sm:text-xl">The Pace</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#7a655d]">Hashtags</p>
                <p className="mt-2 break-words text-base leading-relaxed text-[#2d201c] sm:text-xl">#LifetimeARVIEntureswithREGINA</p>
                <p className="mt-2 break-words text-base leading-relaxed text-[#2d201c] sm:text-xl">#ARVIEryspecialmomentswithREGINA</p>
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
                name: 'Arvie Pandao',
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
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#b85c3b]">
                Featured Entourage
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                { label: 'Parents of the Bride', people: ['Socorro Domingo', 'Ervin Domingo'] },
                { label: 'Parents of the Groom', people: ['Elisa Pacaldo'] },
                { label: 'Best Man', people: ['Ludevico Domingo Jr'] },
                { label: 'Maid of Honor', people: ['Karina Domingo'] },
              ].map((group) => (
                <div
                  key={group.label}
                  className="min-w-0 rounded-[18px] bg-[#f7f0ea] p-4"
                >
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#b85c3b]">
                    {group.label}
                  </p>
                  <div className="space-y-1.5">
                    {group.people.map((person) => (
                      <div
                        key={person}
                        className={`break-words px-1 py-1.5 ${
                          (group.label === 'Best Man' && person === 'Ludevico Domingo Jr') ||
                          (group.label === 'Maid of Honor' && person === 'Karina Domingo')
                            ? 'px-3'
                            : ''
                        }`}
                      >
                        <p className={`font-serif text-base sm:text-lg text-[#2d201c]`}>{person}</p>
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
