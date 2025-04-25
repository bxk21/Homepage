import ContactElement from "@/components/ContactElement";
import CopyToClipboard from "@/components/CopyToClipboard";
import Link from "next/link";
import { IconPhone, IconMail, IconMessage, IconBrandLinkedin, IconBrandGithub, IconMapPin } from "@tabler/icons-react";
import { Metadata } from "next";

const iconSize = 36;
const clipboardClass = "flex flex-row gap-2 items-center";
const linkClass = "hover:underline hover:underline-offset-4";

export default function Contact() {
	return (
		<main className="flex flex-col gap-8">
			<h1>
				Contact me!
			</h1>
			<h3>
				For the fastest response, text me weekdays 9am-5pm Eastern.
			</h3>
			<ol className="flex flex-wrap gap-8">
				<ContactElement
					icon={<div className="relative">
						<IconPhone
							className='grayscale fade-in-out'
							aria-label="Phone icon"
							size={iconSize}
						/>
						<IconMessage
							className="grayscale fade-out-in absolute top-0"
							aria-label="Texting icon"
							size={iconSize}
						/>
					</div>}
					name="Phone"
					body={<div className={clipboardClass}>
						<Link href="tel:+17349850668" className={linkClass}>
							+1 (734) 985-0668
						</Link>
						<CopyToClipboard data="+17349850668"/>
					</div>}
				/>
				<ContactElement
					icon={<IconMail
						className='grayscale'
						aria-label="Email icon"
						size={iconSize}
					/>}
					name="Email"
					body={<div className={clipboardClass}>
						<Link href="mailto:kujile6@gmail.com" className={linkClass}>
							kujile6@gmail.com
						</Link>
						<CopyToClipboard data="kujile6@gmail.com"/>
					</div>}
				/>
				<ContactElement
					icon={<IconBrandLinkedin
						className='grayscale'
						aria-label="Linkedin icon"
						size={iconSize}
					/>}
					name="Linkedin"
					body={<Link href="https://www.linkedin.com/in/bo-kang-6a5881b2/" className={linkClass}>
						Bo Kang
					</Link>}
				/>
				<ContactElement
					icon={<IconBrandGithub
						className='grayscale'
						aria-label="Github icon"
						size={iconSize}
					/>}
					name="Github"
					body={<Link href="https://github.com/bxk21/" className={linkClass}>
						bxk21
					</Link>}
				/>
				<ContactElement
					icon={<IconMapPin
						className='grayscale'
						aria-label="Map Pin icon"
						size={iconSize}
					/>}
					name="Address"
					body={<Link href="https://www.google.com/maps/place/Ann+Arbor,+MI+48105" className={linkClass}>
						Ann Arbor, MI 48105
					</Link>}
				/>
			</ol>
		</main>
	);
}

export const metadata: Metadata = {
	title: "Contact Info",
	description: "Contact Info and Links"
};
