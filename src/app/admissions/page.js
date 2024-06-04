import AdmissionForm from '@/components/website/admissions/AdmissionForm';
import Footer from '@/components/website/common/Footer';
import Hero from '@/components/website/common/Hero';
import Stepbar from '@/components/website/common/Stepbar';

export default function Admissions() {
	return (
		<main className="flex w-full flex-col items-center justify-between bg-custom1">
			<Hero title={'Admission'} />
			<div className="bg-gradient-to-b from-custom1  to-[#E6FFE1] w-full">
				<AdmissionForm />
				<Stepbar />
				<Footer />
			</div>
		</main>
	);
}
