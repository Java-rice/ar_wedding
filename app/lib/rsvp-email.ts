export type RSVPEmailPayload = {
  name: string
  email: string
  guestNames: string[]
  guestCount: string
  attending: 'yes' | 'no'
  notes?: string
}

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const emailShell = (content: string) => `
  <div style="margin:0;background:#f7f0ea;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;color:#2d201c;">
    <div style="max-width:600px;margin:0 auto;background:#fffaf5;border:1px solid #ead8ca;">
      <div style="background:#2d201c;padding:28px 24px;text-align:center;color:#f7e0c9;">
        <div style="font-size:11px;letter-spacing:4px;text-transform:uppercase;">Arvie &amp; Regina</div>
        <div style="margin-top:10px;font-size:25px;font-weight:normal;">With love, always</div>
      </div>
      <div style="padding:32px 28px;line-height:1.7;font-family:Arial,sans-serif;font-size:15px;">
        ${content}
      </div>
      <div style="border-top:1px solid #ead8ca;padding:18px 24px;text-align:center;color:#7a655d;font-family:Arial,sans-serif;font-size:12px;">
        Tuesday, December 1, 2026 &middot; Iglesia Ni Cristo, Ciudad de Victoria
      </div>
    </div>
  </div>
`

export function buildRsvpEmails(payload: RSVPEmailPayload) {
  const name = escapeHtml(payload.name)
  const email = escapeHtml(payload.email)
  const guestCount = escapeHtml(payload.guestCount)
  const guestNames = payload.guestNames.map(escapeHtml)
  const notes = escapeHtml(payload.notes?.trim() || 'No additional notes provided.')
  const attendance = payload.attending === 'yes' ? 'Attending' : 'Unable to attend'
  const status = payload.attending === 'yes' ? 'We are so happy you can join us.' : 'We are sorry you will not be able to join us.'
  const guestList = guestNames.length > 0 ? guestNames.join(', ') : 'No additional guests'
  const guestListHtml = guestNames.length > 0
    ? guestNames.map((guestName) => `<li>${guestName}</li>`).join('')
    : '<li>No additional guests</li>'

  const guestText = `Hello ${payload.name},\n\nYour RSVP has been received. ${status}\n\nAdditional guests: ${guestList}\nTotal guests: ${payload.guestCount}\nAttendance: ${attendance}\nNotes: ${payload.notes?.trim() || 'No additional notes provided.'}\n\nWith love,\nArvie & Regina`
  const hostText = `New RSVP received\n\nName: ${payload.name}\nEmail: ${payload.email}\nAdditional guests: ${guestList}\nTotal guests: ${payload.guestCount}\nAttendance: ${attendance}\nNotes: ${payload.notes?.trim() || 'No additional notes provided.'}`

  return {
    guest: {
      subject: `RSVP received, ${payload.name}`,
      text: guestText,
      html: emailShell(`
        <p style="margin:0 0 20px;color:#b85c3b;font-size:11px;letter-spacing:3px;text-transform:uppercase;">RSVP received</p>
        <h1 style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:normal;">Thank you, ${name}.</h1>
        <p style="margin:0 0 24px;">${status} Your response has been safely received.</p>
        <div style="margin:24px 0;padding:18px;background:#f7f0ea;border-left:3px solid #c97a5f;">
          <strong style="font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:normal;">Your RSVP</strong>
          <div style="margin-top:12px;color:#554843;">Attendance: <strong>${attendance}</strong><br />Total guests: <strong>${guestCount}</strong></div>
          <div style="margin-top:12px;color:#554843;">Additional guests: ${guestList}</div>
        </div>
        <p style="margin:0;">We cannot wait to celebrate this beautiful chapter with you.</p>
      `),
    },
    host: {
      subject: `New RSVP from ${payload.name}`,
      text: hostText,
      html: emailShell(`
        <p style="margin:0 0 20px;color:#b85c3b;font-size:11px;letter-spacing:3px;text-transform:uppercase;">New RSVP</p>
        <h1 style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:normal;">A new response has arrived.</h1>
        <div style="margin:24px 0;padding:20px;background:#f7f0ea;border:1px solid #ead8ca;">
          <div style="margin-bottom:12px;font-family:Georgia,'Times New Roman',serif;font-size:22px;">${name}</div>
          <div style="color:#554843;line-height:1.9;">Email: <a href="mailto:${email}" style="color:#b85c3b;">${email}</a><br />Attendance: <strong>${attendance}</strong><br />Total guests: <strong>${guestCount}</strong><br />Notes: ${notes}</div>
          <div style="margin-top:14px;color:#554843;"><strong>Additional guests</strong><ul style="margin:6px 0 0;padding-left:20px;">${guestListHtml}</ul></div>
        </div>
        <p style="margin:0;color:#554843;">This response was submitted through the wedding website.</p>
      `),
    },
  }
}
