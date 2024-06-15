import { Resend } from 'resend';

import ContactEmailTemplate from '@/emails/ContactEmailTemplate';

const resend = new Resend(`${process.env.NEXT_PUBLIC_RESEND_API_KEY}`);

export async function POST(request) {
	try {
		let payload = await request.json();
		const { firstName, lastName, email, phoneNumber, message } = payload;

		const { data, error } = await resend.emails.send({
			from: `${process.env.NEXT_PUBLIC_FROM_EMAIL}`,
			to: [`${process.env.NEXT_PUBLIC_TO_EMAIL}`],
			subject: `Contact Request - ${firstName} ${lastName}`,
			react: (
				<ContactEmailTemplate
					firstName={firstName}
					lastName={lastName}
					email={email}
					phoneNumber={phoneNumber}
					message={message}
				/>
			)
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
