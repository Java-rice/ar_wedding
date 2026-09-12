'use client'

export function Reminders() {
  const reminders = [
    {
      image:
        '/Images/arrive_on_time.jpeg',
      title: 'Arrive on Time',
      description: 'Please arrive 15-20 minutes before the ceremony begins. This allows time for seating and photos before we start.',
    },
    {
      image:
        '/Images/unplugged.jpg',
      title: 'Unplugged Ceremony',
      description: 'We kindly request that all phones and cameras be put away during the ceremony. Professional photos will be shared with everyone.',
    },
    {
      image:
        '/Images/enjoy_celebrate.jpg',
      title: 'Enjoy & Celebrate',
      description: 'Come ready to celebrate with us! This is a day to create beautiful memories and share in the joy of our union.',
    },
  ]

  return (
    <section className="bg-[#2f2523] px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#f0d7b9]">
            essentials
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light text-[#f9f4ef] md:text-5xl">
            Important Reminders
          </h2>
          <p className="text-[#f4e9e2]/80">
            A few things to help make our day perfect
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reminders.map((reminder, idx) => (
            <div
              key={idx}
              className="space-y-4 overflow-hidden rounded-[24px] bg-[#f9f3ee]/5 p-3 shadow-[0_16px_36px_rgba(18,14,13,0.18)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-[18px] bg-[#f0e5de]">
                <img
                  src={reminder.image}
                  alt={reminder.title}
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-serif text-xl font-light text-[#f9f4ef]">
                  {reminder.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#f4e9e2]/80">
                  {reminder.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl overflow-hidden rounded-[28px] border border-[#f7e0c9]/10 bg-[#f9f3ee]/5 p-8 text-center shadow-[0_20px_40px_rgba(18,14,13,0.14)]">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/Images/snap_share.jpg"
              alt="Wedding day atmosphere"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border border-[#f0d7b9]/30 bg-[#f9f3ee]/10 p-4 text-3xl text-[#f0d7b9]">
                📸
              </div>
            </div>
            <h3 className="font-serif text-2xl font-light text-[#f9f4ef]">
              Snap & Share
            </h3>
            <p className="mt-4 text-[#f4e9e2]/80">
              After the ceremony, feel free to capture candid moments and share photos from the reception. Tag us on social media using our wedding hashtag: <span className="font-medium text-[#f0d7b9]">#LifetimeARVIEntureswithREGINA</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
