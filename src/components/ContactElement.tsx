import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { JSX } from "react";

type Props = {
	icon: JSX.Element,
	name: string,
	body?: JSX.Element,
	href?: Url
};

export default function ContactElement({ icon, name, body, href }: Props){
	return (
		<li className="flex flex-row gap-2 items-center bg-(--accented-background) min-h-36 min-w-96">
			<div className="border border-(--alt-foreground) rounded-md p-4 m-8">
				{icon}
			</div>
			<div className="flex flex-col gap-2 m-8 ml-0">
				<h2>
					{ href ? <Link href={href} className="hover:underline hover:underline-offset-4">
						{name}
					</Link> : name }
				</h2>
				<h3>
					{body}
				</h3>
			</div>
		</li>
	);
}
