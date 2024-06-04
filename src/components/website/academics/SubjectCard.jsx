const SubjectCard = ({ name, description, index }) => {
	return (
		<>
			<div
				data-aos="fade-right"
				data-aos-delay={(index + 1) * 150}
				className={`w-full px-5 py-6 border-2 border-[#D2E18F] rounded-xl`}
			>
				<h1 className="text-[#013630] text-2xl font-semibold capitalize">
					{name}
				</h1>
				<p className="text-[#606060] mt-2">{description}</p>
			</div>
		</>
	);
};

export default SubjectCard;
