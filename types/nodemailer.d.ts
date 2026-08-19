declare module 'nodemailer' {
  export interface Transporter {
    sendMail(mailOptions: Record<string, unknown>): Promise<unknown>
  }

  export function createTransport(config: Record<string, unknown>): Transporter
}
