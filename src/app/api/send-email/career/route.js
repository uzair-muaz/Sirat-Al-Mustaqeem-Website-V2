import { Resend } from 'resend';

import CareerEmailTemplate from '@/emails/CareerEmailTemplate';

const resend = new Resend(`${process.env.NEXT_PUBLIC_RESEND_API_KEY}`);

export async function POST(request) {
	try {
		let payload = await request.json();

		const {
			firstName,
			lastName,
			phone,
			email,
			education,
			whyJoin,
			experience,
			resume
		} = payload;

		const { data, error } = await resend.emails.send({
			from: `${process.env.NEXT_PUBLIC_FROM_EMAIL}`,
			to: [`${process.env.NEXT_PUBLIC_TO_EMAIL}`],
			subject: `Career Form Request - ${firstName} ${lastName}`,
			react: (
				<CareerEmailTemplate
					firstName={firstName}
					lastName={lastName}
					email={email}
					phone={phone}
					education={education}
					experience={experience}
					whyJoin={whyJoin}
					resume={resume}
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
