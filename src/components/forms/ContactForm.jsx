'use client';

import React, { useState } from 'react';

import { Button, Form, Input, message } from 'antd';
import axios from 'axios';

const { Item } = Form;

const ContactForm = () => {
	const [form] = Form.useForm();
	const [isLoading, setIsLoading] = useState(false);
	const onFinish = async values => {
		setIsLoading(true);
		try {
			const response = await axios.post('/api/send-email/contact', {
				...values
			});

			const data = response.data;

			if (data && data.id) {
				form.resetFields();
				message.success(
					`Thank you for your interest! We will get back to you soon!`
				);
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
			//   initialValues={{
			//     remember: true,
			//   }}
			onFinish={onFinish}
			className="space-y-3 w-full mt-9"
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
				<p className="text-custom8">Message</p>
				<Item
					name="message"
					rules={[
						{
							required: true,
							message: 'Please input your message!'
						},
						{
							type: 'string',
							min: 10,
							max: 200,
							message: 'Message must be between 10 and 200 characters'
						}
					]}
				>
					<Input.TextArea
						placeholder="Leave us a message..."
						size="large"
						rows={4}
					/>
				</Item>
			</div>

			<Item>
				<Button
					type="primary"
					loading={isLoading}
					htmlType="submit"
					className="contained-submit-button w-full mt-3"
				>
					Submit
				</Button>
			</Item>
		</Form>
	);
};

export default ContactForm;
