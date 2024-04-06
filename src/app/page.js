import Footer from '@/components/website/common/Footer';
import Stepbar from '@/components/website/common/Stepbar';
import ContactUs from '@/components/website/home/ContactUs';
import Hero from '@/components/website/home/Hero';
import OurVision from '@/components/website/home/OurVision';
import RecentEvents from '@/components/website/home/RecentEvents';
import Testimonials from '@/components/website/home/Testimonials';
import WhyUs from '@/components/website/home/WhyUs';
import WordsByPrinciple from '@/components/website/home/WordsByPrinciple';

export default function Home() {
	return (
		<main className="flex w-full flex-col items-center justify-between bg-custom1">
			<Hero />
			<OurVision />
			<Testimonials />
			<WhyUs />
			<RecentEvents />
			<WordsByPrinciple />
			<div className="bg-gradient-to-b from-[#F9FFDE] to-[#D8E6EB] w-full">
				<ContactUs />
				<Stepbar />
				<Footer />
			</div>
		</main>
	);
}
