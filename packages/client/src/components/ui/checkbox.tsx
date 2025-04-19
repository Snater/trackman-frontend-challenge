import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {CheckIcon} from 'lucide-react';
import {ComponentProps} from 'react';
import {cn} from '@/lib/utils';

function Checkbox({className, ...props}: ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				'peer border-border bg-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-danger-foreground/20aria-invalid:border-danger-foreground size-2.5 shrink-0 rounded-sm border transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="flex items-center justify-center text-current transition-none"
			>
				<CheckIcon className="size-2"/>
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	)
}

export {Checkbox};
