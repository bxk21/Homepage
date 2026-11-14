import PalettePicker from './PalettePicker';
import ThemePicker from './ThemePicker';

export default function Header() {
	return (
		<header className='w-full flex justify-end gap-2'>
			<PalettePicker/>
			<ThemePicker/>
		</header>
	);
}
