import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {type VariantProps} from 'class-variance-authority';

import {badgeVariants} from './badgeVariants.ts';
import {cn} from '@/lib/utils';

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

interface Props
	extends Omit<BadgeVariantProps, 'variant'>, Required<Pick<BadgeVariantProps, 'variant'>> {}

function Badge({
	className,
	variant,
	asChild = false,
	...props
}: React.ComponentProps<'span'> & Props & {asChild?: boolean}) {
	const Comp = asChild ? Slot : 'span'

	return (
		<Comp
			data-slot="badge"
			className={cn(badgeVariants({variant}), className)}
			{...props}
		>
			{variant === 'open' ? 'Open' : 'Closed'}
		</Comp>
	)
}

export {Badge};
