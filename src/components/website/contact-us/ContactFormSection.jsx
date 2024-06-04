import ContactForm from '@/components/forms/ContactForm';

const ContactFormSection = () => {
	return (
		<div className="flex w-full gap-10 lg:gap-20 mt-10 md:mt-[140px] justify-center items-start">
			<div data-aos="fade-down" className="flex flex-col justify-start w-full">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">
					Contact form
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 ">
					Let’s talk
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				<ContactForm />
			</div>
			<div data-aos="fade-up" className="hidden md:block">
				<img
					src="/website-assets/map.png"
					alt="map"
					className="h-[580px] w-[800px] object-cover "
				/>
			</div>
		</div>
	);
};

export default ContactFormSection;
