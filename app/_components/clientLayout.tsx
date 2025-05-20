"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./Footer/Footer";

export default function ClientLayout({children}:{ children: React.ReactNode }) {
	const pathname = usePathname();

	const isAuthPage = pathname === "/auth";

	return (
		<>
			{!isAuthPage && <Navbar />}
			<main>{children}</main>
			{!isAuthPage && <Footer />}
		</>
	);
}