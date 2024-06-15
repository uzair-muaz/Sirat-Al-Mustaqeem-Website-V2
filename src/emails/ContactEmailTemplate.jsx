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
								'https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-6/369848169_141486555676316_4967025280396855132_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y3TiwNATYzQQ7kNvgGtN9rF&_nc_ht=scontent.fisb13-1.fna&oh=00_AYBKExYblJYI1vD1MRSEdKSdM1D2xl4xY2-kC72voS2Xfg&oe=666E92D7'
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
