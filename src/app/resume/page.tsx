import OneDriveIFrame from "@/components/OneDriveIframe";
import { Metadata } from "next";

export default function Resume() {
	return (
		<OneDriveIFrame link="https://1drv.ms/w/c/7116b0610e620974/IQT4gdGNjJ33Sb-QdMGsMbquAXMVq-y799B2nJtYOQWOpHk"/>
	);
}

export const metadata: Metadata = {
	title: "Resume",
	description: "My Resume"
};
