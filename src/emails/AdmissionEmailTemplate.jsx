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

export const AdmissionEmailTemplate = ({
	studentName,
	guardianName,
	age,
	gender,
	email,
	phone,
	grade
}) => {
	return (
		<Html>
			<Head />
			<Preview>New Admission</Preview>
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
									New Admission Request
								</Heading>
								<Text style={paragraph}>
									<b>Student Name: </b>
									{studentName}
								</Text>
								<Text style={paragraph}>
									<b>Guardian Name: </b>
									{guardianName}
								</Text>
								<Text style={paragraph}>
									<b>Student Age: </b>
									{age}
								</Text>
								<Text style={paragraph}>
									<b>Student Gender: </b>
									{gender}
								</Text>
								<Text style={paragraph}>
									<b>Guardian Email: </b>
									{email}
								</Text>
								<Text style={paragraph}>
									<b>Guardian Phone: </b>
									{phone}
								</Text>
								<Text style={paragraph}>
									<b>Grade Applying For: </b>
									{grade}
								</Text>
							</Column>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default AdmissionEmailTemplate;

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
