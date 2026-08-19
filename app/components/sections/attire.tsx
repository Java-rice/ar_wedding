'use client'

import Image from 'next/image'

export function Attire() {
  const colorPalette = [
    { name: 'Deep Burgundy', color: '#451211' },
    { name: 'Warm Rust', color: '#983e1b' },
    { name: 'Soft Terracotta', color: '#c85d25' },
    { name: 'Warm Gray', color: '#b2b2b2' },
    { name: 'Cream', color: '#faf8f5' },
  ]

  return (
    <section className="bg-background px-4 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b06a4c]">
            Attire guide
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light text-[#2e221f] md:text-5xl">
            Dress for the Day
          </h2>
          <p className="mx-auto max-w-2xl text-[#5f4e49]">
            Please dress in formal attire that complements our warm, earthy aesthetic.
          </p>
        </div>

        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-[28px] bg-[#edded2] shadow-[0_26px_70px_rgba(46,34,31,0.12)] ring-1 ring-black/5">
            <Image
              src="/attire-guide.png"
              alt="Attire color palette"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8 rounded-[30px] border border-[#eadbcf] bg-[#fffdfb] p-7 shadow-[0_28px_70px_rgba(46,34,31,0.06)] md:p-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-light text-[#2e221f]">Color Palette</h3>
              <p className="text-[#564842]">
                We invite our guests to wear formal attire in earth tones and warm neutrals that harmonize with our boho-inspired celebration.
              </p>
            </div>

            <div className="space-y-3">
              {colorPalette.map((color, idx) => (
                <div key={idx} className="flex items-center gap-4 rounded-2xl border border-[#f0e3db] bg-[#fffaf7] p-3">
                  <div
                    className="h-12 w-12 rounded-xl border border-black/5 shadow-sm"
                    style={{ backgroundColor: color.color }}
                  />
                  <div>
                    <p className="font-medium text-[#2e221f]">{color.name}</p>
                    <p className="text-sm text-[#6d5b55]">{color.color}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-[#f0e3db] pt-4">
              <h4 className="font-medium text-[#2e221f]">Dress Code: Formal</h4>
              <ul className="space-y-2 text-sm text-[#564842]">
                <li>• Long dresses or formal gowns for women</li>
                <li>• Dark suits or formal wear for men</li>
                <li>• Dress shoes required</li>
                <li>• Accessories in gold or metallic tones welcome</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#eadbcf] bg-[#f4e9e2] p-8 md:p-12 shadow-[0_20px_55px_rgba(46,34,31,0.05)]">
          <h3 className="mb-6 font-serif text-2xl font-light text-[#2e221f]">Gift Guide</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2 rounded-2xl bg-[#fffdfb] p-5 shadow-sm">
              <p className="font-medium text-[#2e221f]">Registry</p>
              <p className="text-sm text-[#564842]">
                Your support helps us build our home together. Our registry is available at [Registry Link].
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-[#fffdfb] p-5 shadow-sm">
              <p className="font-medium text-[#2e221f]">Monetary Gifts</p>
              <p className="text-sm text-[#564842]">
                Should you prefer to give a monetary gift, this would be greatly appreciated as we start our journey together.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-[#fffdfb] p-5 shadow-sm">
              <p className="font-medium text-[#2e221f]">Most Appreciated</p>
              <p className="text-sm text-[#564842]">
                Your presence at our celebration means more to us than any gift. Sharing in our joy is the greatest honor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
