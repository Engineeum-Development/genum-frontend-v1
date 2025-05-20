"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "./sidebar";
import { LuMenu } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);

	const searchRef = useRef<HTMLDivElement>(null);

useEffect(() => {
	const handleClickOutside = (event: MouseEvent) => {
		if (
			searchRef.current &&
			!searchRef.current.contains(event.target as Node)
		) {
			setSearchOpen(false);
		}
	};

	document.addEventListener("mousedown", handleClickOutside);
	return () => {
		document.removeEventListener("mousedown", handleClickOutside);
	};
}, []);

	return (
		<header className="fixed w-full left-0 top-0 flex items-center justify-between font-lato px-4 md:px-20 py-4 bg-white text-black border-b-2 select-none z-50">
			{/*  Sidebar Button and Logo */}
			<div className="flex justify-center items-center gap-24">
				<button
					className="text-gray-600 text-3xl focus:outline-none"
					onClick={() => setSidebarOpen(true)}>
					<LuMenu />
				</button>
				<span className="text-3xl font-semibold text-primaryBlue">
					genum
				</span>
			</div>

			{/*  Search Bar */}
			<div className="flex-1 hidden md:flex justify-center items-center">
				<div className="flex items-center w-[600px] relative">
					{" "}
					<FiSearch className="absolute left-3 text-gray-500 text-2xl" />
					<input
						type="text"
						placeholder="Search..."
						className="w-full pl-10 pr-4 py-2 text-gray-800 rounded-md border-2 outline-1 focus:outline-none"
					/>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="flex items-center gap-4">
				{/* Mobile Search Icon */}
				<button
					onClick={() => setSearchOpen(!searchOpen)}
					className="md:hidden text-2xl text-gray-500">
					{!searchOpen && <FiSearch />}
				</button>

				{/* Mobile Search Input */}
				{searchOpen && (
					<div className="absolute left-0 top-0 w-full bg-white p-4 flex items-center md:hidden">
						<FiSearch className="text-2xl text-gray-500" />
						<input
							type="text"
							placeholder="Search..."
							className="w-full mx-2 py-2 focus:outline-none"
							autoFocus
						/>
						<button onClick={() => setSearchOpen(false)}>
							<IoMdClose className="text-2xl" />
						</button>
					</div>
				)}

				{/* Desktop Buttons */}
				<div className="hidden md:flex gap-4">
				<Link href="/auth" passHref className="px-6 py-2 bg-[#4393F4] rounded-md text-white border">
                      Sign In
                </Link>
					<button className="px-6 py-2 bg-primaryBlue rounded-md text-white">
						Register
					</button>
				</div>
			</div>

			<Sidebar
				isOpen={sidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>
		</header>
	);
};

export default Navbar;