import { promises as fs } from 'node:fs'
import path from 'node:path'

const RSVPS_PATH = path.join(process.cwd(), 'data', 'rsvps.json')

async function getConfirmedGuests() {
  try {
    const raw = await fs.readFile(RSVPS_PATH, 'utf8')
    const rsvps = JSON.parse(raw)

    return rsvps
      .filter((entry: Record<string, unknown>) => String(entry.attending ?? '').toLowerCase() === 'yes')
      .map((entry: Record<string, unknown>) => ({
        name: String(entry.name ?? 'Guest'),
        guests: Number(entry.guestCount ?? 1),
        notes: String(entry.notes ?? ''),
        status: 'Confirmed' as const,
      }))
  } catch {
    return []
  }
}

export default async function AddressPage() {
  const confirmed = await getConfirmedGuests()

  return (
    <main className="min-h-screen bg-[#f7f0ea] px-4 py-16 text-[#2d201c] md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b85c3b]">
            Wedding Address
          </p>
          <h1 className="font-serif text-4xl font-light md:text-5xl">
            The Venue & Guest List
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[30px] border border-[#e7d6c5] bg-[#fffaf5] p-8 shadow-[0_18px_40px_rgba(45,32,28,0.06)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#7a655d]">
              Location
            </p>
            <h2 className="mb-6 font-serif text-3xl font-light text-[#2d201c]">
              Garden Villa Events
            </h2>
            <div className="space-y-4 text-[#554843]">
              <p>123 Rosewood Avenue</p>
              <p>San Juan, Metro Manila</p>
              <p>Philippines</p>
            </div>

            <div className="mt-8 rounded-[22px] bg-[#f2e6dc] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7a655d]">
                Directions
              </p>
              <p className="mt-3 leading-relaxed text-[#554843]">
                Parking is available onsite. Please arrive 30 minutes before the ceremony to settle in and enjoy the welcome drinks.
              </p>
            </div>
          </section>

          <section className="rounded-[30px] border border-[#e7d6c5] bg-[#fffaf5] p-8 shadow-[0_18px_40px_rgba(45,32,28,0.06)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#7a655d]">
              Confirmed Guests
            </p>
            <div className="space-y-4">
              {confirmed.length === 0 ? (
                <p className="text-[#5d4c47]">No confirmed guests yet.</p>
              ) : (
                confirmed.map((guest: { name: string; guests: number; notes?: string; status: string }) => (
                  <div key={guest.name} className="rounded-[18px] border border-[#ecdfd4] bg-[#fffaf5] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-serif text-xl font-light text-[#2d201c]">{guest.name}</h3>
                      <span className="rounded-full bg-[#ead8c9] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2d201c]">
                        {guest.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#5d4c47]">
                      {guest.guests} guest{guest.guests > 1 ? 's' : ''}
                    </p>
                    {guest.notes && (
                      <p className="mt-2 text-sm text-[#5d4c47]">Note: {guest.notes}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#b85c3b] px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#9f4f35]"
          >
            Back Home
          </a>
        </div>
      </div>
    </main>
  )
}
