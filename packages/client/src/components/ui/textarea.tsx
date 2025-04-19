import {ComponentProps} from 'react';
import {cn} from '@/lib/utils';

function Textarea({className, ...props}: ComponentProps<'textarea'>) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				'border-border placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-danger-foreground/20 aria-invalid:border-danger-foreground flex field-sizing-content min-h-16 w-full max-w-[384px] rounded-sm border bg-input p-1 text-xs shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		/>
	)
}

export {Textarea};
