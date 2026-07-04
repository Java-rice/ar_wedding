'use client'

import Image from 'next/image'

export function Participants() {
  const roles = [
    {
      category: 'To stand as principal witnesses in our exchange of vows',
      title: 'Principal Sponsors',
      people: ['Guest', 'Guest', 'Guest', 'Guest'],
    },
    {
      category: 'To assist in our needs',
      title: 'Wedding Attendants',
      people: ['Best Man', 'Maid of Honor'],
    },
    {
      category: 'To guide us in our way',
      title: 'Groomsmen & Bridesmaids',
      people: ['Groomsman 1', 'Bridesmaid 1', 'Groomsman 2', 'Bridesmaid 2'],
    },
  ]

  const secondarySponsor = [
    {
      title: 'To light our path',
      people: ['Guest', 'Guest'],
    },
    {
      title: 'To cloth us as one',
      people: ['Guest', 'Guest'],
    },
    {
      title: 'To bind us together',
      people: ['Guest', 'Guest'],
    },
    {
      title: 'To carry our symbol of love, treasure and faith',
      people: ['Ring Bearer', 'Coin Bearer', 'Bible Bearer'],
    },
    {
      title: 'Flower Girls',
      people: ['Guest', 'Guest', 'Guest'],
    },
  ]

  return (
    <section className="bg-background py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Bride & Groom Hero Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/bride.png"
              alt="Bride - Arvie"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/groom.png"
              alt="Groom - Regina"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Our Wedding Honors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These special individuals have graciously agreed to stand with us on this momentous day
          </p>
        </div>

        {/* Principal Participants */}
        <div className="space-y-12 mb-16">
          {roles.map((role, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-6 md:pl-8">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                {role.category}
              </p>
              <h3 className="font-serif text-2xl font-light text-primary mb-4">
                {role.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {role.people.map((person, i) => (
                  <div
                    key={i}
                    className="py-2 text-foreground/80 text-sm border-b border-border"
                  >
                    {person}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Sponsors */}
        <div className="border-t-2 border-primary pt-12">
          <h3 className="font-serif text-3xl font-light text-foreground mb-12 text-center">
            Secondary Sponsors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondarySponsor.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <p className="font-serif text-lg font-light text-accent">
                  {group.title}
                </p>
                <div className="space-y-2">
                  {group.people.map((person, i) => (
                    <p key={i} className="text-foreground/70 text-sm">
                      {person}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
