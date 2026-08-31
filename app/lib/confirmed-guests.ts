export type ConfirmedGuest = {
  name: string
  guests: number
  status: 'Confirmed' | 'Pending'
  notes?: string
}

export const confirmedGuests: ConfirmedGuest[] = [
  { name: 'Arvie Pandac', guests: 2, status: 'Confirmed', notes: 'Family table near the dance floor' },
  { name: 'Regina Domingo', guests: 2, status: 'Confirmed', notes: 'Close to the couple seating area' },
  { name: 'Nina Santos', guests: 1, status: 'Confirmed', notes: 'Vegetarian meal' },
  { name: 'Mark Reyes', guests: 2, status: 'Confirmed' },
  { name: 'Liza Gomez', guests: 1, status: 'Confirmed' },
  { name: 'Ethan Cruz', guests: 2, status: 'Pending' },
]
