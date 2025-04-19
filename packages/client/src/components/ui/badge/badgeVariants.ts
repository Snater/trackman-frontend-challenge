import {cva} from 'class-variance-authority';

const badgeVariants = cva(
	'inline-flex items-center justify-center rounded-full px-0.75 py-0.25 text-sm font-bold whitespace-nowrap overflow-hidden',
	{
		variants: {
			variant: {
				open:
					'bg-positive text-positive-foreground',
				closed:
					'bg-danger text-danger-foreground',
			},
		},
	}
);

export {badgeVariants};
