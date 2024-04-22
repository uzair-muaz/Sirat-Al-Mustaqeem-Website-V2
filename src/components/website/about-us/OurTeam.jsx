import React from 'react';

const OurTeam = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 flex flex-col justify-center items-center py-16 w-full">
			<h3 className="text-custom4 text-lg sm:text-xl font-medium">Teachers</h3>
			<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center">
				Our Team
			</h1>
			<div className="border border-custom6 w-full max-w-[280px] mt-3" />

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-20">
				<ImageCard />
				<ImageCard />
				<ImageCard />
				<ImageCard />
				<ImageCard />
				<ImageCard />
			</div>
		</div>
	);
};

export default OurTeam;

function ImageCard({}) {
	return (
		<div className="relative bg-[#13824b33] rounded-[30px] w-full max-h-[464px]">
			<img
				src="/website-assets/team-picture-background.png"
				alt="circular-background"
				className="w-full h-full"
			/>
			<div className="absolute bg-white bg-opacity-55 rounded-b-[30px] flex flex-col items-center bottom-0 w-full py-3">
				<h1 className="text-custom5 text-3xl font-bold">lorem ipsum</h1>
				<h2 className="text-custom7 font-medium text-lg">English Teacher</h2>
			</div>
		</div>
	);
}
