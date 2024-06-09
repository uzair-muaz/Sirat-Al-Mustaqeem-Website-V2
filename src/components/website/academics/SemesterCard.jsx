import { LuClock } from 'react-icons/lu';

export function SemesterCard({
	picture,
	title,
	description,
	startDate,
	endDate,
	artFestival,
	sportLeague,
	scienceFestival,
	educator
}) {
	return (
		<div
			// data-aos="fade-up"
			className="bg-white grid sm:grid-cols-2 gap-0 rounded-3xl w-full border rounded-r-[34px]"
		>
			<div className="flex flex-col justify-start py-6 px-10">
				<h1 className="text-custom2 text-3xl font-bold">{title}</h1>
				<p className="text-custom7 mt-4">{description}</p>

				{/* --- */}
				<h3 className="text-custom8 font-medium text-lg mt-5 flex items-center gap-2">
					<LuClock className="text-xl" /> Starts From
				</h3>
				<h2 className="text-custom7 font-medium text-lg mt-1 ">{startDate}</h2>

				{/* --- */}

				{artFestival && (
					<>
						<h3 className="text-custom8 font-medium text-lg mt-5 flex items-center gap-2">
							<LuClock className="text-xl" /> Creative Arts Festival
						</h3>
						<h2 className="text-custom7 font-medium text-lg mt-1">
							{artFestival}
						</h2>
					</>
				)}

				{/* --- */}

				{scienceFestival && (
					<>
						<h3 className="text-custom8 font-medium text-lg mt-5 flex items-center gap-2">
							<LuClock className="text-xl" /> Innovation and Science Festival
						</h3>
						<h2 className="text-custom7 font-medium text-lg mt-1">
							{scienceFestival}
						</h2>
					</>
				)}

				{/* --- */}

				<h3 className="text-custom8 font-medium text-lg mt-5 flex items-center gap-2">
					<LuClock className="text-xl" />
					Sports League
				</h3>
				<h2 className="text-custom7 font-medium text-lg mt-1">{sportLeague}</h2>

				{/* --- */}

				<h3 className="text-custom8 font-medium text-lg mt-5 flex items-center gap-2">
					<LuClock className="text-xl" /> Ends On
				</h3>
				<h2 className="text-custom7 font-medium text-lg mt-1">{endDate}</h2>

				{/* --- */}

				<h3 className="text-custom8 font-medium text-lg mt-5 flex items-center gap-2">
					<LuClock className="text-xl" /> Parent-Educator Conference
				</h3>
				<h2 className="text-custom7 font-medium text-lg mt-1">{educator}</h2>
			</div>
			<div className="flex justify-end">
				<img
					src={picture}
					alt="circular-background"
					className=" hidden sm:block h-full object-cover rounded-3xl"
				/>
			</div>
		</div>
	);
}
