import FormSection from '@/components/forms/AdmissionForm';

const AdmissionForm = () => {
	return (
		<div className="py-10 w-full">
			<div className="sm:container sm:mx-auto px-6 ">
				<div
					data-aos="fade-down"
					className="flex flex-col justify-center items-center"
				>
					<h3 className="text-custom3 text-lg sm:text-xl font-medium">
						Enroll
					</h3>
					<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center capitalize">
						Admission form
					</h1>
					<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				</div>
				<div className="flex w-full gap-10 lg:gap-20 mt-10 md:mt-16 justify-center items-start ">
					<div
						data-aos="fade-right"
						className="flex flex-col justify-start w-full md:w-fit md:max-w-[800px]"
					>
						<FormSection />
					</div>
					<div data-aos="fade-left" className="hidden md:block">
						<img
							src="/website-assets/admission.png"
							alt="map"
							className="rounded-3xl max-h-[500px] w-full "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdmissionForm;
