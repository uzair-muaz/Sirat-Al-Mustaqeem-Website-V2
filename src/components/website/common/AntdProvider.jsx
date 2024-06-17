'use client';

import React from 'react';

import { ConfigProvider } from 'antd';

import { StyleProvider } from '@ant-design/cssinjs';

const AntdProvider = ({ children }) => {
	const theme = {
		token: {
			colorPrimary: '#69AA8A'
		}
	};

	return (
		<StyleProvider hashPriority="high">
			<ConfigProvider theme={theme} hashPriority="high">
				{children}
			</ConfigProvider>
		</StyleProvider>
	);
};

export default AntdProvider;
