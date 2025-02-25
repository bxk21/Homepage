import SideBar from "./Sidebar";

// const shownWidth = 20; // 20 rem = 320px = 80 --spacing
// const hiddenWidth = 4; // 4 rem = 64 px = 16 --spacing units (used by tailwind, equal to a quarter rem)

export default function HideBar() {
	return (
		<div className='w-(--sidebar-width-hidden) lg:w-(--sidebar-width) transition-all duration-500 flex-none'>
			<div className='w-(--sidebar-width) h-full fixed transition-all duration-500 -translate-x-[calc(var(--sidebar-width)-var(--sidebar-width-hidden))] lg:translate-none'>
				<SideBar/>
			</div>
		</div>
	);
}
