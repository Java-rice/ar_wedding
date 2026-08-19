'use client'

import { Hero } from './components/sections/hero'
import { WeddingDetails } from './components/sections/wedding-details'
import { Attire } from './components/sections/attire'
import { Reminders } from './components/sections/reminders'
import { RSVP } from './components/sections/rsvp'
import { Footer } from './components/sections/footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WeddingDetails />
      <Attire />
      <Reminders />
      <RSVP />
      <Footer />
    </main>
  )
}
