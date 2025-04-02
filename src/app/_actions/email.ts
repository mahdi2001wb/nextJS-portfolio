'use server'

import { env } from '@shared/env'
import { Resend } from 'resend'

import { ContactFormEmail } from '@components/email/contact'

const resend = new Resend(env.RESEND_API_KEY)

const CONTACT_EMAIL = 'mahsiimam0@gmail.com'
export async function sendEmail(input: Email) {
	const { email, subject, message, name } = input
	const { data, error } = await resend.emails.send({
		from: `Imam Mahdi <${CONTACT_EMAIL}>`,
		to: [email],
		subject,
		react: ContactFormEmail({
			name,
			subject,
			email,
			message,
		}),
		replyTo: [CONTACT_EMAIL],
		headers: {
			'x-contact-name': name,
			'x-developer-email': email,
		},
	})

	if (error) {
		return {
			success: false,
			data: error.message,
		}
	}
	return {
		success: true,
		data,
	}
}
