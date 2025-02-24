import SideBar from "./Sidebar";

export default function HideBar() {
	return (
		<div className='w-0 lg:w-80 transition-transform flex-none'>
			<div className='w-80 h-full fixed transition-transform -translate-x-full lg:translate-none'>
				<SideBar/>
			</div>
		</div>
	);
}
