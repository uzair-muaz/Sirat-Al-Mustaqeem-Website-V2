import { Resend } from 'resend';

import AdmissionEmailTemplate from '@/emails/AdmissionEmailTemplate';

const resend = new Resend(`${process.env.NEXT_PUBLIC_RESEND_API_KEY}`);

export async function POST(request) {
	try {
		let payload = await request.json();
		const { studentName, guardianName, age, gender, email, phone, grade } =
			payload;

		const { data, error } = await resend.emails.send({
			from: `${process.env.NEXT_PUBLIC_FROM_EMAIL}`,
			to: [`${process.env.NEXT_PUBLIC_TO_EMAIL}`],
			subject: `New Admission Request From ${guardianName}!`,
			react: (
				<AdmissionEmailTemplate
					studentName={studentName}
					guardianName={guardianName}
					age={age}
					gender={gender}
					email={email}
					phone={phone}
					grade={grade}
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
