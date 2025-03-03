export default function Home() {
	return (
		<main className="size-full flex flex-col gap-8 text-center items-center justify-center">
			<div className="flex flex-row gap-3 text-6xl">
				<div className="text-(--alt-foreground)"> Hi! I&apos;m </div>
				<div className="text-(--foreground)"> Bo Kang </div>
			</div>
			<h3>
				Welcome to my portfolio.
			</h3>
			<h3>
				I&apos;m a Fullstack Software Engineer with 6 years of experience. <br/>
				I specialize in the Node-React-Redux tech stack, but also have experience with Java and Python.
			</h3>
		</main>
	);
}
