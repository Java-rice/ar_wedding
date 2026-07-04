'use client'

export function Timeline() {
  const events = [
    {
      time: '[Time]',
      title: 'Ceremony',
      description: 'Exchange of vows',
    },
    {
      time: '[Time]',
      title: 'Photo Session',
      description: 'Capturing our joy',
    },
    {
      time: '[Time]',
      title: 'Light Snacks',
      description: 'Refreshments & mingling',
    },
    {
      time: '[Time]',
      title: 'Dinner Reception',
      description: 'A celebration feast',
    },
    {
      time: '[Time]',
      title: 'Reception Party',
      description: 'Dance, laughter & memories',
    },
  ]

  return (
    <section className="bg-secondary py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-secondary-foreground mb-4">
            Wedding Day Timeline
          </h2>
          <p className="text-secondary-foreground/80">
            A schedule for our special celebration
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, idx) => (
            <div key={idx} className="flex gap-6 md:gap-8">
              {/* Timeline indicator */}
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-accent" />
                {idx !== events.length - 1 && (
                  <div className="w-px h-12 bg-accent/30" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <p className="text-sm uppercase tracking-widest text-accent font-medium mb-1">
                  {event.time}
                </p>
                <h3 className="font-serif text-2xl font-light text-secondary-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-secondary-foreground/80">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-16 p-8 bg-secondary-foreground/5 border border-secondary-foreground/10">
          <h3 className="font-serif text-lg font-light text-secondary-foreground mb-3">
            Unplugged Ceremony
          </h3>
          <p className="text-secondary-foreground/80 text-sm leading-relaxed">
            To preserve the intimacy and sanctity of our ceremony, we kindly request that all phones, 
            cameras, and recording devices be put away. We have hired a professional photographer to 
            capture this precious moment, and photos will be shared with all guests afterward.
          </p>
        </div>
      </div>
    </section>
  )
}
