import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IoClose } from 'react-icons/io5';

import { navLinks } from '@/utils/website/constants';

const Sidebar = ({ isOpen, handleCloseSidebar }) => {
	const currentURL = usePathname();

	return (
		<div
			className={`fixed transform bg-custom9 transition duration-700 h-screen z-50 overflow-hidden  w-full top-0  ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<div className="h-screen overflow-x-hidden pb-20 hide-scrollbar ">
				<div className="flex justify-between items-center pl-1 pr-5 py-4 border-b border-custom3">
					<img className="" src="/website-assets/nav-logo.svg" alt="..." />
					<IoClose
						className="text-3xl text-custom3 md:text-white hover:text-custom3 transition duration-700 cursor-pointer"
						onClick={handleCloseSidebar}
					/>
				</div>

				<ul className="flex flex-col gap-8 w-fit px-6 mt-4">
					{navLinks.map(link => (
						<Link key={link.route} href={link.route} legacyBehavior>
							<a
								onClick={handleCloseSidebar}
								className={`text-sm   ${
									currentURL === link.route
										? 'text-custom3'
										: 'hover:text-custom3 text-white '
								} `}
							>
								{link.label}
							</a>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
