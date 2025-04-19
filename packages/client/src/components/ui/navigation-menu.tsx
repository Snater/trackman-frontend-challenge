import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import {ComponentProps} from 'react';
import {NavLink} from 'react-router';
import {cn} from '@/lib/utils';

function NavigationMenu({
	className,
	children,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.Root>) {
	return (
		<NavigationMenuPrimitive.Root
			data-slot="navigation-menu"
			className={cn(
				'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center data-[orientation=vertical]:justify-start',
				className
			)}
			{...props}
		>
			{children}
		</NavigationMenuPrimitive.Root>
	);
}

function NavigationMenuList({
	className,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.List>) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn(
				'group flex flex-1 list-none items-center justify-center gap-1 data-[orientation=vertical]:items-start',
				className
			)}
			{...props}
		/>
	);
}

function NavigationMenuItem({
	className,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.Item>) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cn('relative', className)}
			{...props}
		/>
	);
}

function NavigationMenuLink({
	className,
	...props
}: ComponentProps<typeof NavLink>) {
	return (
		<NavLink
			data-slot="navigation-menu-link"
			className={({isActive}) => cn(
				'text-accent-foreground hover:bg-secondary-hover hover:text-accent flex flex-col gap-1 rounded-sm px-1.5 py-1 transition-all w-max items-center justify-center font-semibold text-base data-[orientation=vertical]:text-accent data-[orientation=vertical]:hover:bg-transparent data-[orientation=vertical]:hover:text-accent-foreground [&:is([data-active=true]&[data-orientation=vertical])]:text-accent',
				{'text-accent-foreground-active' : isActive},
				className
			)}
			{...props}
		/>
	);
}

export {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
};
