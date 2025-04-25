import ContactElement from "@/components/ContactElement";
import { IconBrandReact, IconBrandTypescript, IconCertificate, IconChessKnight, IconDatabase, IconEPassport, IconIdBadge2, IconWebhook } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

const iconSize = 36;
const linkClass = "hover:underline hover:underline-offset-4";

export default function AboutMe() {
	return (
		<main className="flex flex-col gap-8">
			<h1>
				Credentials
			</h1>
			<ol className="flex flex-wrap gap-8">
				<ContactElement
					icon={<IconCertificate
						className='grayscale'
						aria-label="Certificate icon"
						size={iconSize}
					/>}
					name="CompTIA Security+ CE"
					body={<div>
						<Link href="https://1drv.ms/b/c/7116b0610e620974/EZxhO9EuGxNOhrpOxG_mImABj__dRkmRUX2YP_B6cBWyqw?e=A7MJMX" className={linkClass}>
							Criteria: SY0-701 <br/>
							Code: 4V4DK1TQY2E117SW <br/>
							Expiration: 11/27/2027
						</Link>
					</div>}
				/>
				<ContactElement
					icon={<IconIdBadge2
						className='grayscale'
						aria-label="ID Badge icon"
						size={iconSize}
					/>}
					name="DoD Security Clearance"
					body={<div>
						Confidential Clearance
					</div>}
				/>
				<ContactElement
					icon={<IconEPassport
						className='grayscale'
						aria-label="Electronic Passport icon"
						size={iconSize}
					/>}
					name="Citizenship"
					body={<div>
						United States Citizen
					</div>}
				/>
			</ol>
			<h1>
				Skills and Specializations
			</h1>
			<ol className="flex flex-wrap gap-8">
				<ContactElement
					icon={<IconBrandReact
						className='grayscale'
						aria-label="React icon"
						size={iconSize}
					/>}
					name="React Development"
					body={<div>
						5 Years of Experience
					</div>}
				/>
				<ContactElement
					icon={<IconBrandTypescript
						className='grayscale'
						aria-label="Typescript Icon"
						size={iconSize}
					/>}
					name="Javascript / Typescript"
					body={<div>
						6 Years of Experience
					</div>}
				/>
			</ol>
			<h1>
				Projects
			</h1>
			<ol className="flex flex-wrap gap-8">
				<ContactElement
					icon={<IconWebhook
						className='grayscale'
						aria-label="React icon"
						size={iconSize}
					/>}
					name="This Website"
					href="thisSite"
					body={<div>
						<Link href="thisSite" className={linkClass}>
							Github
						</Link>
					</div>}
				/>
				<ContactElement
					icon={<IconDatabase
						className='grayscale'
						aria-label="Database Icon"
						size={iconSize}
					/>}
					name="Sheets Database"
					href="https://sheetsdatabaseapi.vercel.app"
					body={<div>
						<Link href="https://github.com/bxk21/rtkq" className={linkClass}>
							Github
						</Link>
					</div>}
				/>
				<ContactElement
					icon={<IconChessKnight
						className='grayscale'
						aria-label="Chess Knight Icon"
						size={iconSize}
					/>}
					name="Dungeon Crawler"
					body={<div>
						Written in my Realtime Strategy Game Engine <br/>
						<Link href="https://github.com/bxk21/notRTS" className={linkClass}>
							Github
						</Link>
					</div>}
				/>
			</ol>
			<Link href="about/omgilovemywife">
				*
			</Link>
		</main>
	);
}

export const metadata: Metadata = {
	title: "About",
	description: "About Me"
};
