'use client';

import { useCallback, useRef } from 'react';

import Image from 'next/image';

import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
	const ImagesData = [
		'/website-assets/hero-image-1.jpg',
		'/website-assets/hero-image-2.jpg',
		'/website-assets/hero-image-3.jpg',
		'/website-assets/hero-image-4.jpg',
		'/website-assets/hero-image-5.jpg'
	];

	const sliderRef = useRef(null);

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	const buttonStyle =
		'text-white text-lg rounded-full p-2 cursor-pointer border hover:text-[#fbbf11] hover:border-[#fbbf11] transition-all duration-700';

	return (
		<div className="w-full">
			<Swiper
				ref={sliderRef}
				freeMode={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				modules={[FreeMode, Autoplay]}
			>
				{ImagesData.map((item, index) => (
					<SwiperSlide key={`hero-${index}`}>
						<div className="w-full md:h-[875px] lg:h-screen bg-gradient-to-r from-custom2 to-transparent relative">
							<Image
								priority={true}
								src={item}
								alt="hero-image"
								objectFit="cover"
								layout="fill"
								objectPosition="center"
								className="z-0"
								quality={100}
							/>
							<div className="bg-gradient-to-r from-custom2 via-transparent h-full relative z-1">
								<div className="sm:container sm:mx-auto flex flex-col justify-center px-6 gap-8 text-white h-full pt-20 pb-7">
									<h1
										data-aos="fade-down"
										className="text-3xl md:text-5xl md:leading-snug capitalize font-bold"
									>
										Welcome to <br /> sirat al <br /> mustaqeem
									</h1>
									<p data-aos="fade-down">
										We offer the best education experience in the triad.
									</p>
									<button
										data-aos="fade-up"
										className="capitalize border border-custom6 rounded-lg w-fit h-10 px-4"
									>
										learn more
									</button>
									<div data-aos="fade-up" className="flex gap-4">
										<button className={buttonStyle} onClick={handlePrev}>
											<BsArrowLeft />
										</button>
										<button className={buttonStyle} onClick={handleNext}>
											<BsArrowRight />
										</button>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{/* <div className='swiper-pagination' /> */}
		</div>
	);
};

export default Hero;
