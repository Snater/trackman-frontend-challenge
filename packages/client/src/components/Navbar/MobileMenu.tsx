import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import Logo from './Logo';
import type {MenuItem} from './types';
import {Menu} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useState} from 'react';

type Props = {
	menu: MenuItem[]
}

export default function MobileMenu({menu}: Props) {
	const [open, setOpen] = useState(false);

	return (
		<div className="block md:hidden">
			<div className="flex items-center justify-between">
				<Logo/>
				<Sheet modal={true} open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild className="fixed right-[20px] top-[8px] h-5 width-5 p-0">
						<Button aria-label="Navigation Menu" className="" variant="menuOutline">
							<Menu className="p-1 size-5"/>
						</Button>
					</SheetTrigger>
					<SheetContent aria-describedby={undefined} className="overflow-y-auto">
						<SheetHeader hidden>
							<SheetTitle>
								Menu
							</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col gap-6 pt-10 px-4">
							<NavigationMenu className="max-w-full" orientation="vertical">
								<NavigationMenuList className="flex-col">
									{
										menu.map((item) => (
											<NavigationMenuItem key={item.title}>
												<NavigationMenuLink
													data-active={item.isActive}
													data-orientation="vertical"
													onClick={() => setOpen(false)}
													to={item.url}
												>
													{item.title}
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
