import { USPsArray } from '@/utils/website/constants';

const WhyUs = () => {
	return (
		<div className="py-10 w-full">
			<div
				data-aos="fade-up"
				className="sm:container sm:mx-auto px-6 flex flex-col justify-center items-center"
			>
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">USP's</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center">
					WHY US
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />

				<div data-aos="zoom-out" className="hidden lg:flex gap-5 w-full mt-16">
					<div className="w-full space-y-4">
						{USPsArray.slice(0, 2).map((usp, index) => (
							<div className="relative-container" key={`usp-card-${index}`}>
								<img
									src={usp.image}
									alt={`USP-${index}`}
									className="w-full object-cover rounded-3xl"
									style={{ height: usp.height }}
								/>
								<div className="green-overlay p-10">
									<h2 className="text-white text-xl sm:text-3xl font-bold">
										{usp.uspName}
									</h2>
									<p className="text-white mt-7">{usp.uspDescription}</p>
								</div>
							</div>
						))}
					</div>
					<div className="w-full space-y-4">
						{USPsArray.slice(2, 4).map((usp, index) => (
							<div className="relative-container" key={`usp-card-${index}`}>
								<img
									src={usp.image}
									alt={`USP-${index}`}
									className="w-full object-cover rounded-3xl"
									style={{ height: usp.height }}
								/>
								<div className="green-overlay p-10">
									<h2 className="text-white text-xl sm:text-3xl font-bold">
										{usp.uspName}
									</h2>
									<p className="text-white mt-7">{usp.uspDescription}</p>
								</div>
							</div>
						))}
					</div>
					<div className="w-full space-y-4">
						{USPsArray.slice(4).map((usp, index) => (
							<div className="relative-container" key={`usp-card-${index}`}>
								<img
									src={usp.image}
									alt={`USP-${index}`}
									className="w-full object-cover rounded-3xl"
									style={{ height: usp.height }}
								/>
								<div className="green-overlay p-10">
									<h2 className="text-white text-xl sm:text-3xl font-bold">
										{usp.uspName}
									</h2>
									<p className="text-white mt-7">{usp.uspDescription}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div
					data-aos="zoom-out"
					className="lg:hidden grid md:grid-cols-2 gap-5 mt-16"
				>
					{USPsArray.map((usp, index) => (
						<div className="relative-container" key={`usp-card-${index}`}>
							<img
								src={usp.image}
								alt={`USP-${index}`}
								className="w-full h-full object-cover rounded-3xl"
							/>
							<div className="green-overlay p-5">
								<h2 className="text-white text-xl sm:text-3xl font-bold">
									{usp.uspName}
								</h2>
								<p className="text-white mt-5">{usp.uspDescription}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
