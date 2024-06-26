const WorkWithUs = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
			<div data-aos="fade-right" className="flex flex-col justify-center">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">Careers</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3">
					Work With Us
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				<p className="text-custom7 mt-7">
					At Sirat al Mustaqeem, we like hiring people who are passionate about
					education and have a knack for challenging traditional systems.
					Individuals who are dedicated and persistent in their efforts to solve
					major societal problems, particularly those involving education. We
					seek individuals who are innovative in their approach, eager to learn
					and implement new methodologies, and have a heart filled with
					compassion and affection for young learners. If you identify as one of
					these individuals, you've landed in the right place. Fill out the
					application form to take advantage of the opportunity to collaborate
					with changemakers.
				</p>
				{/* <p className="mt-2">
					We believe in giving financial freedom to our educators so that they
					can focus on the development of the children. Easing our educators is
					our prime focus and we believe in doing that in best possible ways.
				</p> */}
			</div>
			<div data-aos="fade-left" className="flex justify-center items-center">
				<img
					src="/website-assets/pre-school.png"
					alt="pre-school-image"
					className="w-full max-w-[500px]"
				/>
			</div>
		</div>
	);
};

export default WorkWithUs;
