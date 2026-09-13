'use client'

import Image from 'next/image'

const storyMoments = [
  {
    title: 'The first hello',
    description: 'A simple conversation became the beginning of something beautifully steady.',
    image: '/Images/main6.jpg',
  },
  {
    title: 'The little things',
    description: 'The quiet rituals, shared jokes, and everyday moments that made love feel natural.',
    image: '/Images/main4.jpg',
  },
  {
    title: 'The forever plan',
    description: 'And then came the day we decided to say yes to forever, together.',
    image: '/Images/main1.jpg',
  },
]

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#f7f0ea] px-4 py-16 text-[#2d201c] md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b85c3b]">
            Our story
          </p>
          <h1 className="font-serif text-5xl font-light md:text-6xl">
            A love that grew with time
          </h1>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative h-[520px] overflow-hidden rounded-[32px] bg-[#f2e6dc] shadow-[0_24px_70px_rgba(45,32,28,0.12)]">
            <Image src="/Images/main5.jpg" alt="The couple" fill className="object-cover" />
          </div>

          <div className="space-y-6 rounded-[32px] bg-[#fffaf5] p-8 shadow-[0_20px_55px_rgba(45,32,28,0.08)] md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#7a655d]">
              How we met
            </p>
            <p className="text-lg leading-relaxed text-[#554843]">
              We met in a season of life when everything was changing, and somehow, in the middle of all that uncertainty, we found a quiet kind of certainty in each other. It was not a dramatic beginning — just a beginning that felt right.
            </p>
            <p className="text-lg leading-relaxed text-[#554843]">
              From then on, love became a rhythm of support, laughter, steadiness, and grace. A bond that deepened with every ordinary moment.
            </p>
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
