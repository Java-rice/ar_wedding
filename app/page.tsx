'use client'

import { Hero } from './components/sections/hero'
import { WeddingDetails } from './components/sections/wedding-details'
import { Participants } from './components/sections/participants'
import { Timeline } from './components/sections/timeline'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WeddingDetails />
      <Participants />
      <Timeline />
      {/* <Attire />
      <Reminders />
      <RSVP />
      <Footer /> */}
    </main>
  )
}
