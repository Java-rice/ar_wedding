'use client'

import { useMemo, useState } from 'react'

export function Attire() {
  const colorPalette = [
    {
      name: 'Burnt Orange',
      color: '#b85c3b',
      attire: '/Images/burnt_orange.jpeg',
    },
    {
      name: 'Terracotta',
      color: '#c97a5f',
      attire: '/Images/terracotta.jpeg',
    },
    {
      name: 'Taupe',
      color: '#7a655d',
      attire: '/Images/taupe.jpeg',
    },
    {
      name: 'Mocha',
      color: '#3f2d2b',
      attire: '/Images/mocha.jpeg',
    },
    {
      name: 'Champagne',
      color: '#f0d7b9',
      attire: '/Images/champagne.jpeg',
    },
    {
      name: 'Warm Beige',
      color: '#f7f0ea',
      attire: '/Images/warm_beige.jpeg',
    },
  ]

  const [selectedName, setSelectedName] = useState('Burnt Orange')

  const selectedColor = useMemo(
    () => colorPalette.find((item) => item.name === selectedName) ?? colorPalette[0],
    [selectedName],
  )

  return (
    <section className="bg-[#f7f0ea] px-4 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b85c3b]">
            Attire guide
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light text-[#2d201c] md:text-5xl">
            Dress for the Day
          </h2>
          <p className="mx-auto max-w-2xl text-[#5d4c47]">
            Please dress in formal attire that complements our warm, earthy aesthetic.
          </p>
        </div>

        <div className="mb-8 grid items-center gap-12">
          {/* <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-[#f1e6dc] shadow-[0_25px_70px_rgba(45,32,28,0.14)]">
            <img
              src={selectedColor.attire}
              alt={`${selectedColor.name} attire example`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d201c]/30 via-transparent to-white/10" />
            <div className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-[#2d201c]/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-white backdrop-blur-sm">
              {selectedColor.name}
            </div>
          </div> */}

          <div className="space-y-8 rounded-[30px] bg-[#fffaf5] p-7 shadow-[0_20px_55px_rgba(45,32,28,0.08)] md:p-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-light text-[#2d201c]">Color Palette</h3>
              <p className="text-[#554843]">
                We invite our guests to wear formal attire in earth tones and warm neutrals that harmonize with our intimate celebration.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {colorPalette.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedName(color.name)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-2 text-left transition-all duration-300 ${
                    selectedName === color.name
                      ? 'border-[#2d201c]/10 bg-[#f3e7dc] shadow-[0_12px_24px_rgba(45,32,28,0.10)]'
                      : 'border-transparent bg-[#fffaf5] shadow-[0_10px_25px_rgba(45,32,28,0.04)] hover:-translate-y-0.5'
                  }`}
                >
                  <div
                    className="h-5 w-5 rounded-full shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]"
                    style={{ backgroundColor: color.color }}
                  />
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#2d201c]">
                    {color.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-4 border-t border-[#efe3d8] pt-4">
              <h4 className="font-medium text-[#2d201c]">Dress Code: Formal</h4>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-[#f7f0ea] p-4 shadow-[0_10px_22px_rgba(45,32,28,0.04)]">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b85c3b]">Women</p>
                  <ul className="space-y-2 text-sm text-[#554843]">
                    <li>• No black</li>
                    <li>• No sparkly or sequined looks</li>
                    <li>• No very dark colors</li>
                    <li>• No short dresses</li>
                    <li>• No white or ivory</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#f7f0ea] p-4 shadow-[0_10px_22px_rgba(45,32,28,0.04)]">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b85c3b]">Men</p>
                  <ul className="space-y-2 text-sm text-[#554843]">
                    <li>• No black outfits</li>
                    <li>• No navy blue suits</li>
                    <li>• No bright or bold colors</li>
                    <li>• No very dark colors</li>
                    <li>• No casual wear</li>
                    <li>• No shorts or beachwear</li>
                  </ul>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-[#554843]">
                <li>• Dress shoes required.</li>
                <li>• Accessories in gold or metallic tones are welcome.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
