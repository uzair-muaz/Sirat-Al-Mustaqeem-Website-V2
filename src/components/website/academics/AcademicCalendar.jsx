import { SemesterCard } from './SemesterCard';

const semesters = [
	{
		title: 'Fall Semester',
		description:
			'The fall semester typically covers the period from September to December.',
		startDate: '4th September 2023',
		endDate: '4th September 2023',
		picture: '/website-assets/semester-1.png'
	},
	{
		title: 'Spring Semester',
		description: 'The spring semester usually spans from January to May.',
		startDate: '4th September 2023',
		endDate: '4th September 2023',
		picture: '/website-assets/semester-2.png'
	}
];
const AcademicCalendar = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 flex flex-col justify-center items-center py-16 w-full">
			<h3 className="text-custom4 text-lg sm:text-xl font-medium">Schedule</h3>
			<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center">
				Academic Calendar
			</h1>
			<div className="border border-custom6 w-full max-w-[280px] mt-3" />

			<div className="grid lg:grid-cols-2 gap-10 w-full mt-20">
				{semesters.map((semester, index) => (
					<SemesterCard key={`semester-card-${index}`} {...semester} />
				))}
			</div>
		</div>
	);
};

export default AcademicCalendar;
