'use client'

import Image from 'next/image'

const storyMoments = [
  {
    title: 'Where it began',
    description: 'Our story began in college, when we were simply two young hearts finding our way through life. What started as a friendship slowly grew into something deeper—something neither of us expected.',
    image: '/Images/main4.jpg',
  },
  {
    title: 'Love and faith',
    description: 'Our bond deepened in both love and faith. Through God’s steady guidance, he discovered and wholeheartedly embraced our shared beliefs.',
    image: '/Images/lovefaith.jpg',
  },
  {
    title: 'Our next chapter',
    description: 'After years of growing, learning, and continually choosing one another, we stand ready to make a lifelong promise before God.',
    image: '/Images/nextchapter.jpg',
  },
]

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#f7f0ea] px-4 py-16 text-[#2d201c] md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b85c3b]">
            Our Love story
          </p>
          <h1 className="font-serif text-5xl font-light md:text-6xl">
            A love story written with time, laughter, and quiet joy
          </h1>
        </div>

        <div className="mx-auto mb-16 max-w-4xl">
          <div className="relative h-[520px] overflow-hidden rounded-[32px] bg-[#f2e6dc] shadow-[0_24px_70px_rgba(45,32,28,0.12)]">
            <Image src="/Images/main5.jpg" alt="The couple" fill className="object-cover" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {storyMoments.map((moment) => (
            <article
              key={moment.title}
              className="overflow-hidden rounded-[28px] bg-[#fffaf5] shadow-[0_18px_40px_rgba(45,32,28,0.06)]"
            >
              <div className="relative h-64 w-full">
                <Image src={moment.image} alt={moment.title} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b85c3b]">
                  {moment.title}
                </p>
                <p className="text-base leading-relaxed text-[#554843]">
                  {moment.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="mx-auto mt-16 max-w-3xl border-y border-[#e7d6c5] px-6 py-8 text-center font-serif text-2xl italic leading-relaxed text-[#2d201c]">
          “House and wealth are the inheritance from fathers, but a prudent wife is from God.”
          <footer className="mt-4 text-xs not-italic uppercase tracking-[0.24em] text-[#b85c3b]">
            Proverbs 19:14
          </footer>
        </blockquote>

        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#b85c3b] px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#9f4f35]"
          >
            Back Home
          </a>
        </div>
      </div>
    </main>
  )
}
