import SubjectCard from './SubjectCard';

const subjects = [
	{
		name: 'Mathematics',
		description: 'Study of numbers, quantities, shapes, and patterns.'
	},
	{
		name: 'Science',
		description:
			'Exploration of the natural world through observation and experimentation.'
	},
	{
		name: 'History',
		description: 'Study of past events, people, and societies.'
	},
	{
		name: 'English Language Arts',
		description:
			'Development of reading, writing, speaking, and listening skills.'
	},
	{
		name: 'Art',
		description:
			'Creative expression through various mediums such as painting, drawing, and sculpture.'
	},
	{
		name: 'Physical Education',
		description:
			'Promotion of physical fitness, coordination, and healthy lifestyle habits.'
	},
	{
		name: 'Music',
		description:
			'Exploration of musical concepts, instruments, and performance.'
	},
	{
		name: 'Computer Science',
		description:
			'Understanding of computer systems, programming, and digital technologies.'
	}
];

const Subjects = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
			{subjects.map((subject, index) => (
				<SubjectCard key={`subject-card-${index}`} {...subject} />
			))}
		</div>
	);
};

export default Subjects;
