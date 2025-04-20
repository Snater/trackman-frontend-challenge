import {useFormContext, useFormState} from 'react-hook-form';
import {FormFieldContext} from './FormFieldContext';
import {FormItemContext} from '@/components/ui/form/form';
import {useContext} from 'react';

export const useFormField = () => {
	const fieldContext = useContext(FormFieldContext);
	const itemContext = useContext(FormItemContext);
	const {getFieldState} = useFormContext();
	const formState = useFormState({name: fieldContext.name});
	const fieldState = getFieldState(fieldContext.name, formState);

	if (!fieldContext) {
		throw new Error('useFormField should be used within <FormField>');
	}

	const {id} = itemContext;

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState,
	};
}
