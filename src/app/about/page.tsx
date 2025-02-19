import ContactElement from "../contact/ContactElement";
import { IconCertificate } from "@tabler/icons-react";
import Link from "next/link";
// import CopyToClipboard from "@/components/CopyToClipboard";

const iconSize = 36;
const clipboardClass = "flex flex-row gap-2 items-center";
const linkClass = "flex items-center gap-2 hover:underline hover:underline-offset-4";

export default function AboutMe() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<ol className="flex flex-wrap gap-8">
				<ContactElement
					icon={<IconCertificate
						className='grayscale'
						aria-label="Email icon"
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
			</ol>
			<Link href="about/omgilovemywife">
				*
			</Link>
		</main>
	);
}
