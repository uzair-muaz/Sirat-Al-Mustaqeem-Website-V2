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
					At Sirat al Mustaqeem, we love to onboard individuals who are
					passionate about education and have a knack to challenge the
					traditional and conventional systems. Individuals who are committed
					and persistent to find solutions to big problems in society and
					education and hence make a noteworthy difference. We seek individuals
					who are innovative in their approach, ready to learn and implement new
					methodologies, and having a heart that has love and care for the young
					learners. If you consider yourself such a creative individual, then
					you are at the right place. Avail this opportunity to team up with the
					change makers by filling out the application form.
				</p>
				<p className="mt-2">
					We believe in giving financial freedom to our educators so that they
					can focus on the development of the children. Easing our educators is
					our prime focus and we believe in doing that in best possible ways.
				</p>
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
