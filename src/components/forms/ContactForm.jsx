"use client";
import React from "react";
import { Form, Input, Button } from "antd";

const { Item } = Form;

const ContactForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
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
                message: "Please input your first name!",
              },
              {
                type: "string",
                min: 2,
                max: 50,
                message: "First name must be between 2 and 50 characters",
              },
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
                message: "Please input your last name!",
              },
              {
                type: "string",
                min: 2,
                max: 50,
                message: "Last name must be between 2 and 50 characters",
              },
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
              message: "Please input your email!",
            },
            {
              type: "email",
              required: true,
              message: "Please enter a valid email!",
            },
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
              message: "Please input your phone number!",
            },
            {
              type: "string",
              pattern: /^[0-9]{11}$/,
              required: true,
              message: "Please enter a valid phone number (11 digits)!",
            },
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
              message: "Please input your message!",
            },
            {
              type: "string",
              min: 10,
              max: 200,
              message: "Message must be between 10 and 200 characters",
            },
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
        <button
          className="contained-submit-button w-full mt-3"
          type="primary"
          htmlType="submit"
        >
          Submit
        </button>
      </Item>
    </Form>
  );
};

export default ContactForm;
