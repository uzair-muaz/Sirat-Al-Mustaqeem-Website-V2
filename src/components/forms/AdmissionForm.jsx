'use client';

import { useState } from 'react';

import { Button, Form, Input, Select, message } from 'antd';
import axios from 'axios';

const { Item } = Form;
const { Option } = Select;

const AdmissionForm = () => {
	const [form] = Form.useForm();
	const [isLoading, setIsLoading] = useState(false);
	const onFinish = async values => {
		setIsLoading(true);
		try {
			const response = await axios.post('/api/send-email/admission', {
				...values
			});

			const data = response.data;

			if (data && data.id) {
				message.success(
					`Thank you for your interest! We will get back to you soon!`
				);
				form.resetFields();
			} else {
				message.error('Apologies! Please try again.');
			}
		} catch (error) {
			message.error('Ooops! unfortunately some error has occurred.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form
			form={form}
			onFinish={onFinish}
			size="large"
			className="space-y-3 w-full"
		>
			<div className="grid md:grid-cols-2 gap-3 md:gap-5">
				<div className="space-y-1">
					<p className="text-custom8">Student Name</p>
					<Item
						name="studentName"
						rules={[
							{
								required: true,
								message: 'Please input the student name!'
							}
						]}
					>
						<Input placeholder="Student Name" size="large" />
					</Item>
				</div>

				<div className="space-y-1">
					<p className="text-custom8">Guardian Name</p>
					<Item
						name="guardianName"
						rules={[
							{
								required: true,
								message: 'Please input the guardian name!'
							}
						]}
					>
						<Input placeholder="Guardian Name" size="large" />
					</Item>
				</div>
			</div>

			<div className="grid md:grid-cols-2 gap-3 md:gap-5">
				<div className="space-y-1">
					<p className="text-custom8">Age</p>
					<Item
						name="age"
						rules={[
							{
								required: true,
								message: 'Please input the age!'
							}
						]}
					>
						<Input placeholder="Age" size="large" />
					</Item>
				</div>

				<div className="space-y-1">
					<p className="text-custom8">Gender</p>
					<Item
						name="gender"
						rules={[
							{
								required: true,
								message: 'Please select the gender!'
							}
						]}
					>
						<Select
							popupClassName="hello"
							placeholder="Select Gender"
							size="large"
							className="custom-select"
							dropdownStyle={{ backgroundColor: '#f1f5da' }}
						>
							<Option value="male">Male</Option>
							<Option value="female">Female</Option>
							<Option value="other">Other</Option>
						</Select>
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
							message: 'Please enter a valid email!'
						}
					]}
				>
					<Input type="email" placeholder="example@mail.com" size="large" />
				</Item>
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
					<Input type="tel" placeholder="Phone Number" size="large" />
				</Item>
			</div>

			<div className="space-y-1">
				<p className="text-custom8">Grade Applying For</p>
				<Item
					name="grade"
					rules={[
						{
							required: true,
							message: 'Please select the grade applying for!'
						}
					]}
				>
					<Select
						placeholder="Select Grade"
						size="large"
						className="custom-select"
						dropdownStyle={{ backgroundColor: '#f1f5da' }}
					>
						<Option value="FY-1">FY-1</Option>
						<Option value="FY-2">FY-2</Option>
						<Option value="FY-3">FY-3</Option>
						<Option value="Level 1">Level 1</Option>
						<Option value="Level 2">Level 2</Option>
						<Option value="Level 3">Level 3</Option>
					</Select>
				</Item>
			</div>

			<Item>
				<Button
					loading={isLoading}
					className="contained-submit-button w-full mt-3"
					type="primary"
					htmlType="submit"
				>
					Submit
				</Button>
			</Item>
		</Form>
	);
};

export default AdmissionForm;
