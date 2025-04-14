import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Logo from './Logo';
import type {MenuItem} from './types';

type Props = {
	menu: MenuItem[]
}

export default function DesktopMenu({menu}: Props) {
	return (
		<nav className="hidden justify-between md:flex">
			<div className="flex items-center gap-4">
				<Logo/>
				<div className="flex items-center">
					<NavigationMenu>
						<NavigationMenuList>
							{
								menu.map((item) => (
									<NavigationMenuItem key={item.title}>
										<NavigationMenuLink data-active={item.isActive} href={item.url}>
											{item.title}
										</NavigationMenuLink>
									</NavigationMenuItem>
								))
							}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</nav>
	);
}
