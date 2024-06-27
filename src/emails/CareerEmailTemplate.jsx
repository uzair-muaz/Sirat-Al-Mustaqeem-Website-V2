import * as React from 'react';

import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text
} from '@react-email/components';

export const CareerEmailTemplate = ({
	firstName,
	lastName,
	phone,
	email,
	education,
	whyJoin,
	experience,
	resume
}) => {
	return (
		<Html>
			<Head />
			<Preview>New Career Application</Preview>
			<Body style={main}>
				<Container>
					<Section style={logoContainer}>
						<Img
							style={logo}
							src={
								'https://res.cloudinary.com/ddou9lqzj/image/upload/v1719413411/email-header_qdiha2.jpg'
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
									New Career Application
								</Heading>
								<Text style={paragraph}>
									<b>First Name: </b>
									{firstName}
								</Text>
								<Text style={paragraph}>
									<b>Last Name: </b>
									{lastName}
								</Text>
								<Text style={paragraph}>
									<b>Phone: </b>
									{phone}
								</Text>
								<Text style={paragraph}>
									<b>Email: </b>
									<span style={linkStyle}>{email}</span>
								</Text>
								<Text style={paragraph}>
									<b>Education: </b>
									{education}
								</Text>
								<Text style={paragraph}>
									<b>Why do you want to join? </b>
									{whyJoin}
								</Text>
								<Text style={paragraph}>
									<b>Experience: </b>
									{experience}
								</Text>
								<Text style={paragraph}>
									<b>Resume: </b>
									<Link
										href={resume}
										style={linkStyle}
										target="_blank"
										download
									>
										{resume}
									</Link>
								</Text>
							</Column>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default CareerEmailTemplate;

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

const linkStyle = {
	color: '#15c',
	textDecoration: 'underline'
};
