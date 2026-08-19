'use client'

import { useState } from 'react'

const GUEST_NAMES = [
  'Arvie Pandac',
  'Regina Domingo',
  'Guest Name 1',
  'Guest Name 2',
  'Guest Name 3',
  'Guest Name 4',
  'Guest Name 5',
]

interface RSVPFormProps {
  onSubmit: () => void
}

export function RSVPForm({ onSubmit }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guestCount: '1',
    attending: 'yes',
    notes: '',
  })
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
        body: JSON.stringify(formData),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        const message = data?.error || 'Failed to submit RSVP.'
        throw new Error(message)
      }

      onSubmit()
    } catch (err) {
      const message = err instanceof Error && err.message ? err.message : 'Failed to submit RSVP. Please try again.'
      setError(message)
      console.error('RSVP submission error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
          {error}
        </div>
      )}

      {/* Name Selection */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Select Your Name
        </label>
        <select
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="">Choose your name</option>
          {GUEST_NAMES.map(name => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Email Address */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      {/* Guest Count */}
      <div className="space-y-2">
        <label htmlFor="guestCount" className="block text-sm font-medium text-foreground">
          Number of Guests
        </label>
        <select
          id="guestCount"
          name="guestCount"
          value={formData.guestCount}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
        </select>
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
            <span className="text-foreground">Yes, I'll be there!</span>
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
        className="w-full py-3 px-6 bg-accent text-white font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? 'Submitting...' : 'Confirm My Attendance'}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form, you confirm your attendance and acknowledge our wedding details.
      </p>
    </form>
  )
}
