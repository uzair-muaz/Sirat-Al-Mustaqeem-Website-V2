import React from 'react';

const WeeklySchedule = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 flex flex-col justify-center items-center py-16 w-full">
			<h1 className="text-custom2 text-4xl font-bold mt-2 text-center">
				Weekly Schedule
			</h1>
			<div className="border border-custom6 w-full max-w-[280px] mt-3" />

			<div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10 w-full mt-10 sm:mt-16">
				<div data-aos="fade-down" className="w-full flex flex-col gap-3">
					<CalendarHeader text="MONDAY" />
					<CalendarBody text="Circle Time" />
					<CalendarBody text="Physical Activities" />
					<CalendarBody text="Language Class" />
					<CalendarBody text="Mathematics" />
					<CalendarBody text="-" />
				</div>
				<div
					data-aos="fade-down"
					data-aos-delay={300}
					className="w-full flex flex-col gap-3"
				>
					<CalendarHeader text="TUESDAY" />
					<CalendarBody text="Circle Time" />
					<CalendarBody text="Physical Activities" />
					<CalendarBody text="Language Class" />
					<CalendarBody text="Mathematics" />
					<CalendarBody text="-" />
				</div>
				<div
					data-aos="fade-down"
					data-aos-delay={600}
					className="w-full flex flex-col gap-3"
				>
					<CalendarHeader text="WEDNESDAY" />
					<CalendarBody text="Circle Time" />
					<CalendarBody text="Physical Activities" />
					<CalendarBody text="Character Goals" />
					<CalendarBody text="Free Play" />
					<CalendarBody text="Activity Based Learning" />
				</div>
				<div
					data-aos="fade-down"
					data-aos-delay={900}
					className="w-full flex flex-col gap-3"
				>
					<CalendarHeader text="THURSDAY" />
					<CalendarBody text="Circle Time" />
					<CalendarBody text="Physical Activities" />
					<CalendarBody text="Language Class" />
					<CalendarBody text="Mathematics" />
					<CalendarBody text="-" />
				</div>
				<div
					data-aos="fade-down"
					data-aos-delay={1200}
					className="w-full flex flex-col gap-3"
				>
					<CalendarHeader text="FRIDAY" />
					<CalendarBody text="Circle Time" />
					<CalendarBody text="Physical Activities" />
					<CalendarBody text="Story Circles" />
					<CalendarBody text="Critical Skills Development" />
					<CalendarBody text="-" />
				</div>
			</div>
		</div>
	);
};

export default WeeklySchedule;

function CalendarHeader({ text }) {
	return (
		<div className="bg-custom10 rounded-lg text-center p-3 text-white">
			{text}
		</div>
	);
}

function CalendarBody({ text }) {
	return (
		<div className="bg-white rounded-lg md:text-sm lg:text-base text-center p-3 text-[#595959] ">
			{text}
		</div>
	);
}
