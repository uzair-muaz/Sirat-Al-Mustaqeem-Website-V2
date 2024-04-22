import AcademicCalendar from '@/components/website/academics/AcademicCalendar';
import PreSchool from '@/components/website/academics/PreSchool';
import Subjects from '@/components/website/academics/Subjects';
import USPs from '@/components/website/academics/USPs';
import WeeklySchedule from '@/components/website/academics/WeeklySchedule';
import WhatMakesUsUnique from '@/components/website/academics/WhatMakesUsUnique';
import Footer from '@/components/website/common/Footer';
import Hero from '@/components/website/common/Hero';
import Stepbar from '@/components/website/common/Stepbar';

const AboutUs = () => {
	return (
		<main className="flex w-full flex-col items-center justify-between bg-custom1">
			<Hero title={'Academics'} />
			<PreSchool />
			<USPs />
			<WhatMakesUsUnique />
			<Subjects />
			<AcademicCalendar />
			<div className="bg-gradient-to-b from-custom1 from-10% via-[#E6FFE1] via-30% to-[#E6FFE1] to-90%  w-full">
				<WeeklySchedule />
				<Stepbar />
				<Footer />
			</div>
		</main>
	);
};

export default AboutUs;
