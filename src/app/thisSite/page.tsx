import ContactElement from "@/components/ContactElement";
import { IconClipboardCopy, IconLayoutSidebar, IconMovie, IconPalette, IconSunMoon } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

export default function AboutThisSite() {
	return (
		<main className="flex flex-col gap-8">
			<h1>
				About this Site
			</h1>
			<h3>
				This site is written in Typescript and built on Nextjs: Node, React, and TailwindCSS. <br/>
				It&apos;s written with <Link href={'https://claude.com/claude-code'} className="text-(--accent)">Claude Code</Link>. <br/>
				The code is hosted on <Link href={'https://github.com/bxk21/Homepage'} className="text-(--accent)">Github</Link>. <br/>
				The page is built by <Link href={'https://vercel.com/bo-kangs-projects/homepage'} className="text-(--accent)">Vercel</Link>.
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
					body={<p>
						Reads the user&apos;s default light/dark theme using <code>color-scheme: light dark;</code> <br/>
						Switching themes reveals the new one in a circle growing from the button, using the View Transitions API. <br/>
						Dropdown menu animates fading in and out and clicks-through when hidden.
					</p>}
				/>
				<ContactElement
					icon={<IconPalette
						className='grayscale'
						aria-label="Palette Icon"
						size='20'
					/>}
					name="Color Palettes"
					body={<p>
						Four palettes, each with a light and a dark version, picked from the Palette menu. <br/>
						Each palette is one block of CSS variables, and the menu&apos;s swatches preview a palette by applying that block to the swatch alone.
					</p>}
				/>
				<ContactElement
					icon={<IconLayoutSidebar
						className='grayscale'
						aria-label="Sidebar Icon"
						size='20'
					/>}
					name="Hiding Sidebar"
					body={<p>
						On mobile devices or screens narrower than 64rem, the sidebar will animate and shrink down to an icon-only size. <br/>
						The elements in the sidebar will adapt. My picture will shrink to fit. My last name will disappear. The icons will move closer to the right side.
					</p>}
				/>
				<ContactElement
					icon={<IconMovie
						className='grayscale'
						aria-label="Movie Icon"
						size='20'
					/>}
					name="Phone Number Animation"
					body={<p>
						On the <Link href="/contact" className="text-(--accent)">Contact Page</Link>&apos;s phone number section, the animated icon is actually two separate images keyframed to fade in and out at opposite timings.
					</p>}
				/>
				<ContactElement
					icon={<IconClipboardCopy
						className='grayscale'
						aria-label="Clipboard Copy Icon"
						size='20'
					/>}
					name="Copy to Clipboard"
					body={<p>
						There&apos;s certain information that a user may both want to use now or copy for later. <br/>
						I always found it annoying trying to copy around a link, trying not to click it. <br/>
						So, I implemented a copy-to-clipboard button, that puts the link into the user&apos;s clipboard when used and displays instructions when hovered.
					</p>}
				/>
				{/* TODO: fix transition of name */}
			</ol>
		</main>
	);
}

export const metadata: Metadata = {
	title: "About this Site",
	description: "Features of this site"
};
