import { IconCode, IconFileCv, IconHome, IconMailbox, IconMenu3 } from "@tabler/icons-react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";

const iconSize = 36;

export default function SideBar() {
	return (
		<div className='overflow-y-auto overflow-x-hidden size-full flex flex-col items-end lg:items-stretch bg-(--surface) border border-(--border) rounded-xl gap-4'>
			<div className="lg:px-4 w-(--sidebar-width-hidden) lg:w-(--sidebar-width) transition-all duration-500 ease-in-out motion-reduce:transition-none">
				<Image
					className="border-4 border-(--border) rounded-full"
					src="/photos/side.jpg"
					alt="Bo Kang"
					width='1000'
					height='1000'
					priority
				/>
			</div>
			{/* <div className="flex flex-row justify-end lg:justify-center gap-2 text-3xl text-center px-4 transition-all duration-500 ease-in-out">
				Bo
				<div className="w-0 lg:w-auto opacity-0 lg:opacity-100 pointer-events-none transition-all duration-500 ease-in-out">
					Kang
				</div>
			</div> */}
			<div className="text-3xl text-center px-4 hidden lg:inline">
				Bo Kang
			</div>
			<div className="text-3xl text-center px-4 lg:hidden">
				Bo
			</div>
			<ol className="h-full text-xl sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-4">
				<SidebarLink
					href="/"
					icon={<IconHome
						aria-label="Home icon"
						size={iconSize}
					/>}>
					Home
				</SidebarLink>
				<SidebarLink
					href="/contact"
					icon={<IconMailbox
						aria-label="Mailbox icon"
						size={iconSize}
					/>}>
					Contact
				</SidebarLink>
				<SidebarLink
					href="/resume" prefetch={true}
					icon={<IconFileCv
						aria-label="File CV icon"
						size={iconSize}
					/>}>
					Resume
				</SidebarLink>
				<SidebarLink
					href="/about"
					icon={<IconMenu3
						aria-label="Menu icon"
						size={iconSize}
					/>}>
					About
				</SidebarLink>
				<SidebarLink
					href="/thisSite"
					icon={<IconCode
						aria-label="Code icon"
						size={iconSize}
					/>}
					className="mt-auto lg:mb-8 transition-all duration-500 ease-in-out motion-reduce:transition-none"
					linkClassName="pb-3 lg:pb-2">
					This Site
				</SidebarLink>
			</ol>
		</div>
	);
}
