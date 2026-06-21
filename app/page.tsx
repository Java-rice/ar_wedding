'use client'

import { Hero } from './components/sections/hero'
import { WeddingDetails } from '@/components/sections/wedding-details'
import { Participants } from '@/components/sections/participants'
import { Timeline } from '@/components/sections/timeline'
import { Attire } from '@/components/sections/attire'
import { Reminders } from '@/components/sections/reminders'
import { RSVP } from '@/components/sections/rsvp'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <WeddingDetails />
      <Participants />
      <Timeline />
      <Attire />
      <Reminders />
      <RSVP />
      <Footer /> */}
    </main>
  )
}
