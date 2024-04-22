import { LuClock } from 'react-icons/lu';

export function SemesterCard({
	picture,
	title,
	description,
	startDate,
	endDate
}) {
	return (
		<div className="bg-white grid sm:grid-cols-2 gap-0 rounded-3xl w-full ">
			<div className="flex flex-col justify-start p-6">
				<h1 className="text-custom3 text-3xl font-bold">{title}</h1>
				<p className="text-custom7 mt-4">{description}</p>
				<h3 className="text-custom3 font-medium text-lg mt-5 flex items-center gap-2">
					<LuClock className="text-xl" /> Starts From
				</h3>
				<h2 className="text-custom7 font-medium text-xl mt-1 ">{startDate}</h2>
				<h3 className="text-custom3 font-medium text-lg mt-5 flex items-center gap-2">
					<LuClock className="text-xl" /> Ends On
				</h3>
				<h2 className="text-custom7 font-medium text-xl mt-1">{endDate}</h2>
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
