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
    <section className="bg-background py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Attire Guide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please dress in formal attire that complements our boho aesthetic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <Image
              src="/attire-guide.png"
              alt="Attire color palette"
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-light text-foreground">Color Palette</h3>
              <p className="text-foreground/70">
                We invite our guests to wear formal attire in earth tones and warm neutrals that 
                harmonize with our boho-inspired celebration. These colors reflect the natural elegance 
                we&apos;ve envisioned for our special day.
              </p>
            </div>

            {/* Color swatches */}
            <div className="space-y-3">
              {colorPalette.map((color, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg border border-border shadow-sm"
                    style={{ backgroundColor: color.color }}
                  />
                  <div>
                    <p className="font-medium text-foreground">{color.name}</p>
                    <p className="text-sm text-muted-foreground">{color.color}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground">Dress Code: Formal</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Long dresses or formal gowns for women</li>
                <li>• Dark suits or formal wear for men</li>
                <li>• Dress shoes required</li>
                <li>• Accessories in gold or metallic tones welcome</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gift Guide */}
        <div className="bg-primary/5 p-8 md:p-12 rounded-lg border border-primary/10">
          <h3 className="font-serif text-2xl font-light text-foreground mb-6">Gift Guide</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="font-medium text-foreground">Registry</p>
              <p className="text-foreground/70 text-sm">
                Your support helps us build our home together. Our registry is available at 
                [Registry Link]
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-foreground">Monetary Gifts</p>
              <p className="text-foreground/70 text-sm">
                Should you prefer to give a monetary gift, this would be greatly appreciated and help 
                us start our journey together.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-foreground">Most Appreciated</p>
              <p className="text-foreground/70 text-sm">
                Your presence at our celebration means more to us than any gift. Simply being here to 
                share in our joy is the greatest honor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
