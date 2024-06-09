import { SemesterCard } from './SemesterCard';

const semesters = [
	{
		title: 'Semester 1',
		description:
			'Semester 1 begins in mid-August and concludes in late December. This semester includes various events such as a Science Festival in November and a Sports League in December.',
		startDate: 'August 19, 2024',
		endDate: 'December 27, 2024',
		educator: 'December 28, 2024',
		scienceFestival: 'November, 2024',
		sportLeague: 'December, 2024',
		picture: '/website-assets/semester-2.png'
	},
	{
		title: 'Semester 2',
		description:
			'Semester 2 starts in mid-January and ends in early June. Key events during this semester include a Sports League in February and an Art Festival in March.',
		startDate: 'January 13, 2025',
		endDate: 'June 06, 2025',
		educator: 'June 07, 2025',
		sportLeague: 'February, 2025',
		artFestival: 'March, 2025',
		picture: '/website-assets/semester-1.png'
	}
];

const AcademicCalendar = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-16 w-full">
			<div
				data-aos="fade-down"
				className=" flex flex-col justify-center items-center"
			>
				<h3 className="text-custom4 text-lg sm:text-xl font-medium">
					Schedule
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center">
					Academic Calendar
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
			</div>

			<div className="grid lg:grid-cols-2 gap-10 w-full mt-20">
				{semesters.map((semester, index) => (
					<SemesterCard key={`semester-card-${index}`} {...semester} />
				))}
			</div>
		</div>
	);
};

export default AcademicCalendar;
