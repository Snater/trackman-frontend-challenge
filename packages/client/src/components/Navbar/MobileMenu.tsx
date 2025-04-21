import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import Logo from './Logo';
import {Menu} from 'lucide-react';
import type {NavItem} from './types';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

type Props = {
	menu: NavItem[]
}

export default function MobileMenu({menu}: Props) {
	const {t} = useTranslation();
	const [open, setOpen] = useState(false);

	return (
		<div className="block md:hidden">
			<div className="flex items-center justify-between">
				<Logo/>
				<Sheet modal={true} open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild className="fixed right-[20px] top-[8px] h-5 width-5 p-0">
						<Button aria-label={t('nav.mobile.open')} variant="menuOutline">
							<Menu className="p-1 size-5"/>
						</Button>
					</SheetTrigger>
					<SheetContent aria-describedby={undefined} className="overflow-y-auto">
						<SheetHeader hidden>
							<SheetTitle>
								{t('nav.mobile.title')}
							</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col gap-6 pt-10 px-4">
							<NavigationMenu className="max-w-full" orientation="vertical">
								<NavigationMenuList className="flex-col">
									{
										menu.map((item) => (
											<NavigationMenuItem key={item.path}>
												<NavigationMenuLink
													data-orientation="vertical"
													onClick={() => setOpen(false)}
													to={item.path}
												>
													{item.label}
												</NavigationMenuLink>
											</NavigationMenuItem>
										))
									}
								</NavigationMenuList>
							</NavigationMenu>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}
