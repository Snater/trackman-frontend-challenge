import {FormControl, FormItem, FormLabel} from '@/components/ui/form';
import type {FieldValues} from 'react-hook-form';
import RequiredIndicator from '@/components/RequiredIndicator';
import {Textarea} from '@/components/ui/textarea';

type Props = {
	field: FieldValues
	label: string
	required: boolean
}

export default function FormTextarea({field, label, required}: Props) {
	return (
		<FormItem>
			<FormLabel>
				{label}
				{required && <RequiredIndicator/>}
			</FormLabel>
			<FormControl>
				<Textarea {...required ? {'aria-required': true, required: true}: {}} {...field}/>
			</FormControl>
		</FormItem>
	);
}
