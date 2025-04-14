import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as React from 'react';

import {cn} from '@/lib/utils';

function NavigationMenu({
	className,
	children,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
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
	)
}

function NavigationMenuList({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn(
				'group flex flex-1 list-none items-center justify-center gap-1 data-[orientation=vertical]:items-start',
				className
			)}
			{...props}
		/>
	)
}

function NavigationMenuItem({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cn('relative', className)}
			{...props}
		/>
	)
}

function NavigationMenuLink({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
	return (
		<NavigationMenuPrimitive.Link
			data-slot="navigation-menu-link"
			className={cn(
				'text-text-neutral-tertiary data-[active=true]:text-text-neutral-onneutral [&:is([data-active=true]&[data-orientation=vertical])]:text-background-brand-default hover:bg-background-default-secondary-hover hover:text-background-brand-default focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 flex flex-col gap-1 rounded-xs px-1.5 py-1 transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 w-max items-center justify-center font-bold text-base',
				className
			)}
			{...props}
		/>
	)
}

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
}
