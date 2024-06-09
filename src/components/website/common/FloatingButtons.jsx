'use client';

import { useState } from 'react';

import {
	FaChevronDown,
	FaChevronUp,
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
	FaYoutube
} from 'react-icons/fa6';

export const FloatingButtons = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	const handleRedirect = value => {
		if (value === 'whatsapp') {
			window.open(`https://wa.me/${'923331100786'}`, '_blank');
		} else if (value === 'facebook') {
			window.open(
				' https://www.facebook.com/SiratalMustaqeemAcademy?mibextid=ZbWKwL',
				'_blank'
			);
		} else if (value === 'instagram') {
			window.open(
				'https://www.instagram.com/siratalmustaqeem_academy/?igsh=MWZ5cDQwbWY4aHVkaQ%3D%3D',
				'_blank'
			);
		}
	};
	return (
		<div>
			<ul
				className={`fixed  bottom-16 right-4 md:bottom-10 md:right-8 space-y-2 z-50 ${isCollapsed ? 'collapsed' : 'expanded'}`}
			>
				<li className="icon-container footer-socials facebook">
					<span
						className="icon facebook"
						onClick={() => handleRedirect('facebook')}
					>
						<FaFacebookF />
					</span>
				</li>
				<li className="icon-container footer-socials instagram">
					<span
						className="icon instagram"
						onClick={() => handleRedirect('instagram')}
					>
						<FaInstagram />
					</span>
				</li>
				{/* <li className="icon-container footer-socials youtube">
					<span
						className="icon youtube"
						onClick={() => handleRedirect('youtube')}
					>
						<FaYoutube />
					</span>
				</li> */}
				<li className="icon-container footer-socials whatsapp">
					<span
						className="icon whatsapp"
						onClick={() => handleRedirect('whatsapp')}
					>
						<FaWhatsapp />
					</span>
				</li>
			</ul>
			<button
				className="toggle-button fixed bottom-10 right-8 z-50 p-2 bg-gray-700 text-white rounded-full"
				onClick={toggleCollapse}
			>
				{isCollapsed ? <FaChevronUp /> : <FaChevronDown />}
			</button>
		</div>
	);
};
