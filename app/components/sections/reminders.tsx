'use client'

export function Reminders() {
  const reminders = [
    {
      icon: '🕐',
      title: 'Arrive on Time',
      description: 'Please arrive 15-20 minutes before the ceremony begins. This allows time for seating and photos before we start.',
    },
    {
      icon: '📱',
      title: 'Unplugged Ceremony',
      description: 'We kindly request that all phones and cameras be put away during the ceremony. Professional photos will be shared with everyone.',
    },
    {
      icon: '🎉',
      title: 'Enjoy & Celebrate',
      description: 'Come ready to celebrate with us! This is a day to create beautiful memories and share in the joy of our union.',
    },
  ]

  return (
    <section className="bg-primary py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground mb-6">
            Important Reminders
          </h2>
          <p className="text-primary-foreground/80">
            A few things to help make our day perfect
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reminders.map((reminder, idx) => (
            <div
              key={idx}
              className="bg-primary-foreground/5 p-8 rounded-lg border border-primary-foreground/10 hover:border-accent/30 transition-colors space-y-4"
            >
              <div className="text-4xl">{reminder.icon}</div>
              <h3 className="font-serif text-xl font-light text-primary-foreground">
                {reminder.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {reminder.description}
              </p>
            </div>
          ))}
        </div>

        {/* Photo sharing note */}
        <div className="mt-16 text-center space-y-6 max-w-2xl mx-auto">
          <div className="text-accent text-4xl">📸</div>
          <h3 className="font-serif text-2xl font-light text-primary-foreground">
            Snap & Share
          </h3>
          <p className="text-primary-foreground/80">
            After the ceremony, feel free to capture candid moments and share photos from the reception. 
            Tag us on social media using our wedding hashtag: <span className="font-medium text-accent">#ArveAndRegina2026</span>
          </p>
        </div>
      </div>
    </section>
  )
}
