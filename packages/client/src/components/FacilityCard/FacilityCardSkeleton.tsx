import {Skeleton} from '@/components/ui/skeleton';
import {cn} from '@/lib/utils.ts';

type Props = {
	className: string
}

export default function FacilityCardSkeleton({className}: Props) {
	return (
		<div className={cn('flex flex-col p-1.5 space-y-1', className)}>
			<Skeleton className="aspect-[324/176] w-full rounded-md"/>
			<div className="space-y-0.5">
				<Skeleton className="h-4 w-full"/>
				<Skeleton className="h-4 w-full"/>
			</div>
		</div>
	);
}
