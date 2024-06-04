'use client';

import { Button, Form, Input, Select, Upload } from 'antd';
import { GrCloudUpload } from 'react-icons/gr';

const { Item } = Form;
const { Option } = Select;

const CareerForm = () => {
	const onFinish = values => {
		console.log('Received values:', values);
	};

	const uploadProps = {
		multiple: false,
		maxCount: 1,
		accept: '.pdf',
		beforeUpload: file => {
			// You can add file validation logic here
			const isPDF = file.type === 'application/pdf';
			if (!isPDF) {
				alert('You can only upload PDF files!');
			}
			return isPDF || Upload.LIST_IGNORE;
		}
	};

	return (
		<Form onFinish={onFinish} className="space-y-3 w-full" size="large">
			<div className="grid md:grid-cols-2 gap-10">
				<div className="space-y-1">
					<p className="text-custom8">First Name</p>
					<Item
						name="firstName"
						rules={[
							{
								required: true,
								message: 'Please input the first name!'
							}
						]}
					>
						<Input placeholder="Student Name" />
					</Item>
				</div>

				<div className="space-y-1">
					<p className="text-custom8">Last Name</p>
					<Item
						name="lastName"
						rules={[
							{
								required: true,
								message: 'Please input the last name!'
							}
						]}
					>
						<Input placeholder="Last Name" />
					</Item>
				</div>
			</div>

			<div className="space-y-1">
				<p className="text-custom8">Phone</p>
				<Item
					name="phone"
					rules={[
						{
							required: true,
							message: 'Please input the phone number!'
						}
					]}
				>
					<Input type="tel" placeholder="Phone Number" />
				</Item>
			</div>

			<div className="space-y-1">
				<p className="text-custom8">Email</p>
				<Item
					name="email"
					rules={[
						{
							required: true,
							message: 'Please input your email!'
						},
						{
							type: 'email',
							message: 'Please enter a valid email!'
						}
					]}
				>
					<Input type="email" placeholder="example@mail.com" />
				</Item>
			</div>

			<div className="space-y-1">
				<p className="text-custom8">Upload Resume</p>
				<Item
					name="resume"
					rules={[
						{
							required: true,
							message: 'Please upload your resume!'
						}
					]}
				>
					<Upload {...uploadProps}>
						<div
							style={{ border: '1.5px dashed #13824B' }}
							className="flex flex-col gap-2 items-center justify-center bg-[#FAFFD7] h-[120px] rounded-lg px-4 text-center"
						>
							<GrCloudUpload className="text-2xl" />
							<h1>
								Browse and chose the files you want to upload from your computer
							</h1>
						</div>
					</Upload>
				</Item>
			</div>

			<Item>
				<button className="contained-submit-button w-full mt-3" type="primary">
					Submit
				</button>
			</Item>
		</Form>
	);
};

export default CareerForm;
