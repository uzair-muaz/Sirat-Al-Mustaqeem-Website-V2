const OurHistory = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
			<div data-aos="fade-down" className="flex flex-col justify-center">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">
					About Us
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3">
					OUR HISTORY
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				<p className="text-custom7 mt-7">
					Free Quran Education (FQE) is an esteemed online platform that has
					been dedicated to providing education in various domains for the past
					15 years. With a remarkable achievement of over 10.1 million
					subscribers across all its channels, FQE has established itself as a
					leading digital educational platform. Expanding its horizons beyond
					the digital realm, FQE recently embarked on physical projects, and the
					first of its kind is the FQE Center. This impressive auditorium, with
					a seating capacity of 1200+, was completed in February 2023 and has
					become a hub for hosting a wide range of events.
				</p>
				<p className="mt-2">
					Following the success of the FQE Center, the organization is now
					embarking on its flagship project that is Sirat al Mustaqeem-An
					Academy of Excellence. This educational institute aims to create a
					21st-century school environment focused on the holistic development of
					children, addressing their intellectual, physical, emotional, and
					spiritual needs. We have started of with a successful preschool
					project and will continue to expand to higher classes in upcoming
					years, creating an ecosystem where children will be able to grow
					holistically.
				</p>
			</div>
			<div data-aos="fade-up" className="flex justify-center items-center">
				<img
					src="/website-assets/our-history.png"
					alt="our-history"
					className="w-full max-w-[500px]"
				/>
			</div>
		</div>
	);
};

export default OurHistory;
