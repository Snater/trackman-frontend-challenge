import menuConfig, {type MenuItem} from '@/menuConfig';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import type {NavItem} from '@/components/Navbar/types.ts';
import {useTranslation} from 'react-i18next';

export default function Navbar() {
	const {t} = useTranslation();

	const convertToNavigationConfig = (menuConfig: MenuItem[]): NavItem[] => {
		const visibleItems = menuConfig.filter(item => item.i18nLabel && item.path);

		return visibleItems.map(item => ({
			children: item.children && convertToNavigationConfig(item.children),
			label: t(item.i18nLabel as string),
			path: item.path as string,
		}));
	}

	const menu = convertToNavigationConfig(menuConfig[0].children as MenuItem[]);

	return (
		<section className="content-center bg-accent fixed min-h-[56px] top-0 w-full z-10">
			<div className="mx-auto px-2 py-1 max-w-full md:container">
				<DesktopMenu menu={menu}/>
				<MobileMenu menu={menu}/>
			</div>
		</section>
	);
};
