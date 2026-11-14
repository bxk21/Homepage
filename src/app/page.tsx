import YearsOfExperience from "@/components/YearsOfExperience";

export default function Home() {
	return (
		<main className="size-full flex flex-col gap-8 text-center items-center justify-center">
			<div className="text-6xl font-bold tracking-tight text-(--text)">
				Hi! I&apos;m&thinsp;
				<div className="inline text-(--accent)">
					Bo Kang
				</div>
			</div>
			<h3>
				Welcome to my portfolio.
			</h3>
			<h3>
				I&apos;m a Fullstack Software Engineer with <YearsOfExperience skill="career"/> of experience. <br/>
				I specialize in the Node-React-Redux tech stack, with experience in Java and APIs.
			</h3>
		</main>
	);
}
