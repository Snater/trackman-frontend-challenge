import {ComponentProps} from 'react';
import {cn} from '@/lib/utils';

function Input({className, type, ...props}: ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot="input"
			className={type === 'hidden' ? undefined : cn(
				'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-border-disabled-default flex h-4 w-full min-w-0 max-w-[384px] rounded-xs border bg-background-surface p-1 text-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
				'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
				'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
				className,
			)}
			{...props}
		/>
	)
}

export {Input};
