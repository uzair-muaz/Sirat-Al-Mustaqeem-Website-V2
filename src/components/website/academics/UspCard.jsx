const UspCard = ({ icon, title, description, index }) => {
	const borderPrint = index === 3 || index === 6 || index === 9 ? false : true;
	return (
		<>
			<div
				className={`hidden md:block w-full p-5`}
				style={{
					borderRight: borderPrint && '1px solid #e5e7eb'
				}}
			>
				<div className="flex flex-col gap-5 items-center text-center">
					<img src={icon} alt="icon-image" className="w-[50px] h-[50px]" />
					<h1 className="text-[#013630] text-lg font-medium capitalize">
						{title}
					</h1>
					<p className="text-[#52525B]">{description}</p>
				</div>
			</div>

			<div
				className={`block md:hidden w-full p-5 `}
				style={{
					borderBottom: '1px solid #e5e7eb',
					borderTop: index === 1 && '1px solid #e5e7eb'
				}}
			>
				<div className="flex flex-col gap-5 items-center text-center">
					<img src={icon} alt="icon-image" className="w-[50px] h-[50px]" />
					<h1 className="text-[#013630] text-lg font-medium capitalize">
						{title}
					</h1>
					<p className="text-[#52525B]">{description}</p>
				</div>
			</div>
		</>
	);
};

export default UspCard;
