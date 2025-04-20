import * as LabelPrimitive from '@radix-ui/react-label';
import {ComponentProps, createContext} from 'react';
import {FormProvider} from 'react-hook-form';
import {Label} from '@/components/ui/label';
import {Slot} from '@radix-ui/react-slot';
import {cn} from '@/lib/utils';
import {useFormField} from './useFormField';
import {useId} from 'react';

const Form = FormProvider;

type FormItemContextValue = {
	id: string
}

const FormItemContext = createContext<FormItemContextValue>(
	{} as FormItemContextValue
);

function FormItem({className, ...props}: ComponentProps<'div'>) {
	const id = useId();

	return (
		<FormItemContext.Provider value={{id}}>
			<div
				data-slot="form-item"
				className={cn('grid gap-0.25 mb-1', className)}
				{...props}
			/>
		</FormItemContext.Provider>
	);
}

function FormLabel({className, ...props}: ComponentProps<typeof LabelPrimitive.Root>) {
	const {error, formItemId} = useFormField();

	return (
		<Label
			data-slot="form-label"
			data-error={!!error}
			className={cn('data-[error=true]:text-danger-foreground', className)}
			htmlFor={formItemId}
			{...props}
		/>
	);
}

function FormControl({...props}: ComponentProps<typeof Slot>) {
	const {error, formItemId, formDescriptionId, formMessageId} = useFormField();

	return (
		<Slot
			data-slot="form-control"
			id={formItemId}
			aria-describedby={
				!error
					? `${formDescriptionId}`
					: `${formDescriptionId} ${formMessageId}`
			}
			aria-invalid={!!error}
			{...props}
		/>
	);
}

function FormDescription({className, ...props}: ComponentProps<'p'>) {
	const {formDescriptionId} = useFormField();

	return (
		<p
			data-slot="form-description"
			id={formDescriptionId}
			className={cn('text-secondary-foreground text-xs', className)}
			{...props}
		/>
	);
}

function FormMessage({className, ...props}: ComponentProps<'p'>) {
	const {error, formMessageId} = useFormField();
	const body = error ? String(error?.message ?? '') : props.children;

	if (!body) {
		return null;
	}

	return (
		<p
			data-slot="form-message"
			id={formMessageId}
			className={cn('text-danger-foreground text-sm', className)}
			{...props}
		>
			{body}
		</p>
	);
}

export {
	Form,
	FormControl,
	FormDescription,
	FormItem,
	FormItemContext,
	FormLabel,
	FormMessage,
};
