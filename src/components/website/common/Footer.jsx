'use client';

import Link from 'next/link';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';
import { HiMiniEnvelope } from 'react-icons/hi2';
import { HiPhone } from 'react-icons/hi2';
import { IoLogoWhatsapp } from 'react-icons/io';

import { navLinks } from '@/utils/website/constants';

const Footer = () => {
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
		} else if (value === 'youtube') {
			window.open('https://www.youtube.com/@SiratAlMustaqeemAcademy', '_blank');
		}
	};

	return (
		<footer>
			<div className="bg-[#1C2B26] rounded-t-3xl text-white relative min-h-[433px] flex flex-col gap-5">
				<img
					src="/website-assets/element-1.svg"
					alt="element"
					className="object-center absolute top-0 left-0"
				/>
				<img
					src="/website-assets/element-2.svg"
					alt="element"
					className="object-contain absolute bottom-0 right-0"
				/>
				<div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2  w-48 h-48 border border-custom6 p-2 rounded-full">
					<div className="border border-custom5 bg-custom1 rounded-full h-full w-full flex items-center justify-center">
						<img
							src="/website-assets/footer-logo.svg"
							alt="logo"
							className="object-contain "
						/>
					</div>
				</div>

				<div className="sm:container mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 flex-1 mt-36 w-full pb-5">
					{/* Get In Touch */}
					<div className="flex flex-col gap-3  mx-auto w-full md:w-fit">
						<h4 className="font-semibold ">Contact Us</h4>
						<ul className="space-y-5">
							<li className="flex items-center gap-3">
								<HiMiniEnvelope className="text-2xl" />{' '}
								institutealfajr@gmail.com
							</li>
							<li className="flex items-center gap-3">
								<HiPhone className="text-2xl" /> 0302-5019924 (School Head)
							</li>
							<li className="flex items-center gap-3">
								<IoLogoWhatsapp className="text-2xl" /> 0333-1100786 (HR)
							</li>
							<li className="sm:hidden flex items-center gap-3">
								<HiLocationMarker className="text-2xl" /> Free Quran Education
								Centre Rawalpindi
							</li>
						</ul>
					</div>

					{/* Site Links */}
					<div className="flex flex-col gap-3  mx-auto w-full md:w-fit ">
						<h4 className="font-semibold">Site Links</h4>
						<ul className="flex flex-col space-y-2">
							{navLinks.map(link => (
								<Link key={link.route} href={link.route} legacyBehavior>
									<a className={`text-sm hover:text-custom3 text-white`}>
										{link.label}
									</a>
								</Link>
							))}
						</ul>
					</div>
					<div className="flex flex-col gap-3  mx-auto w-full md:w-fit">
						<h4 className="font-semibold">Connect</h4>
						<ul className="space-y-2">
							<li
								onClick={() => handleRedirect('facebook')}
								className="flex items-center gap-3 footer-socials hover:text-custom3 cursor-pointer"
							>
								<span className="text-md p-2 rounded-full border animate-icon hover:border-custom3 ">
									<FaFacebookF />
								</span>{' '}
								Facebook
							</li>
							<li
								onClick={() => handleRedirect('instagram')}
								className="flex items-center gap-3 footer-socials hover:text-custom3 cursor-pointer"
							>
								<span className="text-md p-2 rounded-full border animate-icon hover:border-custom3 ">
									<FaInstagram />
								</span>{' '}
								Instagram
							</li>
							<li
								onClick={() => handleRedirect('whatsapp')}
								className="flex items-center gap-3 footer-socials hover:text-custom3 cursor-pointer"
							>
								<span className="text-md p-2 rounded-full border animate-icon hover:border-custom3 ">
									<FaWhatsapp />
								</span>{' '}
								Whatsapp
							</li>
							<li
								onClick={() => handleRedirect('youtube')}
								className="flex items-center gap-3 footer-socials hover:text-custom3 cursor-pointer"
							>
								<span className="text-md p-2 rounded-full border animate-icon hover:border-custom3 ">
									<FaYoutube />
								</span>{' '}
								Youtube
							</li>
						</ul>
					</div>
					<div className="hidden sm:flex flex-col gap-3  mx-auto w-full md:w-fit">
						<h4 className="font-semibold ">Where To Find Us</h4>
						<p className="flex gap-3">
							<HiLocationMarker className="text-2xl" />
							Free Quran Education Centre Rawalpindi
						</p>
					</div>
				</div>

				<div className=" w-[90%] mx-auto py-8 flex items-center justify-center border-t border-white">
					<h2 className="text-center text-xs sm:text-sm ">
						Copyright © 2024 Sirat-Al-Mustaqeem | All Rights Reserved
					</h2>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
