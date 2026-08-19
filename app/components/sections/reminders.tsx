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
    <section className="bg-[#2b201e] px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#f0c7a4]">
            essentials
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light text-white md:text-5xl">
            Important Reminders
          </h2>
          <p className="text-[#f5e9e1]/80">
            A few things to help make our day perfect
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reminders.map((reminder, idx) => (
            <div
              key={idx}
              className="space-y-4 rounded-[24px] border border-white/10 bg-white/5 p-8 shadow-[0_18px_40px_rgba(18,14,13,0.14)] transition-colors hover:border-[#f0c7a4]/40"
            >
              <div className="text-4xl">{reminder.icon}</div>
              <h3 className="font-serif text-xl font-light text-white">
                {reminder.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#f5e9e1]/80">
                {reminder.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl space-y-6 text-center">
          <div className="text-4xl text-[#f0c7a4]">📸</div>
          <h3 className="font-serif text-2xl font-light text-white">
            Snap & Share
          </h3>
          <p className="text-[#f5e9e1]/80">
            After the ceremony, feel free to capture candid moments and share photos from the reception. Tag us on social media using our wedding hashtag: <span className="font-medium text-[#f0c7a4]">#ArveAndRegina2026</span>
          </p>
        </div>
      </div>
    </section>
  )
}
