import {cva} from 'class-variance-authority';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-danger-foreground/20 aria-invalid:border-danger-foreground',
	{
		variants: {
			variant: {
				menuOutline:
					'text-accent-foreground text-base hover:bg-secondary-hover hover:text-accent-foreground cursor-pointer',
				primary:
					'bg-primary font-semibold text-primary-foreground hover:bg-primary/80',
				secondary:
					'bg-secondary font-semibold text-foreground hover:bg-secondary-hover',
			},
			size: {
				default: 'h-4.5 px-3 py-1 text-sm',
				card: 'h-4 px-3 py-0.75 text-sm',
				icon: 'size-4 [&>svg:not([class*="size-"])]:size-2',
			},
		},
		defaultVariants: {
			size: 'default',
		},
	}
);

export {buttonVariants};
