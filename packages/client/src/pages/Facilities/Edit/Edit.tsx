import {type DefaultError, useMutation, useQueryClient} from '@tanstack/react-query';
import {type Facility, FacilitySchema} from 'schemas';
import {Form, FormField} from '@/components/ui/form';
import {useNavigate, useParams} from 'react-router';
import {Button} from '@/components/ui/button';
import FormInput from '@/components/FormInput';
import FormCheckbox from '@/components/FormCheckbox';
import FormTextarea from '@/components/FormTextarea';
import {Input} from '@/components/ui/input';
import useFacilitiesContext from '@/components/FacilitiesContext';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

export default function Edit() {
	const navigate = useNavigate();
	const {id} = useParams();
	const queryClient = useQueryClient();
	const {facilities} = useFacilitiesContext();
	const facility = facilities?.filter(facility => facility.id === id)[0];

	const form = useForm<Facility>({
		resolver: zodResolver(FacilitySchema),
		defaultValues: facility ?? {
			name: '',
			address: '',
			description: '',
			image: '',
			workingHours: ['', ''],
			isDefault: facilities?.length === 0,
		},
	});

	const {mutate} = useMutation<null, DefaultError, Facility>({
		mutationFn: async (values) => {
			await fetch(
				`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT}/facility`,
				{
					body: JSON.stringify({...values}),
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					mode: 'cors',
				}
			);

			return null;
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({queryKey: ['facilities']});
			navigate('/facilities');
		},
	});

	return (
		<>
			<h1>{id ? 'Edit Facility' : 'Add Facility'}</h1>
			<Form {...form}>
				<form
					className="bg-background-default-default rounded-md shadow-xs"
					onSubmit={form.handleSubmit(values => mutate(values))}
				>
					<h2>Facility Information</h2>
					<FormField
						control={form.control}
						name="id"
						render={({field}) => (
							<Input {...field} type="hidden"/>
						)}
					/>
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
						name="image"
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
								disabled={facilities?.length === 0}
								field={field}
								label="Default Facility"
							/>
						)}
					/>
					<h2>Working Hours</h2>
					<div className="flex gap-1.25 mb-1">
						<FormField
							control={form.control}
							name="workingHours.0"
							render={({field}) => (
								<FormInput field={field} label="Opening Time" required/>
							)}
						/>
						<FormField
							control={form.control}
							name="workingHours.1"
							render={({field}) => (
								<FormInput field={field} label="Closing Time" required/>
							)}
						/>
					</div>
					<div className="flex gap-1.25 justify-end">
						<Button variant="secondary" onClick={() => navigate('/facilities')}>Cancel</Button>
						<Button type="submit" variant="primary">{id ? 'Update Facility' : 'Create Facility'}</Button>
					</div>
				</form>
			</Form>
		</>
	);
}
