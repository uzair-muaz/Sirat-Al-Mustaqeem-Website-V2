'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Modal } from 'antd';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { eventsArray } from '@/utils/website/constants/events';

const RecentEvents = () => {
	const sliderRef = useRef(null);
	const [openModal, setOpenModal] = useState(false);
	const [modalImages, setModalImages] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [screenWidth, setScreenWidth] = useState(1024);

	const itemsPerPage = {
		sm: 1,
		md: 2,
		lg: 3
	};

	useEffect(() => {
		const calScreenWidth = window.innerWidth;
		setScreenWidth(calScreenWidth);
	}, []);

	const getScreenSize = () => {
		if (screenWidth >= 1024) return 'lg'; // large
		if (screenWidth >= 768) return 'md'; // medium
		return 'sm'; // small
	};

	const handlePrev = () => {
		setCurrentIndex(prevIndex =>
			prevIndex - itemsPerPage[getScreenSize()] >= 0
				? prevIndex - itemsPerPage[getScreenSize()]
				: eventsArray.length - itemsPerPage[getScreenSize()]
		);
	};

	const handleNext = () => {
		setCurrentIndex(prevIndex =>
			prevIndex + itemsPerPage[getScreenSize()] < eventsArray.length
				? prevIndex + itemsPerPage[getScreenSize()]
				: 0
		);
	};

	const handleModalPrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleModalNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	const handleOpenModal = modalData => {
		setOpenModal(true);
		setModalImages(modalData);
	};

	const buttonStyle =
		'text-[#fbbf11] text-lg rounded-full p-2 cursor-pointer border border-[#fbbf11] hover:text-black hover:bg-[#fbbf11] transition-all duration-700';

	return (
		<div data-aos="fade-right" className="py-10 w-full">
			<div className="sm:container sm:mx-auto px-6 flex flex-col justify-center items-center">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">
					Pictures
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center">
					Recent Events
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />

				<div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-16 gap-10">
					{eventsArray
						.slice(currentIndex, currentIndex + itemsPerPage[getScreenSize()])
						.map(event => (
							<EventCard
								{...event}
								key={`event-${event.title}`}
								handleOpenModal={handleOpenModal}
							/>
						))}
				</div>
				<div className="flex justify-center gap-4 mt-10">
					<button className={buttonStyle} onClick={handlePrev}>
						<PiCaretLeftBold />
					</button>
					<button className={buttonStyle} onClick={handleNext}>
						<PiCaretRightBold />
					</button>
				</div>
			</div>

			<Modal
				width={900}
				footer={null}
				closeIcon={null}
				open={openModal}
				centered={true}
				onCancel={() => {
					setOpenModal(false);
				}}
				className="testing"
			>
				<div className="hidden sm:block">
					<Swiper
						ref={sliderRef}
						freeMode={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false
						}}
						modules={[FreeMode, Autoplay]}
					>
						{modalImages.map((image, index) => (
							<SwiperSlide key={`hero-${index}`}>
								<>
									<button
										className={`${buttonStyle} absolute top-[10px] right-[10px]`}
										onClick={() => {
											setOpenModal(false);
										}}
									>
										<IoMdClose className="" />
									</button>
									<img
										src={image}
										alt={`event-image-${index}`}
										className="rounded-lg w-full lg:h-[600px] object-cover"
									/>
									<button
										className={`${buttonStyle} absolute top-1/2 left-[10px]`}
										onClick={handleModalPrev}
									>
										<BsArrowLeft />
									</button>
									<button
										className={`${buttonStyle} absolute top-1/2 right-[10px]`}
										onClick={handleModalNext}
									>
										<BsArrowRight />
									</button>
								</>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="sm:hidden overflow-auto max-h-[700px] space-y-1">
					<button
						className={`${buttonStyle} absolute top-[10px] right-[10px]`}
						onClick={() => {
							setOpenModal(false);
						}}
					>
						<IoMdClose className="" />
					</button>
					{modalImages.map((image, index) => (
						<>
							<img
								src={image}
								alt={`event-image-${index}`}
								className="rounded-lg w-full lg:h-[600px] object-cover"
							/>
						</>
					))}
				</div>
			</Modal>
		</div>
	);
};

export default RecentEvents;

function EventCard({
	title,
	description,
	thumbnailImage,
	modalImages,
	handleOpenModal
}) {
	return (
		<div
			className="relative-container"
			onClick={() => {
				handleOpenModal(modalImages);
			}}
		>
			<img
				src={thumbnailImage}
				alt={`event-${title}`}
				className="w-full object-cover h-full rounded-3xl"
			/>
			<div className="green-overlay p-10 text-white">
				<h2 className=" text-xl sm:text-xl font-bold">{title}</h2>
				<p className=" text-sm mt-2">{description}</p>
				<p className="text-sm mt-2 text-custom6">
					Click on the image to see more photos
				</p>
			</div>
		</div>
	);
}
