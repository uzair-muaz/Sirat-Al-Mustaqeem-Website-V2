const WhatMakesUsUnique = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
			<div data-aos="fade-down" className="flex justify-center items-center">
				<img
					src="/website-assets/what-makes-us-unique.png"
					alt="mission-image"
					className="w-full max-w-[500px]"
				/>
			</div>
			<div data-aos="fade-up" className="flex flex-col justify-start">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">
					Our offerings
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3">
					Personality Shaping Years (Grade 1 to 3)
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				<p className="text-custom7 mt-7">
					We have recently added a holistic development program for learners
					aged 6 to 10 based on natural learning.
				</p>
			</div>
		</div>
	);
};

export default WhatMakesUsUnique;
