'use client'

import { Hero } from './components/sections/hero'
import { WeddingDetails } from './components/sections/wedding-details'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WeddingDetails />
      {/* <Attire />
      <Reminders />
      <RSVP />
      <Footer /> */}
    </main>
  )
}
