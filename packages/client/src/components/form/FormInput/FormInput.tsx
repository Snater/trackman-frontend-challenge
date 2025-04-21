import {FormControl, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import type {FieldValues} from 'react-hook-form';
import {Input} from '@/components/ui/input';
import RequiredIndicator from '@/components/RequiredIndicator';

type Props = {
	field: FieldValues
	label: string
	required?: boolean
}

export default function FormInput({field, label, required}: Props) {
	return (
		<FormItem>
			<FormLabel>
				{label}
				{required && <RequiredIndicator/>}
			</FormLabel>
			<FormControl>
				<Input aria-required={required} {...field}/>
			</FormControl>
			<FormMessage className="mb-1.5"/>
		</FormItem>
	);
}
