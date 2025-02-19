export default function OneDriveIFrame({ link }: { link: string }) {
	return (
		<main className="size-full">
			<iframe
				src={link}
				width="100%"
				height="100%"
			/>
			<div className='w-full flex justify-between text-sm'>
				<div/>
				↑ Download
			</div>
		</main>
	);
}
