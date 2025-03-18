import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HideBar from "@/components/layout/Hidebar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className='size-full flex flex-row'>
					<HideBar/>
					<div className="flex-col h-screen w-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
						<Header/>
						{children}
						<Footer/>
					</div>
				</div>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: {
		default: "Bo Kang's Portfolio",
		template: "%s | Bo Kang"
	},
	description: "Bo Kang's Portfolio",
};
