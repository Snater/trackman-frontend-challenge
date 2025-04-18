'use client'

import DesktopMenu from './DesktopMenu';
import type {MenuItem} from './types';
import MobileMenu from './MobileMenu';

type Props = {
	menu?: MenuItem[];
}

export default function Navbar({
	menu = [
		{title: 'Facilities', url: '/facilities'},
		{title: 'Locations', url: '/locations'},
		{title: 'Players', url: '/players'},
		{title: 'Access Management', url: '/access-management'},
	],
}: Props) {
	const pathSegments = location.href.split('/');
	const lastSegment = pathSegments[pathSegments.length - 1];

	const menuWithActive: MenuItem[] = menu.map(menuItem => ({
		...menuItem,
		isActive: menuItem.url === `/${lastSegment}`,
	}));

	return (
		<section className="content-center bg-background-brand-default fixed min-h-[56px] top-0 w-full z-10">
			<div className="mx-auto px-2 py-1 max-w-full md:container">
				<DesktopMenu menu={menuWithActive}/>
				<MobileMenu menu={menuWithActive}/>
			</div>
		</section>
	);
};
