import Image from "next/image";
import Link from "next/link";

export default function Wife() {
	return (
		<main className="flex flex-col">
			<Link href="https://www.museye.net/">
				<Image
					src="/photos/muse.jpg"
					alt="Bo Kang"
					width='1000'
					height='1000'
					priority
				/>
			</Link>
			👀👀👀
		</main>
	);
}
