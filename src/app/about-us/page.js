import CampusAndLocation from '@/components/website/about-us/CampusAndLocation';
import MissionStatement from '@/components/website/about-us/MissionStatement';
import OurHistory from '@/components/website/about-us/OurHistory';
import OurTeam from '@/components/website/about-us/OurTeam';
import WordsByFounder from '@/components/website/about-us/WordsByFounder';
import Footer from '@/components/website/common/Footer';
import Hero from '@/components/website/common/Hero';
import Stepbar from '@/components/website/common/Stepbar';

const AboutUs = () => {
	return (
		<main className="flex w-full flex-col items-center justify-between bg-custom1">
			<Hero title={'About Us'} />
			<MissionStatement />
			<OurHistory />
			<CampusAndLocation />
			<WordsByFounder />
			<OurTeam />
			<div className="w-full">
				<Stepbar />
				<Footer />
			</div>
		</main>
	);
};

export default AboutUs;
