import ContactElement from "@/components/ContactElement";
import { IconBowl, IconBrandAws, IconBrandJavascript, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandRedux, IconBrandSass, IconBrandTailwind, IconBrandTypescript, IconCertificate, IconChessKnight, IconCloud, IconDatabase, IconEPassport, IconIdBadge2, IconPower, IconWebhook } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

const iconSize = 36;
const linkClass = "hover:underline hover:underline-offset-4";

export default function AboutMe() {
	return (
		<main className="flex flex-col gap-8">
			<section about="Credentials">
				<h1> Credentials </h1>
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
			</section>
			<section about="Skills - Frontend">
				<h1> Skills - Frontend </h1>
				<ol className="flex flex-wrap gap-8">
					<ContactElement
						icon={<div className="relative">
							<IconBrandTypescript
								className='grayscale fade-in-out'
								aria-label="Typescript Icon"
								size={iconSize}
							/>
							<IconBrandJavascript
								className='grayscale fade-out-in absolute top-0'
								aria-label="Javascript Icon"
								size={iconSize}
							/>
						</div>}
						name="Javascript / Typescript"
						body={<div>
							7 Years of Experience
						</div>}
					/>
					<ContactElement
						icon={<div className="relative">
							<IconBrandNodejs
								className='grayscale fade-in-out'
								aria-label="React Icon"
								size={iconSize}
							/>
							<IconBrandNextjs
								className='grayscale fade-out-in absolute top-0'
								aria-label="Redux Icon"
								size={iconSize}
							/>
						</div>}
						name="NodeJS / NextJS Development"
						body={<div>
							6 Years of Experience
						</div>}
					/>
					<ContactElement
						icon={<div className="relative">
							<IconBrandReact
								className='grayscale fade-in-out'
								aria-label="React Icon"
								size={iconSize}
							/>
							<IconBrandRedux
								className='grayscale fade-out-in absolute top-0'
								aria-label="Redux Icon"
								size={iconSize}
							/>
						</div>}
						name="React-Redux Development"
						body={<div>
							6 Years of Experience
						</div>}
					/>
					<ContactElement
						icon={<div className="relative">
							<IconBrandTailwind
								className='grayscale fade-in-out'
								aria-label="Tailwind Icon"
								size={iconSize}
							/>
							<IconBrandSass
								className='grayscale fade-out-in absolute top-0'
								aria-label="Sass Icon"
								size={iconSize}
							/>
						</div>}
						name="CSS: SASS / Tailwind"
						body={<div>
							6 Years of Experience
						</div>}
					/>
				</ol>
			</section>
			<section about="Skills - Backend & Cloud">
				<h1> Skills - Backend & Cloud </h1>
				<ol className="flex flex-wrap gap-8">
					<ContactElement
						icon={<IconBowl
							className='grayscale'
							aria-label="Bowl Icon"
							size={iconSize}
						/>}
						name="Java"
						body={<div>
							3 Years of Experience
						</div>}
					/>
					<ContactElement
						icon={<IconPower
							className='grayscale'
							aria-label="Cup Icon"
							size={iconSize}
						/>}
						name="Spring Boot"
						body={<div>
							1 Year of Experience
						</div>}
					/>
					<ContactElement
						icon={<div className="relative">
							<IconBrandAws
								className='grayscale fade-in-out'
								aria-label="AWS Icon"
								size={iconSize}
							/>
							<IconCloud
								className='grayscale fade-out-in absolute top-0'
								aria-label="Cloud Icon"
								size={iconSize}
							/>
						</div>}
						name="AWS / GCP"
						body={<div>
							1 Year of Experience
						</div>}
					/>
				</ol>
			</section>
			<section about="Projects">
				<h1> Projects </h1>
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
							<Link href="https://github.com/bxk21/Homepage" className={linkClass}>
								Github Repo
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
								Github Repo
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
								Github Repo
							</Link>
						</div>}
					/>
				</ol>
			</section>
			<section about="My Wife <3">
				<Link href="about/omgilovemywife">
					*
				</Link>
			</section>
		</main>
	);
}

export const metadata: Metadata = {
	title: "About",
	description: "About Me"
};
