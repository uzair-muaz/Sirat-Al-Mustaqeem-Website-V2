const MissionStatement = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
			<div data-aos="fade-right" className="flex justify-center items-center">
				<img
					src="/website-assets/mission-statement.png"
					alt="mission-image"
					className="w-full max-w-[500px]"
				/>
			</div>
			<div data-aos="fade-left" className="flex flex-col justify-center">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">
					About Us
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3">
					Mission Statement
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				<p className="text-custom7 mt-7">
					To build a friendly environment for children to learn, play,
					socialize, and acquire knowledge that will help them understand how to
					live life the right way. We strive to support this environment by
					building a comprehensive system that will address a range of learning
					styles and offer diverse courses and programs so that students grow
					holistically and are prepared to take on the endeavors of life.
				</p>
			</div>
		</div>
	);
};

export default MissionStatement;
