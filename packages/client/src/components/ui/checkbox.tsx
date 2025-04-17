import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {CheckIcon} from 'lucide-react';
import {ComponentProps} from 'react';
import {cn} from '@/lib/utils';

function Checkbox({className, ...props}: ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				'peer border-border-default bg-background-surface data-[state=checked]:bg-primary-default data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary-default focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20aria-invalid:border-destructive size-2.5 shrink-0 rounded-[4px] border transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
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
