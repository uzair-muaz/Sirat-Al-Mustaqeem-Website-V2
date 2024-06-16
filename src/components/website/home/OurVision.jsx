const OurVision = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
			<div data-aos="fade-down" className="flex flex-col justify-center">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">
					About Us
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3">
					Vision Statement
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				<p className="text-custom7 mt-7">
					Our vision is to develop children who think the right way, act the
					right way and live life the right way. Our goal as a school is to
					equip our coming generations with the best education, skillset, and
					mindset to succeed in both the duniya and akhirah. These individuals
					will become the front runners in the fields of their interests and
					will be at the forefront of a revolution towards goodness.
				</p>
			</div>
			<div data-aos="fade-up" className="flex justify-center items-center">
				<img
					src="/website-assets/vision-statement.png"
					alt="vision-image"
					className="w-full max-w-[500px]"
				/>
			</div>
		</div>
	);
};

export default OurVision;
