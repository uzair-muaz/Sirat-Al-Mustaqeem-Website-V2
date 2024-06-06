import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const WhereToFindUs = () => {
	const baseStyleBox =
		' w-full flex flex-col items-center justify-center gap-2 p-8 rounded-md text-center';
	return (
		<div className="w-full">
			<div
				data-aos="fade-down"
				className="flex flex-col justify-center items-center"
			>
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">
					Stay in touch
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center">
					Where to find us
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
			</div>

			<div className="grid md:grid-cols-3 w-full gap-5 mt-14">
				<div
					data-aos="fade-right"
					className={`bg-white border-2 border-[#dadada text-[#474747] ${baseStyleBox}`}
				>
					<FaLocationDot className="text-5xl text-[#B2B2B2]" />
					<h1 className="font-semibold text-2xl mt-5">Our Location</h1>
					<p>Free Quran Education Centre Rawalpindi</p>
				</div>
				<div
					data-aos="fade-right"
					data-aos-delay={300}
					className={`bg-[#69AA8A] text-white ${baseStyleBox}`}
				>
					<MdEmail className="text-5xl" />
					<h1 className="font-semibold text-2xl mt-5">Our Email</h1>
					<p>Long Street 454 Los Angles</p>
				</div>
				<div
					data-aos="fade-right"
					data-aos-delay={600}
					className={`bg-white border-2 border-[#dadada] text-[#474747] ${baseStyleBox}`}
				>
					<FaPhoneSquareAlt className="text-5xl text-[#B2B2B2]" />
					<h1 className="font-semibold text-2xl mt-5">Our Phone</h1>
					<p>0333-1100786 ---- 0302-5019924</p>
					<p></p>
				</div>
			</div>
		</div>
	);
};

export default WhereToFindUs;
