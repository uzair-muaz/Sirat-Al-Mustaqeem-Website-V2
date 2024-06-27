import React from 'react';

import Image from 'next/image';

const Hero = ({ title }) => {
	return (
		<div className="w-full">
			<div
				className="w-full h-[300px] md:h-[530px] lg:[700px]  relative"
				// style={{
				// 	background: `url('/website-assets/hero-image-1.jpg')`,
				// 	backgroundRepeat: 'no-repeat',
				// 	backgroundSize: 'cover'
				// }}
			>
				<Image
					priority={true}
					src={'/website-assets/hero-image-4.jpg'}
					alt="hero-image"
					objectFit="cover"
					layout="fill"
					objectPosition="85% 15%"
					className="z-0"
				/>
				<div className="relative bg-gradient-to-t from-custom2 via-[#00000033] to-[#00000033] h-full">
					<div
						data-aos="fade-up"
						className="sm:container sm:mx-auto flex flex-col items-center justify-center px-6 gap-8 text-white h-full pt-20 pb-7"
					>
						<h1 className="text-3xl md:text-5xl md:leading-snug capitalize font-bold">
							{title}
						</h1>
						<div className="flex items-center gap-3">
							<p className="opacity-65">Home </p>
							<div className="h-8 w-[1px] bg-white" />
							<p className="text-custom3 capitalize">{title}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
