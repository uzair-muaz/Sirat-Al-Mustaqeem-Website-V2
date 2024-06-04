import ContactForm from '@/components/forms/ContactForm';
import Footer from '@/components/website/common/Footer';
import Hero from '@/components/website/common/Hero';
import Stepbar from '@/components/website/common/Stepbar';
import ContactFormSection from '@/components/website/contact-us/ContactFormSection';
import WhereToFindUs from '@/components/website/contact-us/WhereToFindUs';

export default function ContactUs() {
	return (
		<main className="flex w-full flex-col items-center justify-between bg-custom1">
			<Hero title={'Contact Us'} />

			<div className="bg-gradient-to-b from-custom1 from-10% via-[#E6FFE1] via-30% to-[#E6FFE1] to-90%  w-full">
				<div className="py-10 w-full">
					<div className="sm:container sm:mx-auto px-6 flex flex-col justify-center items-center w-full">
						<WhereToFindUs />
						<ContactFormSection />
					</div>
				</div>
				<Stepbar />
				<Footer />
			</div>
		</main>
	);
}
