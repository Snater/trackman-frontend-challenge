import {ComponentProps} from 'react';
import {cn} from '@/lib/utils';

function Skeleton({className, ...props}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="skeleton"
			className={cn('bg-accent-foreground/20 animate-pulse rounded-sm', className)}
			{...props}
		/>
	)
}

export {Skeleton};
