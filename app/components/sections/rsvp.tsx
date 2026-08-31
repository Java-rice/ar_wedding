'use client'

import { useState } from 'react'
import { RSVPForm } from '../ui/rsvp-form'

export function RSVP() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="rsvp" className="bg-[#f7f0ea] px-4 py-20 md:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b85c3b]">
            RSVP
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light text-[#2d201c] md:text-5xl">
            Kindly RSVP
          </h2>
          <p className="text-[#5d4c47]">
            Please confirm your attendance by November 15, 2026
          </p>
        </div>

        {submitted ? (
          <div className="space-y-6 rounded-[30px] border border-[#e7d6c5] bg-[#fffaf5] p-10 text-center shadow-[0_18px_40px_rgba(45,32,28,0.06)]">
            <div className="text-6xl">💌</div>
            <h3 className="font-serif text-2xl font-light text-[#2d201c]">
              Thank You!
            </h3>
            <p className="leading-relaxed text-[#554843]">
              We have received your RSVP confirmation. Your presence means the world to us, and we cannot wait to celebrate with you on December 1st.
            </p>
            <p className="pt-4 text-sm text-[#6d5b55]">
              A confirmation email has been sent to your address.
            </p>
          </div>
        ) : (
          <RSVPForm onSubmit={() => setSubmitted(true)} />
        )}
      </div>
    </section>
  )
}
