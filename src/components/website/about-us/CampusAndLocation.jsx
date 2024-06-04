import { MdLocationPin } from 'react-icons/md';

const CampusAndLocation = () => {
	return (
		<div className="py-10 w-full">
			<div
				data-aos="fade-down"
				className="sm:container sm:mx-auto px-6 flex flex-col justify-center items-center"
			>
				<h3 className="text-custom4 text-lg sm:text-xl font-medium">MAP</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center">
					Campus and location
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
			</div>

			<div
				data-aos="fade-down"
				className="sm:container sm:mx-auto relative pt-[310px]"
			>
				<div className="w-[90%] max-w-[925px] h-[425px] p-5 absolute left-6 sm:left-0 top-20 border border-custom6 rounded-2xl">
					<img
						src="/website-assets/map.png"
						alt="map"
						className="w-full h-full rounded-2xl"
					/>
				</div>
			</div>
			<div className="pt-56 md:pt-52 pb-10 bg-custom2 w-full">
				<div className="sm:container sm:mx-auto px-6 sm:px-6 gap-4 flex justify-center ">
					<div data-aos="fade-up" className="">
						<h2 className="text-white text-3xl font-semibold mt-3 flex items-center gap-2">
							<span>
								<MdLocationPin className="text-5xl" />
							</span>
							School Location
						</h2>
						<div className="border border-custom6 w-full max-w-[280px] mt-3" />
						<p className="text-white font-medium text-2xl mt-4">
							Free Quran Education Center, Rawalpindi
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CampusAndLocation;
