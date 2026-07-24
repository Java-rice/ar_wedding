'use client'

import { useState } from 'react'
import { RSVPForm } from '../ui/rsvp-form'

export function RSVP() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="rsvp" className="bg-background py-20 md:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Kindly RSVP
          </h2>
          <p className="text-muted-foreground">
            Please confirm your attendance by November 15, 2026
          </p>
        </div>

        {submitted ? (
          <div className="space-y-6 text-center py-12">
            <div className="text-6xl">💌</div>
            <h3 className="font-serif text-2xl font-light text-foreground">
              Thank You!
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              We have received your RSVP confirmation. Your presence means the world to us, 
              and we cannot wait to celebrate with you on December 1st.
            </p>
            <p className="text-sm text-muted-foreground pt-4">
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
