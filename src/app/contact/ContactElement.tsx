import { JSX } from "react";

export default function ContactElement({ icon, name, link }: { icon: JSX.Element, name: string, link: JSX.Element }){
	return (
		<li className="flex flex-row gap-2 items-center bg-[--accented-background] p-8 h-36 w-96">
			<div className="border border-[--altForeground] rounded-md p-4">
				{icon}
			</div>
			<div className="flex flex-col gap-2 text-lg">
				<div className="font-bold text-[--invert-scheme]">
					{name}
				</div>
				<div className="">
					{link}
				</div>
			</div>
		</li>
	);
}