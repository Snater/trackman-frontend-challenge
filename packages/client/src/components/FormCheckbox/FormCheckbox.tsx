import {FormControl, FormDescription, FormItem, FormLabel} from '@/components/ui/form';
import {Checkbox} from '@/components/ui/checkbox';
import type {FieldValues} from 'react-hook-form';

type Props = {
	description: string
	field: FieldValues
	label: string
}

export default function FormCheckbox({description, field, label}: Props) {
	return (
		<FormItem className="flex gap-1 items-center py-1">
			<FormControl>
				<Checkbox {...field}/>
			</FormControl>
			<div className="flex flex-col gap-0.25">
				<FormLabel>{label}</FormLabel>
				<FormDescription>{description}</FormDescription>
			</div>
		</FormItem>
	);
}
