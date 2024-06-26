'use client';

import { useRouter } from 'next/navigation';

const StepCard = ({ index, title, description }) => {
	const { push } = useRouter();

	const handleClick = () => {
		if (index === '1') {
			push('/admissions');
		}
	};

	return (
		<div
			data-aos="fade-right"
			data-aos-delay={index * 50}
			className={`border border-[#E4E4E4] bg-[#ECF8EC] p-5 w-full rounded-2xl space-y-2 md:max-w-[374px] ${index === '1' && 'cursor-pointer'}`}
			onClick={handleClick}
		>
			<div className="bg-[#6EBE6E] px-3 py-1 rounded-xl w-fit text-white font-semibold text-xl">
				{index}
			</div>
			<h2 className="text-[#1B1B1B] text-xl font-semibold">{title}</h2>
			<p className="text-[#595959] font-medium">{description}</p>
		</div>
	);
};

export default StepCard;
