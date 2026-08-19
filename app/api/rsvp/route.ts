import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

import { buildConfirmationEmail } from '../../lib/rsvp-email'

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    const formData: {
      name: string
      email: string
      guestCount: string
      attending: 'yes' | 'no'
      notes: string
    } = {
      name: String(payload.name ?? '').trim(),
      email: String(payload.email ?? '').trim(),
      guestCount: String(payload.guestCount ?? '1'),
      attending: payload.attending === 'no' ? 'no' : 'yes',
      notes: String(payload.notes ?? '').trim(),
    }

    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const { subject, text } = buildConfirmationEmail(formData)
    const guestEmail = formData.email
    const hostEmail = (process.env.RSVP_TO_EMAIL || 'perochejmp@gmail.com').trim()
    const smtpUser = process.env.SMTP_USER?.trim()
    const smtpPass = process.env.SMTP_PASS?.trim()
    const smtpFrom = process.env.SMTP_FROM?.trim() || hostEmail

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            'Gmail SMTP is not configured. Add SMTP_USER and SMTP_PASS to .env.local before submitting RSVP.',
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: smtpFrom,
      to: guestEmail,
      bcc: hostEmail,
      subject,
      text,
    })

    return NextResponse.json({
      success: true,
      message: 'RSVP received. A confirmation email has been sent to your address and copied to the host inbox.',
      email: {
        to: guestEmail,
        bcc: hostEmail,
        subject,
      },
    })
  } catch (error) {
    const message = error instanceof Error && error.message ? error.message : 'Failed to submit RSVP.'
    console.error('RSVP submission failed:', error)
    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}
