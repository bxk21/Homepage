import ContactElement from "../contact/ContactElement";
import { IconBrandReact, IconBrandTypescript, IconCertificate, IconEPassport, IconIdBadge2 } from "@tabler/icons-react";
import Link from "next/link";
// import CopyToClipboard from "@/components/CopyToClipboard";

const iconSize = 36;
const clipboardClass = "flex flex-row gap-2 items-center";
const linkClass = "flex items-center gap-2 hover:underline hover:underline-offset-4";

export default function AboutMe() {
	return (
		<main className="flex flex-col gap-8 items-center sm:items-start">
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
					link={<div className={clipboardClass}>
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
					link={<div className={clipboardClass}>
						Secret Clearance
					</div>}
				/>
				<ContactElement
					icon={<IconEPassport
						className='grayscale'
						aria-label="Electronic Passport icon"
						size={iconSize}
					/>}
					name="Citizenship"
					link={<div className={clipboardClass}>
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
					link={<div className={clipboardClass}>
						<Link href="about/thisSite" className={linkClass}>
							5 Years of Experience
						</Link>
					</div>}
				/>
				<ContactElement
					icon={<IconBrandTypescript
						className='grayscale'
						aria-label="Typescript Icon"
						size={iconSize}
					/>}
					name="Javascript / Typescript"
					link={<div className={clipboardClass}>
						6 Years of Experience
					</div>}
				/>
				{/* <ContactElement
					icon={<IconEPassport
						className='grayscale'
						aria-label="Electronic Passport icon"
						size={iconSize}
					/>}
					name="Citizenship"
					link={<div className={clipboardClass}>
						United States Citizen
					</div>}
				/> */}
			</ol>
			<Link href="about/omgilovemywife">
				*
			</Link>
		</main>
	);
}
