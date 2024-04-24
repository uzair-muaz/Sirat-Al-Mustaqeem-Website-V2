import ApplyForPosition from '@/components/website/careers/ApplyForPosition';
import WorkWithUs from '@/components/website/careers/WorkWithUs';
import Footer from '@/components/website/common/Footer';
import Hero from '@/components/website/common/Hero';
import Stepbar from '@/components/website/common/Stepbar';

export default function Careers() {
	return (
		<main className="flex w-full flex-col items-center justify-between bg-custom1">
			<Hero title={'Careers'} />
			<WorkWithUs />
			<div className="bg-gradient-to-b from-custom1 from-10% via-[#E6FFE1] via-30% to-[#E6FFE1] to-90%  w-full">
				<ApplyForPosition />
				<Stepbar />
				<Footer />
			</div>
		</main>
	);
}
