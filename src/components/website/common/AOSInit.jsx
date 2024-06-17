'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
	const pathname = usePathname();

	const initializeAOS = () => {
		AOS.init({
			disable: function () {
				var maxWidth = 1024;
				return window.innerWidth < maxWidth;
			},
			easing: 'ease-out-quad',
			duration: 2000,
			once: true
		});
		AOS.refresh(); // Ensure AOS re-applies to all elements
	};

	useEffect(() => {
		initializeAOS();
	}, [pathname]);

	return null;
};

export default AOSInit;
