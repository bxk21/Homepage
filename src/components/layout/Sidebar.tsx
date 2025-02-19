import { IconFileCv, IconHome, IconMailbox, IconMenu3 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const iconSize = 24;

export default function SideBar() {
	return (
		<div className='w-1/5 bg-[--accented-background] border-[--altForeground] border rounded-md p-4'>
			<div className="grid place-items-center">
				<Image
					className="border-4 rounded-full"
					src="/photos/side.jpg"
					alt="Bo Kang"
					width='1000'
					height='1000'
					priority
				/>
			</div>
			<div className="text-3xl p-4 text-center">
				Bo Kang
			</div>
			<ol className="text-lg sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-2">
				<li className="mb-2">
					<Link href="/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						<IconHome
							className='grayscale'
							aria-label="Home icon"
							size={iconSize}
						/>
						Home
					</Link>
				</li>
				<li className="mb-2">
					<Link href="/contact" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						<IconMailbox
							className='grayscale'
							aria-label="Mailbox icon"
							size={iconSize}
						/>
						Contact
					</Link>
				</li>
				<li className="mb-2">
					<Link href="/resume" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						<IconFileCv
							className="grayscale"
							aria-label="File CV icon"
							size={iconSize}
						/>
						Resume
					</Link>
				</li>
				<li className="mb-2">
					<Link href="/about" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						<IconMenu3
							className='grayscale'
							aria-label="Menu icon"
							size={iconSize}
						/>
						About
					</Link>
				</li>
				{/* <li className="mb-2">
					<Link href="">
						Linkedin
					</Link>
				</li> */}
			</ol>
		</div>
	);
}
