import {Form, FormField} from '@/components/ui/form';
import {Button} from '@/components/ui/button';
import type {Facility} from '@/types';
import FormInput from '@/components/FormInput';
import FormCheckbox from '@/components/FormCheckbox';
import {FormSchema} from 'schemas';
import FormTextarea from '@/components/FormTextarea';
import {useParams} from 'react-router';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import useFacilitiesContext from '@/components/FacilitiesContext';

function mapFacilityToFormSchema(facility: Facility) {
	return {
		name: facility.name,
		address: facility.address,
		description: facility.description,
		image: facility.image,
		openingTime: facility.workingHours[0],
		closingTime: facility.workingHours[1],
		isDefault: facility.isDefault,
	}
}

export default function Edit() {
	const {id} = useParams();
	const {facilities} = useFacilitiesContext();
	const facility = facilities?.filter(facility => facility.id === id)[0];

	const defaultValues = facility ? mapFacilityToFormSchema(facility as Facility) : {};

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues,
	});

	return (
		<>
			<h1>Edit Facility</h1>
			<Form {...form}>
				<form className="bg-background-default-default rounded-md shadow-xs">
					<h2>Facility Information</h2>
					<FormField
						control={form.control}
						name="name"
						render={({field}) => (
							<FormInput field={field} label="Facility Name" required/>
						)}
					/>
					<FormField
						control={form.control}
						name="address"
						render={({field}) => (
							<FormInput field={field} label="Address" required/>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({field}) => (
							<FormTextarea field={field} label="Description" required/>
						)}
					/>
					<FormField
						control={form.control}
						name="address"
						render={({field}) => (
							<FormInput field={field} label="Cover Image URL" required/>
						)}
					/>
					<FormField
						control={form.control}
						name="isDefault"
						render={({field}) => (
							<FormCheckbox
								description="Setting this facility as default will override the currently marked default facility."
								field={field}
								label="Default Facility"
							/>
						)}
					/>
					<h2>Working Hours</h2>
					<div className="flex gap-1.25 mb-1">
						<FormField
							control={form.control}
							name="openingTime"
							render={({field}) => (
								<FormInput field={field} label="Opening Time" required/>
							)}
						/>
						<FormField
							control={form.control}
							name="closingTime"
							render={({field}) => (
								<FormInput field={field} label="Closing Time" required/>
							)}
						/>
					</div>
					<div className="flex gap-1.25 justify-end">
						<Button variant="secondary">Cancel</Button>
						<Button type="submit" variant="primary">Create Facility</Button>
					</div>
				</form>
			</Form>
		</>
	);
}
