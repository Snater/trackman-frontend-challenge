import {ComponentProps} from 'react';
import {MapPin} from 'lucide-react';
import {cn} from '@/lib/utils';

function Card({className, ...props}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card"
			className={cn(
				'bg-background-default-default flex flex-col gap-1.5 rounded-sm p-1.5 hover:shadow-lg transition',
				className,
			)}
			{...props}
		/>
	)
}

function CardImage({className, src, ...props}: ComponentProps<'div'> & {src: string}) {
	return (
		<div
			data-slot="card-image"
			className={cn('aspect-[324/176] rounded-xs overflow-hidden', className)}
			{...props}
		>
			<img
				src={src}
				alt=""
				className="h-full object-center object-cover w-full"
			/>
		</div>
	)
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
			<span className="line-clamp-1 text-sm text-text-default-secondary">{children}</span>
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
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
}
