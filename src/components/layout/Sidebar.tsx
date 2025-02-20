import { IconFileCv, IconHome, IconMailbox, IconMenu3 } from "@tabler/icons-react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";

const iconSize = 36;

export default function SideBar() {
	return (
		<div className='flex flex-col w-1/5 bg-[--accented-background] border-[--altForeground] border rounded-md py-4 gap-4'>
			<div className="grid place-items-center px-4">
				<Image
					className="border-4 rounded-full"
					src="/photos/side.jpg"
					alt="Bo Kang"
					width='1000'
					height='1000'
					priority
				/>
			</div>
			<div className="text-3xl text-center px-4">
				Bo Kang
			</div>
			<ol className="text-xl sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-4">
				<SidebarLink href="/">
					<IconHome
						className='grayscale'
						aria-label="Home icon"
						size={iconSize}
					/>
					Home
				</SidebarLink>
				<SidebarLink href="/contact">
					<IconMailbox
						className='grayscale'
						aria-label="Mailbox icon"
						size={iconSize}
					/>
					Contact
				</SidebarLink>
				<SidebarLink href="/resume" prefetch={true}>
					<IconFileCv
						className="grayscale"
						aria-label="File CV icon"
						size={iconSize}
					/>
					Resume
				</SidebarLink>
				<SidebarLink href="/about">
					<IconMenu3
						className='grayscale'
						aria-label="Menu icon"
						size={iconSize}
					/>
					About
				</SidebarLink>
			</ol>
		</div>
	);
}
