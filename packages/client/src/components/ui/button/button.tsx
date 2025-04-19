import {ComponentProps} from 'react';
import {Slot} from '@radix-ui/react-slot';
import {type VariantProps} from 'class-variance-authority';
import {buttonVariants} from './buttonVariants.ts';
import {cn} from '@/lib/utils';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface Props
	extends Omit<ButtonVariantProps, 'variant'>, Required<Pick<ButtonVariantProps, 'variant'>> {}

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: ComponentProps<'button'> &	Props & {asChild?: boolean}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({variant, size, className}))}
			{...props}
		/>
	);
}

export {Button};
