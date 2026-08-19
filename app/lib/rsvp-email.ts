export type RSVPEmailPayload = {
  name: string
  email: string
  guestCount: string
  attending: 'yes' | 'no'
  notes?: string
}

export function buildConfirmationEmail(payload: RSVPEmailPayload) {
  const status = payload.attending === 'yes' ? 'confirmed attendance' : 'regretfully declined'
  const notes = payload.notes?.trim() ? payload.notes.trim() : 'No additional notes provided.'

  return {
    subject: `RSVP Confirmation for ${payload.name}`,
    text: `Hello ${payload.name},\n\nYour RSVP has been received and recorded as ${status}.\n\nGuest email: ${payload.email}\nGuest count: ${payload.guestCount}\nAttendance: ${payload.attending === 'yes' ? 'Attending' : 'Not attending'}\nNotes: ${notes}\n\nThank you for your response!`,
  }
}
