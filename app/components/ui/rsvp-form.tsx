'use client'

import { useState } from 'react'

interface RSVPFormProps {
  onSubmit: (details: {
    name: string
    email: string
    attending: string
    guestNames: string[]
  }) => void
}

export function RSVPForm({ onSubmit }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    notes: '',
  })
  const [additionalGuestName, setAdditionalGuestName] = useState('')
  const [additionalGuestNames, setAdditionalGuestNames] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, guestNames: additionalGuestNames }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        const message = data?.error || 'Failed to submit RSVP.'
        throw new Error(message)
      }

      onSubmit({ ...formData, guestNames: additionalGuestNames })
    } catch (err) {
      const message = err instanceof Error && err.message ? err.message : 'Failed to submit RSVP. Please try again.'
      setError(message)
      console.error('RSVP submission error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={isLoading} className="mx-auto max-w-md space-y-3 text-left transition-opacity duration-300 lg:mx-0">
      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
          {error}
        </div>
      )}

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      {/* Email Address */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email Address <span className="font-normal text-muted-foreground">(Optional)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      {/* Additional guests */}
      <div className="space-y-3 rounded-2xl border border-border bg-card/60 p-4">
        <div>
          <label htmlFor="additionalGuestName" className="block text-sm font-medium text-foreground">
            RSVP for someone else
          </label>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            You may submit this RSVP on behalf of another guest. Add their name below.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[#b85c3b]">
            Please make sure the guest you add is included on the expected guest list provided by the wedding celebrants.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="text"
            id="additionalGuestName"
            value={additionalGuestName}
            onChange={(e) => setAdditionalGuestName(e.target.value)}
            placeholder="Other guest's full name"
            className="min-w-0 flex-1 px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          <button
            type="button"
            onClick={() => {
              const name = additionalGuestName.trim()
              if (!name) return
              setAdditionalGuestNames((names) => [...names, name])
              setAdditionalGuestName('')
            }}
            className="rounded-lg border border-accent px-4 py-3 text-sm font-medium text-foreground transition hover:bg-accent/10"
          >
            Add guest
          </button>
        </div>
        {additionalGuestNames.length > 0 && (
          <ul className="space-y-2" aria-label="Additional guests">
            {additionalGuestNames.map((guestName, index) => (
              <li key={`${guestName}-${index}`} className="flex items-center justify-between rounded-lg bg-background px-3 py-2 text-sm text-foreground">
                <span>{guestName}</span>
                <button
                  type="button"
                  onClick={() => setAdditionalGuestNames((names) => names.filter((_, guestIndex) => guestIndex !== index))}
                  aria-label={`Remove ${guestName}`}
                  className="px-2 text-lg leading-none text-muted-foreground transition hover:text-foreground"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Attendance */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          Will You Be Attending?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="attending"
              value="yes"
              checked={formData.attending === 'yes'}
              onChange={handleChange}
              className="w-4 h-4 accent-accent"
            />
            <span className="text-foreground">Yes, I&apos;ll be there!</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="attending"
              value="no"
              checked={formData.attending === 'no'}
              onChange={handleChange}
              className="w-4 h-4 accent-accent"
            />
            <span className="text-foreground">Sorry, can&apos;t attend</span>
          </label>
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <label htmlFor="notes" className="block text-sm font-medium text-foreground">
          Notes (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Anything we should know?"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-6 bg-accent text-white font-medium hover:bg-opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 transition-all duration-300"
      >
        {isLoading ? 'Submitting...' : 'Confirm My Attendance'}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form, you confirm your attendance and acknowledge our wedding details.
      </p>
    </form>
  )
}
