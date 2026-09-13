'use client'

const photoUploadUrl = 'https://drive.google.com/drive/folders/1LumEkCnGoHQmSnVTjVPHIDXbsXMWqFQ2'
const photoUploadQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(photoUploadUrl)}`

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

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-[220px_1fr] md:items-stretch">
          <a
            href={photoUploadUrl}
            target="_blank"
            rel="noreferrer"
            className="group mx-auto block h-fit w-full max-w-[220px] rounded-[22px] border border-[#efe3d8]/70 bg-[#f9f3ee]/85 p-4 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:bg-[#f9f3ee]/95 md:mx-0"
          >
            <img
              src={photoUploadQrUrl}
              alt="QR code to upload wedding photos"
              className="mx-auto aspect-square w-full rounded-xl bg-white p-3"
            />
            <p className="mt-4 font-serif text-2xl text-[#2f2523]">Upload Photos</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#7a655d]">
              Open Google Drive folder
            </p>
          </a>

          <div className="relative overflow-hidden rounded-[28px] border border-[#f7e0c9]/15 bg-[#3a2d2a]/80 p-8 text-center shadow-[0_20px_40px_rgba(18,14,13,0.14)] md:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <img
                src="/Images/snap_share.jpg"
                alt="Wedding day atmosphere"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h3 className="font-serif text-2xl font-light text-[#f9f4ef]">
                Snap & Share
              </h3>
              <p className="mt-4 text-[#f4e9e2]/80">
                After the ceremony, feel free to capture candid moments and share photos from the reception. Tag us on social media using our wedding hashtags: <span className="font-medium text-[#f0d7b9]">#LifetimeARVIEntureswithREGINA</span> and <span className="font-medium text-[#f0d7b9]">#ARVIEryspecialmomentswithREGINA</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
