import UspCard from './UspCard';

const uspsArray = [
	{
		icon: '/website-assets/pre-school-1.svg',
		title: 'Promoting Social & Emotional Development',
		description:
			'Al-Fajar Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth.'
	},
	{
		icon: '/website-assets/pre-school-2.svg',
		title: 'Developing Cognitive and Language Skills',
		description:
			'Al-Fajar Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth.'
	},
	{
		icon: '/website-assets/pre-school-3.svg',
		title: 'Fostering Creativity & Imagination',
		description:
			'Al-Fajar Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth.'
	},
	{
		icon: '/website-assets/pre-school-4.svg',
		title: 'Building Self-esteem & Confidence',
		description:
			'Al-Fajar Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth. '
	},
	{
		icon: '/website-assets/pre-school-5.svg',
		title: 'Promoting Physical Development',
		description:
			'Al-Fajar Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth. '
	},
	{
		icon: '/website-assets/pre-school-6.svg',
		title: 'Encouraging an inquisitive attitude & love for learning',
		description:
			'Al-Fajar Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth. '
	},
	{
		icon: '/website-assets/pre-school-7.svg',
		title: 'Developing Character & Moral Values',
		description:
			'Al-Fajar Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth.'
	},
	{
		icon: '/website-assets/pre-school-8.svg',
		title: 'Introducing Basic Islamic Values & Teaching',
		description:
			'Al-Fajar Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth. '
	},
	{
		icon: '/website-assets/pre-school-9.svg',
		title: 'Building Confident Communication',
		description:
			'Al-Fajar Preschool, we aim to provide a safe and nurturing environment that fosters social and emotional growth. '
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
