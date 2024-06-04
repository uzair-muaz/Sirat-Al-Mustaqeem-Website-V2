import { Inter } from 'next/font/google';

import { ConfigProvider } from 'antd';

import { AOSInit } from '@/components/website/common/AOSInit';
import { FloatingButtons } from '@/components/website/common/FloatingButtons';
import Navbar from '@/components/website/common/Navbar';

import './globals.css';
import './main.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sirat-Al-Mustaqeem',
	description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
	const theme = {
		token: {
			colorPrimary: '#69AA8A'
		}
	};

	return (
		<html lang="en">
			<AOSInit />
			<body className={inter.className}>
				<Navbar />
				<div className="relative">
					<FloatingButtons />
					<ConfigProvider theme={theme}>{children}</ConfigProvider>
				</div>
			</body>
		</html>
	);
}
