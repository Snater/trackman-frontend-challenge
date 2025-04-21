import {FormControl, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import type {FieldValues} from 'react-hook-form';
import RequiredIndicator from '@/components/RequiredIndicator';
import {Textarea} from '@/components/ui/textarea';

type Props = {
	field: FieldValues
	label: string
	required?: boolean
}

export default function FormTextarea({field, label, required}: Props) {
	return (
		<FormItem>
			<FormLabel>
				{label}
				{required && <RequiredIndicator/>}
			</FormLabel>
			<FormControl>
				<Textarea aria-required={required} {...field}/>
			</FormControl>
			<FormMessage className="mb-1.5"/>
		</FormItem>
	);
}
