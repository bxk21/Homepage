import Link from "next/link";

export default function OneDriveIFrame({ link, dlLink }: { link: string, dlLink?: string }) {
	return (
		<main className="size-full">
			<iframe
				src={link}
				width="100%"
				height="100%"
			/>
			<div className='w-full flex justify-between text-sm'>
				<div/>
				{dlLink ? <Link href={dlLink}>
					Download
				</Link> :
					"↑ Download"
				}
			</div>
		</main>
	);
}
