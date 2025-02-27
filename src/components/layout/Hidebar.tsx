import SideBar from "./Sidebar";

export default function HideBar() {
	return (
		<div className='w-(--sidebar-width-hidden) lg:w-(--sidebar-width) transition-all duration-500 ease-in-out flex-none'>
			<div className='w-(--sidebar-width) h-full fixed transition-all duration-500 ease-in-out -translate-x-[calc(var(--sidebar-width)-var(--sidebar-width-hidden))] lg:translate-none'>
				<SideBar/>
			</div>
		</div>
	);
}
