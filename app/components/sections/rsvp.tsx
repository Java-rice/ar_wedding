'use client'

import { useState } from 'react'
import { RSVPForm } from '../ui/rsvp-form'

const churchMapUrl = 'https://www.google.com/maps/place/Iglesia+Ni+Cristo+%5BBulacan+South%5D+-+Ciudad+De+Victoria/@14.7952083,120.9466071,17z/data=!3m1!4b1!4m6!3m5!1s0x3397ad9743d39081:0xe9b817c585bdcb8f!8m2!3d14.7952083!4d120.949182!16s%2Fg%2F11f11nmcr1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D'
const receptionMapUrl = 'https://www.google.com/maps/place/The+Pace/@14.7841334,120.9621087,17z/data=!3m1!4b1!4m6!3m5!1s0x3397ad5bef053aa9:0xc6dec8b5f1660cd7!8m2!3d14.7841334!4d120.9646836!16s%2Fg%2F11rp1rddn_?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D'

// Sample QR implementation: replace these generated images with local QR assets when ready.
const qrCodeUrl = (mapUrl: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(mapUrl)}`

export function RSVP() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="rsvp" className="bg-[#f7f0ea] px-4 py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <div className="mb-12 text-center lg:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b85c3b]">
              RSVP
            </p>
            <h2 className="mb-6 font-serif text-4xl font-light text-[#2d201c] md:text-5xl">
              Kindly RSVP
            </h2>
            <p className="text-[#5d4c47]">
              Kindly RSVP on or before October 15, 2026
            </p>
          </div>

          {submitted ? (
            <div className="relative overflow-hidden rounded-[30px] border border-[#e7d6c5] bg-[#fffaf5] p-8 text-center shadow-[0_20px_50px_rgba(45,32,28,0.08)] md:p-12">
              <div className="pointer-events-none absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 bg-[#c97a5f]" />
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f2e6dc] text-3xl text-[#b85c3b]">
                &#10003;
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-[#b85c3b]">
                RSVP received
              </p>
              <h3 className="mt-3 font-serif text-3xl font-light text-[#2d201c]">
                Thank you for letting us know
              </h3>
              <p className="mx-auto mt-5 max-w-md leading-relaxed text-[#554843]">
                Your response has been received. We are grateful to celebrate this beautiful chapter with you on December 1st.
              </p>
              <p className="mt-5 text-sm text-[#6d5b55]">
                A confirmation email has been sent to your address.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#b85c3b] px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#9f4f35]"
              >
                RSVP for another guest
              </button>
            </div>
          ) : (
            <RSVPForm onSubmit={() => setSubmitted(true)} />
          )}
        </div>

        <div className="space-y-8">
          <div className="rounded-[30px] border border-[#e7d6c5] bg-[#fffaf5] p-6 shadow-[0_18px_40px_rgba(45,32,28,0.06)] md:p-8">
            <div className="mb-7 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#b85c3b]">
              Find the venues
            </p>
            <h3 className="font-serif text-3xl font-light text-[#2d201c]">
              Scan for directions
            </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                { name: 'Church', mapUrl: churchMapUrl },
                { name: 'Reception', mapUrl: receptionMapUrl },
              ].map((venue) => (
                <a
                  key={venue.name}
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[22px] border border-[#efe3d8] bg-[#f7f0ea] p-4 text-center transition hover:-translate-y-1 hover:bg-[#f2e6dc]"
                >
                  <img
                    src={qrCodeUrl(venue.mapUrl)}
                    alt={`${venue.name} location QR code`}
                    className="mx-auto aspect-square w-full max-w-[190px] rounded-xl bg-white p-3"
                  />
                  <p className="mt-4 font-serif text-2xl text-[#2d201c]">{venue.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#7a655d]">
                    Open in Google Maps
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-[#e7d6c5] bg-[#f2e6dc] p-8 text-center shadow-[0_18px_40px_rgba(45,32,28,0.05)] md:p-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-[#c97a5f]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b85c3b]">
              Gift Guide
            </p>
            <div className="mx-auto max-w-3xl space-y-4 font-serif text-xl leading-relaxed text-[#2d201c] md:text-2xl">
              <p>
                Your presence and prayers mean the world to us and are the greatest gifts we could ever receive.
              </p>
              <p className="text-lg text-[#554843] md:text-xl">
                Should you wish to give a gift, a monetary contribution will help us as we begin our new journey together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
