import {FormControl, FormItem, FormLabel} from '@/components/ui/form';
import type {FieldValues} from 'react-hook-form';
import {Input} from '@/components/ui/input';
import RequiredIndicator from '@/components/RequiredIndicator';

type Props = {
	field: FieldValues
	label: string
	required: boolean
}

export default function FormInput({field, label, required}: Props) {
	return (
		<FormItem>
			<FormLabel>
				{label}
				{required && <RequiredIndicator/>}
			</FormLabel>
			<FormControl>
				<Input {...required ? {'aria-required': true, required: true}: {}} {...field}/>
			</FormControl>
		</FormItem>
	);
}
