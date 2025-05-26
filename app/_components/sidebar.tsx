import { useEffect } from "react";
import Link from "next/link";
import {
	FaHome,
	FaDatabase,
	FaTasks,
	FaCogs,
	FaFlask,
	FaGraduationCap,
	FaPlus,
} from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean ; onClose: () => void;
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<>
			{/* Backdrop */}
			<div
				className={`fixed inset-0 z-20 bg-black transition-opacity duration-300 ${
					isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
				}`}
				onClick={onClose}
			/>

			{/* Sidebar */}
			<div
				className={`fixed font-lato inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-all duration-300 ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}>
				{/* Header Section */}
				<div className="flex items-center justify-between p-4 border-b">
					<div className="flex items-center space-x-2">
						<span className="text-3xl font-semibold text-primaryBlue">
							genum
						</span>
					</div>
					<button onClick={onClose} className="focus:outline-none">
						<RiCloseLargeFill className="h-6 w-8 text-gray-700 hover:text-black" />
					</button>
				</div>

				{/* Create Button */}
				<div className="flex items-center justify-center mt-6 p-4">
					<button className="flex items-center w-[80%] px-4 py-2 text-black border border-gray-300 rounded-2xl hover:bg-gray-100 focus:outline-none">
						<FaPlus className="text-primaryBlue text-3xl mr-4" />
						<span className="text-xl text-right">Create</span>
					</button>
				</div>

				{/* Sidebar Content */}
				<nav className="p-4">
					<ul className="space-y-4">
						{/* Sidebar Links */}
						<li>
							<Link
								href="/"
								className="flex items-center space-x-3 p-3 text-lg font-medium text-gray-700 hover:text-primaryGreen hover:bg-gray-50 rounded-lg transition-colors duration-200">
								<span className="text-2xl">
									<FaHome />
								</span>
								<span>Home</span>
							</Link>
						</li>

						<li>
							<Link
								href="/datasets"
								className="flex items-center space-x-3 p-3 text-lg font-medium text-gray-700 hover:text-primaryGreen hover:bg-gray-50 rounded-lg transition-colors duration-200">
								<span className="text-2xl">
									<FaDatabase />
								</span>
								<span>Datasets</span>
							</Link>
						</li>

						<li>
							<div className="flex items-center space-x-3 p-3 text-lg font-medium text-gray-700 rounded-lg transition-colors duration-200 cursor-not-allowed">
								<span className="text-2xl">
									<FaTasks />
								</span>
								<span>Challenges</span>
							</div>
						</li>
						<li>
							<div className="flex items-center space-x-3 p-3 text-lg font-medium text-gray-700 rounded-lg transition-colors duration-200 cursor-not-allowed">
								<span className="text-2xl">
									<FaCogs />
								</span>
								<span>Models</span>
							</div>
						</li>
						<li>
							<div className="flex items-center space-x-3 p-3 text-lg font-medium text-gray-700 rounded-lg transition-colors duration-200 cursor-not-allowed">
								<span className="text-2xl">
									<FaFlask />
								</span>
								<span>Research</span>
							</div>
						</li>
						<li>
                        <Link
								href="/learning"
								className="flex items-center space-x-3 p-3 text-lg font-medium text-gray-700 hover:text-primaryGreen hover:bg-gray-50 rounded-lg transition-colors duration-200">
								<span className="text-2xl">
									<FaGraduationCap />
								</span>
								<span>Learn</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Sidebar;