'use client';

import { Form, Input, Upload } from 'antd';
import { GrCloudUpload } from 'react-icons/gr';

const { Item } = Form;

const CareerForm = () => {
	const onFinish = values => {
		console.log('Received values:', values);
	};

	const normFile = e => {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	return (
		<Form
			//   initialValues={{
			//     remember: true,
			//   }}
			onFinish={onFinish}
			className="space-y-3 w-full"
		>
			<div className="grid md:grid-cols-2 gap-10">
				<div className="space-y-1">
					<p className="text-custom8">First Name</p>
					<Item
						name="firstName"
						rules={[
							{
								required: true,
								message: 'Please input your first name!'
							},
							{
								type: 'string',
								min: 2,
								max: 50,
								message: 'First name must be between 2 and 50 characters'
							}
						]}
					>
						<Input placeholder="First Name" size="large" />
					</Item>
				</div>

				<div className="space-y-1">
					<p className="text-custom8">Last Name</p>
					<Item
						name="lastName"
						rules={[
							{
								required: true,
								message: 'Please input your last name!'
							},
							{
								type: 'string',
								min: 2,
								max: 50,
								message: 'Last name must be between 2 and 50 characters'
							}
						]}
					>
						<Input placeholder="Last Name" size="large" />
					</Item>
				</div>
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
							required: true,
							message: 'Please enter a valid email!'
						}
					]}
				>
					<Input placeholder="example@mail.com" size="large" />
				</Item>
			</div>

			<div className="space-y-1">
				<p className="text-custom8"> Phone Number</p>
				<Item
					name="phoneNumber"
					rules={[
						{
							required: true,
							message: 'Please input your phone number!'
						},
						{
							type: 'string',
							pattern: /^[0-9]{11}$/,
							required: true,
							message: 'Please enter a valid phone number (11 digits)!'
						}
					]}
				>
					<Input placeholder="Enter Number" size="large" />
				</Item>
			</div>

			<div className="space-y-1">
				<p className="text-custom8">Upload Resume</p>
				<Item
					name="resume"
					valuePropName="fileList"
					getValueFromEvent={normFile}
					rules={[
						{
							required: true,
							message: 'Please upload your resume!'
						}
					]}
				>
					<Upload
						name="resume"
						accept=".pdf,.doc,.docx"
						maxCount={1}
						beforeUpload={() => false}
					>
						<div className="bg-[#faffd7] border border-dashed text-[#191D23] border-custom2 w-full p-5 rounded-md text-center flex flex-col items-center">
							<GrCloudUpload className="text-2xl" />
							<p className="">
								Browse and chose the files you want to upload from your computer
							</p>
						</div>
					</Upload>
				</Item>
			</div>

			<Item>
				<button
					className="contained-submit-button w-full mt-3"
					type="primary"
					// htmlType="submit"
				>
					Submit
				</button>
			</Item>
		</Form>
	);
};

export default CareerForm;
