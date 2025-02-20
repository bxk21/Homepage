import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SideBar from "@/components/layout/Sidebar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Bo Kang",
	description: "Bo Kang's Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className='size-full flex'>
					<SideBar/>
					<div className="grid grid-rows-[20px_1fr_20px] min-h-screen h-full w-4/5 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
						<Header/>
							<div className='items-center justify-items-center'>
								{children}
							</div>
						<Footer/>
					</div>
				</div>
			</body>
		</html>
	);
}
