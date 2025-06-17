import {FormControl, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {type ComponentProps} from 'react';
import type {FieldValues} from 'react-hook-form';
import {Input} from '@/components/ui/input';
import RequiredIndicator from '@/components/RequiredIndicator';

type Props = {
	field: FieldValues
	label: string
} & ComponentProps<'input'>

export default function FormInput({field, label, required, ...rest}: Props) {
	return (
		<FormItem>
			<FormLabel>
				{label}
				{required && <RequiredIndicator/>}
			</FormLabel>
			<FormControl>
				<Input {...field} {...rest}/>
			</FormControl>
			<FormMessage className="mb-1.5"/>
		</FormItem>
	);
}
