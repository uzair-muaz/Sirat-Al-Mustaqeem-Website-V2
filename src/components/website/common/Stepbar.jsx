import React from 'react';

import StepCard from './StepCard';

const Stepbar = () => {
	return (
		<div className="pt-10 pb-[146px] w-full">
			<div className="sm:container sm:mx-auto px-6 flex flex-col justify-center items-center">
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center">
					Next Step
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />

				<div className="mt-16 grid md:grid-cols-3 gap-16">
					<StepCard
						index="1"
						title="Admission"
						description="Fill in the admission form and our HR will get in touch with you"
					/>
					<StepCard
						index="2"
						title="Location"
						description="Free Quran Education Centre Rawalpindi"
					/>
					<StepCard
						index="3"
						title="Book a tour"
						description="Contact our HR @ 0333-1100786 and book your tour on any weekday between 9 am to 2 pm."
					/>
				</div>
			</div>
		</div>
	);
};

export default Stepbar;
