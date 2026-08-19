'use client'

import { useState } from 'react'
import { RSVPForm } from '../ui/rsvp-form'

export function RSVP() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="rsvp" className="bg-background px-4 py-20 md:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b06a4c]">
            RSVP
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light text-[#2e221f] md:text-5xl">
            Kindly RSVP
          </h2>
          <p className="text-[#5f4e49]">
            Please confirm your attendance by November 15, 2026
          </p>
        </div>

        {submitted ? (
          <div className="space-y-6 rounded-[30px] border border-[#eadbcf] bg-[#fffdfb] p-10 text-center shadow-[0_20px_50px_rgba(46,34,31,0.06)]">
            <div className="text-6xl">💌</div>
            <h3 className="font-serif text-2xl font-light text-[#2e221f]">
              Thank You!
            </h3>
            <p className="leading-relaxed text-[#564842]">
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
