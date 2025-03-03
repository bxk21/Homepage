import ContactElement from "@/app/contact/ContactElement";
import { IconClipboardCopy, IconLayoutSidebar, IconMovie, IconSunMoon } from "@tabler/icons-react";
import Link from "next/link";

export default function AboutThisSite() {
	return (
		<main className="flex flex-col gap-8">
			<h1>
				About this site
			</h1>
			<h3>
				This site is written in Typescript and built on Nextjs: Node, React, and TailwindCSS. <br/>
				The code is hosted on <Link href={'https://github.com/bxk21/Homepage'} className="text-(--primary)">Github</Link>. <br/>
				The page is built by <Link href={'https://vercel.com/bo-kangs-projects/homepage'} className="text-(--primary)">Vercel</Link>.
			</h3>
			<h1>
				Custom Self Written Features
			</h1>
			<ol className="flex flex-wrap gap-8">
				<ContactElement
					icon={<IconSunMoon
						className='grayscale'
						aria-label="Default Theme Icon"
						size='20'
					/>}
					name="Color Theme Picker"
					link={<p>
						Reads the user&apos;s default light/dark theme using <code>color-scheme: light dark;</code> <br/>
						Dropdown menu animates fading in and out and clicks-through when hidden. <br/>
						I&apos;m no UX designer, so apologies if the colors are ugly.
					</p>}
				/>
				<ContactElement
					icon={<IconLayoutSidebar
						className='grayscale'
						aria-label="Sidebar Icon"
						size='20'
					/>}
					name="Hiding Sidebar"
					link={<p>
						On mobile devices or screens narrower than 64rem, the sidebar will animate and shrink down to an icon-only size. <br/>
						The elements in the sidebar will adapt. My picture will shrink to fit. My last name will disappear. The icons will move closer to the right side. The highlighted background will lose its gradient.
					</p>}
				/>
				<ContactElement
					icon={<IconMovie
						className='grayscale'
						aria-label="Movie Icon"
						size='20'
					/>}
					name="Phone Number Animation"
					link={<p>
						On the <Link href="/contact" className="text-(--primary)">Contact Page</Link>&apos;s phone number section, the animated icon is actually two separate images keyframed to fade in and out at opposite timings.
					</p>}
				/>
				<ContactElement
					icon={<IconClipboardCopy
						className='grayscale'
						aria-label="Clipboard Copy Icon"
						size='20'
					/>}
					name="Copy to Clipboard"
					link={<p>
						There&apos;s certain information that a user may both want to use now or copy for later. <br/>
						I always found it annoying trying to copy around a link, trying not to click it. <br/>
						So, I implemented a copy-to-clipboard button, that puts the link into the user&apos;s clipboard when used and displays instructions when hovered.
					</p>}
				/>
				{/* TODO:
					reduced motion https://tailwindcss.com/docs/transition-property#supporting-reduced-motion
					fix transition of name
				 */}
			</ol>
		</main>
	);
}
