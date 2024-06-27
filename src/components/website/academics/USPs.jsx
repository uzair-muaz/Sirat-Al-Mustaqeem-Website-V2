import UspCard from './UspCard';

const uspsArray = [
	{
		icon: '/website-assets/pre-school-1.svg',
		title: 'Promoting Social & Emotional Development',
		description:
			'Sirat-Al-Mustaqeem Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth. Children learn to communicate, collaborate, and regulate their emotions through play and other activities. The goal is to groom children so that they are able to regulate their emotions under different circumstances and are socially conscious and active.'
	},
	{
		icon: '/website-assets/pre-school-2.svg',
		title: 'Developing Cognitive and Language Skills',
		description:
			'Our Preschool will provide opportunities for children to develop cognitive and language skills. Our focus languages include English, Urdu, and Arabic.'
	},
	{
		icon: '/website-assets/pre-school-3.svg',
		title: 'Fostering Creativity & Imagination',
		description:
			'Our Preschool will encourage children to explore their creativity and imagination through free play and inquiry-based learning, time for observations, and promoting the culture of inquisitiveness.'
	},
	{
		icon: '/website-assets/pre-school-4.svg',
		title: 'Building Self-esteem & Confidence',
		description:
			'Our Preschool aims to build self-esteem and confidence by providing positive feedback, encouragement, and opportunities for success to the children.'
	},
	{
		icon: '/website-assets/pre-school-5.svg',
		title: 'Promoting Physical Development',
		description:
			'Our Preschool will provide opportunities for children to develop their gross and fine motor skills through play, movement, and indoor and outdoor activities.'
	},
	{
		icon: '/website-assets/pre-school-6.svg',
		title: 'Encouraging an inquisitive attitude & love for learning',
		description:
			'Our Preschool aims to foster an inquisitive attitude and love for learning by providing opportunities for children to explore, ask questions, and discover new things about the world around them.'
	},
	{
		icon: '/website-assets/pre-school-7.svg',
		title: 'Developing Character & Moral Values',
		description:
			'Preschools aim to help children develop positive character traits and moral values, such as honesty, respect, kindness, and empathy. This helps to build a strong foundation for future social and emotional development.'
	},
	{
		icon: '/website-assets/pre-school-8.svg',
		title: 'Introducing Basic Islamic Values & Teaching',
		description:
			'Our Preschool aims to introduce young children to basic Islamic values and teachings in an age-appropriate and engaging way.'
	},
	{
		icon: '/website-assets/pre-school-9.svg',
		title: 'Building Confident Communication',
		description:
			"Preschools aim to build children's communication skills by providing opportunities for them to express themselves through speaking, listening, and storytelling. "
	}
];

const USPs = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-16">
			<div className="md:border-b grid md:grid-cols-3">
				{uspsArray.slice(0, 3).map((usp, index) => (
					<UspCard key={`usp-card-${index}`} {...usp} index={index + 1} />
				))}
			</div>
			<div className="md:border-b grid md:grid-cols-3">
				{uspsArray.slice(3, 6).map((usp, index) => (
					<UspCard key={`usp-card-${index}`} {...usp} index={index + 1} />
				))}
			</div>
			<div className="grid md:grid-cols-3">
				{uspsArray.slice(6, 9).map((usp, index) => (
					<UspCard key={`usp-card-${index}`} {...usp} index={index + 1} />
				))}
			</div>
		</div>
	);
};

export default USPs;
