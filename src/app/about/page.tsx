import ContactElement from "@/components/ContactElement";
import YearsOfExperience from "@/components/YearsOfExperience";
import { Skill } from "@/lib/experience";
import { Icon, IconBowl, IconBrandAws, IconBrandDocker, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandPython, IconBrandReact, IconBrandRedux, IconBrandSass, IconBrandStorybook, IconBrandTailwind, IconBrandTypescript, IconCertificate, IconChessKnight, IconCloud, IconComponents, IconDatabase, IconEPassport, IconIdBadge2, IconMap2, IconPower, IconTestPipe, IconWebhook, IconWorldPin } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

const iconSize = 36;
const linkClass = "hover:underline hover:underline-offset-4";

// Two icons on one card take turns fading in and out.
type SkillCard = { name: string, skill: Skill, icons: [Icon, string] | [Icon, string, Icon, string] };

const frontendSkills: SkillCard[] = [
	{ name: "Javascript / Typescript", skill: "javascript", icons: [IconBrandTypescript, "Typescript Icon", IconBrandJavascript, "Javascript Icon"] },
	{ name: "NodeJS / NextJS / Express", skill: "node", icons: [IconBrandNodejs, "NodeJS Icon", IconBrandNextjs, "NextJS Icon"] },
	{ name: "React: Redux / TanStack Query", skill: "react", icons: [IconBrandReact, "React Icon", IconBrandRedux, "Redux Icon"] },
	{ name: "CSS: SASS / Tailwind", skill: "css", icons: [IconBrandTailwind, "Tailwind Icon", IconBrandSass, "Sass Icon"] },
	{ name: "Material UI / MUI X", skill: "materialUi", icons: [IconComponents, "Components Icon"] },
	{ name: "Maps: deck.gl / MapLibre / Google Maps", skill: "maps", icons: [IconMap2, "Map Icon", IconWorldPin, "Globe Pin Icon"] },
	{ name: "Testing: Playwright / Jest / Storybook", skill: "testing", icons: [IconTestPipe, "Test Tube Icon", IconBrandStorybook, "Storybook Icon"] },
];

const backendSkills: SkillCard[] = [
	{ name: "Python: FastAPI / Pydantic", skill: "python", icons: [IconBrandPython, "Python Icon"] },
	{ name: "Java", skill: "java", icons: [IconBowl, "Bowl Icon"] },
	{ name: "Spring Boot", skill: "springBoot", icons: [IconPower, "Power Icon"] },
	{ name: "Databases: PostgreSQL / BigQuery / MongoDB / Redis", skill: "databases", icons: [IconDatabase, "Database Icon", IconBrandMongodb, "MongoDB Icon"] },
	{ name: "GCP: Cloud Run / Pub/Sub / BigQuery · AWS: SES / SNS", skill: "cloud", icons: [IconCloud, "Cloud Icon", IconBrandAws, "AWS Icon"] },
	{ name: "Docker", skill: "docker", icons: [IconBrandDocker, "Docker Icon"] },
];

function SkillIcons({ icons }: { icons: SkillCard['icons'] }) {
	const [First, firstLabel, Second, secondLabel] = icons;
	if (!Second) {
		return <First className='grayscale' aria-label={firstLabel} size={iconSize}/>;
	}
	return <div className="relative">
		<First className='grayscale fade-in-out' aria-label={firstLabel} size={iconSize}/>
		<Second className='grayscale fade-out-in absolute top-0' aria-label={secondLabel} size={iconSize}/>
	</div>;
}

function SkillList({ skills }: { skills: SkillCard[] }) {
	return (
		<ol className="flex flex-wrap gap-8">
			{skills.map(({ name, skill, icons }) => (
				<ContactElement
					key={skill}
					icon={<SkillIcons icons={icons}/>}
					name={name}
					body={<div>
						<YearsOfExperience skill={skill} capitalize/> of Experience
					</div>}
				/>
			))}
		</ol>
	);
}

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
				<SkillList skills={frontendSkills}/>
			</section>
			<section about="Skills - Backend & Cloud">
				<h1> Skills - Backend & Cloud </h1>
				<SkillList skills={backendSkills}/>
			</section>
			<section about="Projects">
				<h1> Projects </h1>
				<ol className="flex flex-wrap gap-8">
					<ContactElement
						icon={<IconWebhook
							className='grayscale'
							aria-label="Webhook icon"
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
