import {MapPin, Star} from 'lucide-react';
import {ComponentProps} from 'react';
import {cn} from '@/lib/utils';

function Card({className, ...props}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card"
			className={cn(
				'bg-card text-card-foreground flex flex-col gap-1.5 rounded-md p-1.5 hover:shadow-lg transition',
				className,
			)}
			{...props}
		/>
	)
}

function CardImage({children, className, src, ...props}: ComponentProps<'div'> & {src: string}) {
	return (
		<div
			data-slot="card-image"
			className={cn('aspect-[324/176] relative rounded-sm overflow-hidden', className)}
			{...props}
		>
			<img
				src={src}
				alt=""
				className="h-full object-center object-cover w-full"
			/>
			{children}
		</div>
	)
}

function CardDefaultIcon() {
	return (
		<div
			className="absolute backdrop-blur-[2.5px] bg-primary-accent flex items-center justify-center left-1 rounded-full size-4 top-1"
		>
			<Star className="text-card size-2"/>
		</div>
	);
}

function CardHeader({className, ...props}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				'grid grid-cols-[1fr_min-content] items-center',
				className,
			)}
			{...props}
		/>
	)
}

function CardTitle({className, ...props}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-title"
			className={cn('leading-none line-clamp-1 text-base', className)}
			{...props}
		/>
	)
}

function CardContent({className, ...props}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-content"
			className={cn('gap-0.5 grid', className)}
			{...props}
		/>
	)
}

function CardFooter({className, ...props}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-footer"
			className={cn('flex gap-1 items-center justify-between', className)}
			{...props}
		/>
	)
}

function CardAddress({children, className, ...props}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-address"
			className={cn(
				'gap-0.25 grid grid-cols-[min-content_1fr] items-center',
				className,
			)}
			{...props}
		>
			<MapPin className="size-2"/>
			<span className="line-clamp-1 text-sm text-secondary-foreground">{children}</span>
		</div>
	)
}

function CardActions({className, ...props}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-actions"
			className={cn(
				'gap-0.5 grid grid-cols-[min-content_min-content]',
				className,
			)}
			{...props}
		/>
	)
}

export {
	Card,
	CardActions,
	CardAddress,
	CardContent,
	CardDefaultIcon,
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
};
