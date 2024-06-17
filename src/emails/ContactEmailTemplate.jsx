import * as React from 'react';

import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Text
} from '@react-email/components';

export const ContactEmailTemplate = ({
	firstName,
	lastName,
	email,
	phoneNumber,
	message
}) => {
	return (
		<Html>
			<Head />
			<Preview>New Contact Request</Preview>
			<Body style={main}>
				<Container>
					<Section style={logoContainer}>
						<Img
							style={logo}
							src={
								'https://res.cloudinary.com/djgd5ntwd/image/upload/v1718608692/email-header.jpg'
							}
						/>
					</Section>

					<Section style={content}>
						<Row style={boxInfos}>
							<Column>
								<Heading
									style={{
										fontSize: 32,
										fontWeight: 'bold',
										textAlign: 'center'
									}}
								>
									Hello Admin
								</Heading>
								<Heading
									style={{
										fontSize: 22,
										fontWeight: 'semibold',
										textAlign: 'center'
									}}
								>
									Someone is trying to contact you
								</Heading>

								<Text style={paragraph}>
									<b>First Name: </b>
									{firstName}
								</Text>
								<Text style={{ ...paragraph, marginTop: 20 }}>
									<b>Last Name: </b>
									{lastName}
								</Text>
								<Text style={{ ...paragraph, marginTop: 20 }}>
									<b>Email: </b>
									{email}
								</Text>
								<Text style={{ ...paragraph, marginTop: 20 }}>
									<b>Phone Number: </b>
									{phoneNumber}
								</Text>
								<Text style={{ ...paragraph, marginTop: 20 }}>
									<b>Message: </b>
									{message}
								</Text>

								<Text style={paragraph}>
									Please follow up with the user as soon as possible.
								</Text>
							</Column>
						</Row>
					</Section>

					<Text
						style={{
							textAlign: 'center',
							fontSize: 12,
							color: 'rgb(0,0,0, 0.7)'
						}}
					>
						© 2024 | Sirat-Al-Mustaqeem | www.samhdc.com
					</Text>
				</Container>
			</Body>
		</Html>
	);
};

export default ContactEmailTemplate;

const main = {
	backgroundColor: '#fff',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const paragraph = {
	fontSize: 16
};

const logoContainer = {
	border: '1px solid rgb(0,0,0, 0.1)',
	maxWidth: '100%'
};
const logo = {
	MdHeight: 'auto',
	width: '100%'
};

const content = {
	border: '1px solid rgb(0,0,0, 0.1)',
	borderTop: 'none',
	overflow: 'hidden',
	backgroundColor: '#f8fde9'
};

const boxInfos = {
	padding: '20px 40px'
};
