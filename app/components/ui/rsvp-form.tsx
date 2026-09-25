'use client'

import { useState } from 'react'

interface RSVPFormProps {
  onSubmit: (details: {
    name: string
    email: string
    attending: string
  }) => void
}

export function RSVPForm({ onSubmit }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

      onSubmit(formData)
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
          Email Address 
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

      <p className="rounded-2xl border border-[#e7d6c5] bg-[#f2e6dc] p-4 text-sm leading-relaxed text-[#5d4c47]">
        <strong className="font-semibold text-[#b85c3b]">NOTE:</strong> We have reserved seats specifically for the guests indicated in our message. If you wish to bring or add anyone beyond the reserved guest count, kindly confirm with the couple first. Thank you so much for understanding!
      </p>

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
