const WordsByFounder = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
			<div data-aos="fade-right" className="flex justify-center items-center ">
				<img
					src="/website-assets/founder.svg"
					alt="vision-image"
					className="rounded-full lg:max-w-[500px] object-contain"
				/>
			</div>

			<div data-aos="fade-left" className="flex flex-col justify-center">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">Founder</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3">
					Words Of The Founder
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				<p className="text-custom7 mt-7">
					It gives me immense pleasure to welcome you to our esteemed community
					of Sirat al Mustaqeem Academy. Our vision revolves around providing an
					education system to the world that is focused on the holistic
					development of a child, whilst providing them with tools and skills to
					be a succes in this world and the next life. We aim to help them
					become characterful individuals who are connected to their true
					purpose destined for them by the Creator of the universe. I am hopeful
					that soon the world will see that a community has risen to the world
					challenges and are gritty enough to persevere towards its solutions
					while pleasing their lord.
				</p>
			</div>
		</div>
	);
};

export default WordsByFounder;
