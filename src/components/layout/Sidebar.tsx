import { IconFileCv, IconHome, IconMailbox, IconMenu3 } from "@tabler/icons-react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";

const iconSize = 36;

export default function SideBar() {
	return (
		<div className='size-full flex flex-col items-end lg:items-stretch bg-(--accented-background) border border-(--altForeground) rounded-md py-4 gap-4'>
			<div className="lg:px-4 w-(--sidebar-width-hidden) lg:w-(--sidebar-width) transition-all duration-500">
				<Image
					className="border-4 rounded-full"
					src="/photos/side.jpg"
					alt="Bo Kang"
					width='1000'
					height='1000'
					priority
				/>
			</div>
			<div className="text-3xl text-center px-4 hidden lg:inline">
				Bo Kang
			</div>
			<div className="text-3xl text-center px-4 lg:hidden">
				Bo
			</div>
			<ol className="text-xl sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-4">
				<SidebarLink
					href="/"
					icon={<IconHome
						className='grayscale'
						aria-label="Home icon"
						size={iconSize}
					/>}>
					Home
				</SidebarLink>
				<SidebarLink
					href="/contact"
					icon={<IconMailbox
						className='grayscale'
						aria-label="Mailbox icon"
						size={iconSize}
					/>}>
					Contact
				</SidebarLink>
				<SidebarLink
					href="/resume" prefetch={true}
					icon={<IconFileCv
						className="grayscale"
						aria-label="File CV icon"
						size={iconSize}
					/>}>
					Resume
				</SidebarLink>
				<SidebarLink
					href="/about"
					icon={<IconMenu3
						className='grayscale'
						aria-label="Menu icon"
						size={iconSize}
					/>}>
					About
				</SidebarLink>
			</ol>
		</div>
	);
}
