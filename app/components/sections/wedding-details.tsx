'use client'

import Image from 'next/image'

export function WeddingDetails() {
  return (
    <section className="bg-primary py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Rings & Venue Hero */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/wedding-rings.png"
                alt="Wedding Rings"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/wedding-venue.png"
                alt="Wedding Venue"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground">
              Our Journey Together
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              We are filled with joy as we invite you to share in the celebration of our love story. 
              This intimate gathering brings together our dearest family and friends to witness the 
              beginning of our forever.
            </p>
          </div>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Couple */}
            <div className="text-center space-y-3">
              <h3 className="font-serif text-2xl font-light text-accent">The Bride & Groom</h3>
              <div className="space-y-2 text-primary-foreground">
                <p className="text-lg">Arvie Pandac</p>
                <p className="text-sm text-primary-foreground/70">Groom</p>
              </div>
              <div className="h-px w-8 bg-accent/30 mx-auto" />
              <div className="space-y-2 text-primary-foreground">
                <p className="text-lg">Regina Domingo</p>
                <p className="text-sm text-primary-foreground/70">Bride</p>
              </div>
            </div>

            {/* Ceremony Details */}
            <div className="text-center space-y-3">
              <h3 className="font-serif text-2xl font-light text-accent">The Ceremony</h3>
              <div className="space-y-4 text-primary-foreground">
                <div>
                  <p className="text-sm text-primary-foreground/70 uppercase tracking-wide mb-1">Date</p>
                  <p className="text-lg">Sunday, December 1, 2026</p>
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70 uppercase tracking-wide mb-1">Time</p>
                  <p className="text-lg">4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="text-center space-y-3">
              <h3 className="font-serif text-2xl font-light text-accent">The Venue</h3>
              <div className="space-y-2 text-primary-foreground">
                <p className="text-lg font-medium">[Venue Location]</p>
                <p className="text-sm text-primary-foreground/70">
                  [Full Address]
                </p>
                <p className="text-sm text-primary-foreground/70">
                  [City, State]
                </p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="text-center space-y-6 max-w-2xl mx-auto border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/90 leading-relaxed">
              We are honored to have you witness this sacred moment. Your presence means the world to us 
              as we embark on this new chapter of our lives together.
            </p>
            <p className="font-serif text-lg text-accent">With love and gratitude</p>
          </div>
        </div>
      </div>
    </section>
  )
}
