const WhatMakesUsUnique = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
			<div className="flex justify-center items-center">
				<img
					src="/website-assets/what-makes-us-unique.png"
					alt="mission-image"
					className="w-full max-w-[500px]"
				/>
			</div>
			<div className="flex flex-col justify-start">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">
					Our offerings
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3">
					What makes us unique?
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				<p className="text-custom7 mt-7">
					At Al-Fajr Preschool, our goals revolve around holistic education and
					unlocking the potential of every student. This development takes care
					of their Cognitive, Spiritual, Social-Emotional and Physical.)  We
					strive to create a learning environment that nurtures intellectual
					curiosity, promotes critical thinking, and fosters academic
					excellence. Embracing the unique individuality of each student, we
					encourage their creativity and inquisitiveness, allowing them to
					explore and express themselves freely.
				</p>
			</div>
		</div>
	);
};

export default WhatMakesUsUnique;
