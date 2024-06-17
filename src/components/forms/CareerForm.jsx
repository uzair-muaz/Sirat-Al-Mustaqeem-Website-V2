'use client';

import { useState } from 'react';

import { Button, Form, Input, Upload, message } from 'antd';
import axios from 'axios';
import { GrCloudUpload } from 'react-icons/gr';

const { Item } = Form;

const CareerForm = () => {
	const [form] = Form.useForm();
	const [resume, setResume] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const onFinish = async values => {
		setIsLoading(true);
		try {
			const formData = new FormData();
			formData.set('fileToUpload', resume);

			// Upload file to Cloudinary
			const uploadResponse = await axios.post('/api/upload-file', formData);

			// Send email with career application details and resume URL
			const emailResponse = await axios.post('/api/send-email/career', {
				...values,
				resume: uploadResponse.data.fileURL
			});

			if (emailResponse) {
				form.resetFields();
				message.success(
					`Thank you for your interest! We will get back to you soon!`
				);
			} else {
				message.error('Apologies! Please try again.');
			}
		} catch (error) {
			message.error('Ooops! Unfortunately, some error has occurred.');
		} finally {
			setIsLoading(false);
		}
	};

	const beforeUpload = file => {
		const isPDF = file.type === 'application/pdf';
		if (!isPDF) {
			return false;
		}
		setResume(file);
		return isPDF || Upload.LIST_IGNORE;
	};

	// const uploadProps = {
	// 	multiple: false,
	// 	maxCount: 1,
	// 	accept: '.pdf',
	// 	beforeUpload: file => {
	// 		const isPDF = file.type === 'application/pdf';
	// 		if (!isPDF) {
	// 			alert('You can only upload PDF files!');
	// 		}
	// 		return isPDF || Upload.LIST_IGNORE;
	// 	}
	// };

	return (
		<Form
			form={form}
			onFinish={onFinish}
			className="space-y-3 w-full"
			size="large"
		>
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
				<p className="text-custom8">Education</p>
				<Item
					name="education"
					rules={[
						{
							required: true,
							message: 'Please input your education!'
						}
					]}
				>
					<Input placeholder="Education" />
				</Item>
			</div>

			<div className="space-y-1">
				<p className="text-custom8">Why do you want to join?</p>
				<Item
					name="whyJoin"
					rules={[
						{
							required: true,
							message: 'Please input why you want to join!'
						}
					]}
				>
					<Input.TextArea placeholder="Why do you want to join?" />
				</Item>
			</div>

			<div className="space-y-1">
				<p className="text-custom8">Experience</p>
				<Item
					name="experience"
					rules={[
						{
							required: true,
							message: 'Please input your experience!'
						}
					]}
				>
					<Input.TextArea placeholder="Experience" />
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
					<Upload
						accept=".pdf"
						beforeUpload={beforeUpload}
						multiple={false}
						maxCount={1}
						// onChange={handleFileChange}
					>
						<div
							style={{ border: '1.5px dashed #13824B' }}
							className="flex flex-col gap-2 items-center justify-center bg-[#FAFFD7] h-[120px] rounded-lg px-4 text-center"
						>
							<GrCloudUpload className="text-2xl" />
							<h1>
								Browse and choose the files you want to upload from your
								computer
							</h1>
						</div>
					</Upload>
				</Item>
			</div>

			<Item>
				<Button
					type="primary"
					loading={isLoading}
					htmlType="submit"
					className="w-full mt-3"
				>
					Submit
				</Button>
			</Item>
		</Form>
	);
};

export default CareerForm;
