'use client';

import { Form, Input, Select } from 'antd';

const { Item } = Form;
const { Option } = Select;

const AdmissionForm = () => {
	const onFinish = values => {
		console.log('Received values:', values);
	};

	return (
		<Form onFinish={onFinish} className="space-y-3 w-full">
			<div className="grid md:grid-cols-2 gap-3 md:gap-10">
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

			<div className="grid md:grid-cols-2 gap-3 md:gap-10">
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
						<Option value="grade1">Grade 1</Option>
						<Option value="grade2">Grade 2</Option>
						<Option value="grade3">Grade 3</Option>
						{/* Add more options as needed */}
					</Select>
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

export default AdmissionForm;
