import { JSX } from "react";

export default function ContactElement({ icon, name, link }: { icon: JSX.Element, name: string, link: JSX.Element }){
	return (
		<li className="flex flex-row gap-2 items-center bg-(--accented-background) h-36 min-w-80">
			<div className="border border-(--altForeground) rounded-md p-4 m-8">
				{icon}
			</div>
			<div className="flex flex-col gap-2 text-lg m-8 ml-0">
				<div className="font-bold text-(--invert-scheme)">
					{name}
				</div>
				<div className="">
					{link}
				</div>
			</div>
		</li>
	);
}