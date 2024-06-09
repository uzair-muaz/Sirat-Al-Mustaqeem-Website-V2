import SubjectCard from './SubjectCard';

// const subjects = [
// 	{
// 		name: 'English',
// 		description:
// 			'Our English program focuses on developing effective communication skills through engaging activities, phonics instruction (Jolly Phonics), interactive cartoons, and immersive plays. Students are encouraged to express themselves confidently and fluently in English.'
// 	},
// 	{
// 		name: 'Urdu',
// 		description:
// 			'Our Urdu program emphasizes communication skills through a variety of activities, interactive plays, and engaging cartoons. Students develop their Urdu language proficiency while exploring the richness of their cultural heritage.'
// 	},
// 	{
// 		name: 'Arabic',
// 		description:
// 			'Our Arabic curriculum introduces students to Arabic Fussah (literary Arabic), through activities and captivating cartoons that make learning enjoyable and immersive.'
// 	},
// 	{
// 		name: 'Free/Imaginative Play and Inquiry-Based Learning',
// 		description:
// 			'We strongly believe in the power of play and inquiry-based learning. Our students engage in a wide range of activities that promote creativity, critical thinking, and independent exploration. They develop character, confidence, and effective communication skills through imaginative play.'
// 	},
// 	{
// 		name: 'Individual and Group Activities',
// 		description:
// 			'Our preschool offers a diverse range of individual and group activities designed to nurture creativity, stimulate critical thinking, and encourage free expression. Students actively participate in plays, allowing them to showcase their talents, work collaboratively, and build their confidence.'
// 	},
// 	{
// 		name: 'Story Circles',
// 		description:
// 			'We dedicate special sessions to storytelling, focusing on moral teaching, developing Islamic psychology, and introducing students to the inspiring heroes of Islam. Through these stories, students develop an understanding of Islamic values, select their favorite Prophets and Sahabah, and learn valuable life lessons.'
// 	},
// 	{
// 		name: 'Observation and Query Hours',
// 		description:
// 			'We foster critical thinking skills by providing dedicated observation and query hours. These sessions encourage students to observe their surroundings, ask questions, and engage in thoughtful discussions, enhancing their thinking faculties.'
// 	},
// 	{
// 		name: 'Boring Hour',
// 		description:
// 			'We incorporate a "Boring Hour" to cultivate temperance and reflection. This quiet period allows students to connect with their inner selves, promoting mindfulness and self-awareness.'
// 	},
// 	{
// 		name: 'Visits to Orphanages',
// 		description:
// 			'To instill values of empathy, sympathy, and gratitude, our students participate in visits to orphanages. These experiences enable them to develop a compassionate attitude toward others and appreciate their blessings.'
// 	},
// 	{
// 		name: 'Outdoor Exploration',
// 		description:
// 			'We organize outdoor exploration activities that allow students to connect with nature and their surroundings. Field trips to botanical gardens, farms, and nature reserves expose students to different ecosystems, promoting physical activity, cognitive development, emotional well-being, imaginative play, and social interaction. They also foster a sense of environmental stewardship, encouraging students to appreciate and care for the natural world.'
// 	},
// 	{
// 		name: 'Art and Creativity',
// 		description:
// 			'Our art program encourages students to explore their creativity through various art forms, such as drawing, painting, sculpting, and crafting. Students engage in hands-on activities that enhance their fine motor skills, imagination, and self-expression.'
// 	},
// 	{
// 		name: 'Gardening and Sustainability',
// 		description:
// 			'Our gardening program allows students to experience the joys of growing plants, understanding the importance of sustainability, and caring for the environment. Students learn about plant life cycles, nutrition, and the benefits of a green lifestyle.'
// 	},
// 	{
// 		name: 'Physical Activities',
// 		description:
// 			"Physical activities are an integral part of our preschool's curriculum. Students participate in a variety of outdoor games, sports, and exercises to promote physical fitness and enhance gross motor skills. As they progress, they have the opportunity to learn jujitsu, a martial art that instills self-defense, discipline, and self-confidence. Our goal is to foster a love for active living and equip students with essential physical and self-defense skills."
// 	}
// ];

const subjects = [
	{
		name: 'Individualised Semester Plan focused on Holistic Development',
		description:
			'Each learner will be assigned a mentor. Two of them, along with the parents, will design a complete learning program for the semester.'
	},
	{
		name: 'Robotics and Innovation Lab',
		description:
			'Our Robotics and Innovation Lab will provide students with hands-on experience with the contemporary innovative technologies.'
	},
	{
		name: 'Teachers as Mentors',
		description:
			'Teachers will be replaced with mentors in our system who will work in close liaison with the learner for his/her holistic development.'
	},
	{
		name: 'Arabic Language along with English and Urdu',
		description:
			'We focus on developing listening, speaking, reading, and writing skills in these 3 languages.'
	},
	{
		name: 'Mind Shaping through Quran and Seerah',
		description:
			'Our Quran Circles and Seerah Program will help develop the right mindset.'
	},
	{
		name: 'Natural Learning Environment',
		description:
			'Our learning environment is based on the natural growth patterns of an individual.'
	},
	{
		name: '10:1 Student to Teacher Ratio',
		description:
			'We want individualised attention for your child and hence have a Student to Teacher ratio of 10:1.'
	},
	{
		name: 'Media and IT Centre',
		description:
			'Our media and IT facilities will give our learners a first-hand experience of how things are carried out in these areas.'
	},
	{
		name: 'Largest Auditorium Facility',
		description:
			'We have one of the largest auditoriums in the town where we conduct different activities for our learners.'
	},
	{
		name: 'Project Based Learning',
		description:
			'Learners engaging in projects is one of the key learning methodologies at our school.'
	},
	{
		name: 'Social Emotional Learning',
		description:
			'Social Emotional learning is pivotal for any individual in this day and age, and hence, we have a full-time counselor whose job is to understand and help students regulate their emotions.'
	},
	{
		name: 'Character Development',
		description:
			'Character Development is one of our main focuses, and hence, we facilitate our learners in it through character goals.'
	},
	{
		name: 'Community Engagement Projects for Active Citizenship',
		description:
			'All our students will take on some community service projects to learn to play their part in society.'
	},
	{
		name: 'Innovative Learning and Assessment Methodologies for Active Learning',
		description:
			'Our learning methodologies are designed to facilitate the children in their natural learning process.'
	},
	{
		name: 'Focus on Building 21st-century Critical Skills',
		description:
			'21st-century skills are part and parcel of our everyday ventures at school.'
	},
	{
		name: 'A Dream Learning Environment for Homeschoolers',
		description:
			'Our focus on individuality and provision of a natural learning environment is a dream for all homeschoolers.'
	},
	{
		name: 'Transportation Facility',
		description:
			'We provide a transport facility with one of our school ayaas accompanying it to provide a quality experience to our learners.'
	}
];

const Subjects = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
			{subjects.map((subject, index) => (
				<SubjectCard key={`subject-card-${index}`} index={index} {...subject} />
			))}
		</div>
	);
};

export default Subjects;
