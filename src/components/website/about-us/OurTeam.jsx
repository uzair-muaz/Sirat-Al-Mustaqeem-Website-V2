import React from 'react';

const OurTeam = () => {
	const facultyArray = [
		{ image: 'faculty-6.png', name: 'Ayesha Hyat', role: 'Director' },
		{ image: 'faculty-5.png', name: 'Abubakar Khan', role: 'CEO School' },
		{
			image: 'faculty-2.png',
			name: 'Reham Mujahid',
			role: 'HR and Homeroom Educator'
		},
		{
			image: 'faculty-3.png',
			name: 'Afshan Saleem',
			role: 'Coordinator and English Language Educator'
		},
		{ image: 'faculty-1.png', name: 'Shumama Zaidi', role: 'Arabic Educator' },
		{ image: 'faculty-4.png', name: 'Mahira Hyat', role: 'Counselor' }
	];
	return (
		<div className="sm:container sm:mx-auto px-6  py-16 w-full">
			<div
				data-aos="fade-down"
				className="flex flex-col justify-center items-center"
			>
				<h3 className="text-custom4 text-lg sm:text-xl font-medium">
					Teachers
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center">
					Our Team
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-20">
				{facultyArray.map((faculty, index) => (
					<ImageCard key={faculty} index={index} {...faculty} />
				))}
			</div>
		</div>
	);
};

export default OurTeam;

function ImageCard({ image, name, role, index }) {
	return (
		<div
			data-aos="fade-right"
			data-aos-delay={(index + 2) * 150}
			className="relative bg-[#13824b33] rounded-[30px] w-full max-h-[464px]"
		>
			<img
				// src={`/website-assets/${picture}`}
				src={`/website-assets/team-picture-background.png`}
				alt="circular-background"
				className="w-full h-full"
			/>
			<img
				src={`/website-assets/${image}`}
				alt="faculty"
				className=" absolute top-0 right-1/2 translate-x-1/2 h-full w-full object-contain"
			/>
			<div className="absolute bg-white bg-opacity-55 rounded-b-[30px] flex flex-col items-center bottom-0 w-full py-3">
				<h1 className="text-custom5 text-3xl font-bold">{name}</h1>
				<h2 className="text-custom7 font-medium text-lg">{role}</h2>
			</div>
		</div>
	);
}
