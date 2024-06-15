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
