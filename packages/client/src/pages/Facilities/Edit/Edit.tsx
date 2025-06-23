import {type Facility, FacilitySchema} from 'schemas';
import {Form, FormField} from '@/components/ui/form';
import {gql, useMutation} from '@apollo/client';
import {useCallback, useEffect, useMemo} from 'react';
import {useNavigate, useParams} from 'react-router';
import {Button} from '@/components/ui/button';
import FormInput from '@/components/form/FormInput';
import FormCheckbox from '@/components/form/FormCheckbox';
import FormTextarea from '@/components/form/FormTextarea';
import {Input} from '@/components/ui/input';
import useFacilitiesContext from '@/components/FacilitiesContext';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {zodResolver} from '@hookform/resolvers/zod';

const ADD_FACILITY = gql`
	mutation AddFacility($facility: NewFacilityInput!) {
		addFacility(facility: $facility) {
			id
		}
	}
`;

const UPDATE_FACILITY = gql`
	mutation UpdateFacility($facility: ExistingFacilityInput!) {
		updateFacility(facility: $facility) {
			id
		}
	}
`;

export default function Edit() {
	const {t} = useTranslation();
	const navigate = useNavigate();
	const {id} = useParams();
	const {facilities} = useFacilitiesContext();
	const facility = facilities?.filter(facility => facility.id === id)[0];

	const defaultValues = useMemo((): Facility => facility ?? {
		id: '',
		name: '',
		address: '',
		description: '',
		image: '',
		workingHours: ['', ''],
		isDefault: facilities?.length === 0,
	}, [facilities, facility]);

	const {reset, ...form} = useForm<Facility>({
		resolver: zodResolver(FacilitySchema),
		defaultValues,
	});

	useEffect(() => {
		if (facilities) {
			reset(defaultValues);
		}
	}, [defaultValues, facilities, reset]);

	const [addFacility] = useMutation(ADD_FACILITY);
	const [updateFacility] = useMutation(UPDATE_FACILITY);

	const mutate = useCallback(async (values: Facility) => {
		const facilityData = Object.fromEntries(Object.entries(values).filter(v => v[0] !== 'id'));

		if (values.id) {
			await updateFacility({variables: {facility: {id: values.id, facilityData}}});
		} else {
			await addFacility({variables: {facility: {facilityData}}});
		}

		navigate('/facilities');
	}, [addFacility, navigate, updateFacility]);

	return (
		<>
			<h1>
				{id ? t('page.facilities.page.edit.title') : t('page.facilities.page.add.title')}
			</h1>
			<Form reset={reset} {...form}>
				<form
					className="bg-card rounded-md shadow-xs"
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
							<FormInput
								field={field}
								label={t('page.facilities.page.edit.form.facilityName.label')}
								required
							/>
						)}
					/>
					<FormField
						control={form.control}
						name="address"
						render={({field}) => (
							<FormInput
								field={field}
								label={t('page.facilities.page.edit.form.address.label')}
								required
							/>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({field}) => (
							<FormTextarea
								field={field}
								label={t('page.facilities.page.edit.form.description.label')}
								required
							/>
						)}
					/>
					<FormField
						control={form.control}
						name="image"
						render={({field}) => (
							<FormInput
								field={field}
								label={t('page.facilities.page.edit.form.coverImageUrl.label')}
								required
							/>
						)}
					/>
					<FormField
						control={form.control}
						name="isDefault"
						render={({field}) => (
							<FormCheckbox
								description={t('page.facilities.page.edit.form.defaultFacility.description')}
								disabled={facilities?.length === 0}
								field={field}
								label={t('page.facilities.page.edit.form.defaultFacility.label')}
							/>
						)}
					/>
					<h2>{t('page.facilities.page.edit.form.subtitle.workingHours')}</h2>
					<div className="flex gap-1.25 mb-1">
						<FormField
							control={form.control}
							name="workingHours.0"
							render={({field}) => (
								<FormInput
									field={field}
									label={t('page.facilities.page.edit.form.openingTime.label')}
									required
									type="time"
								/>
							)}
						/>
						<FormField
							control={form.control}
							name="workingHours.1"
							render={({field}) => (
								<FormInput
									field={field}
									label={t('page.facilities.page.edit.form.closingTime.label')}
									required
									type="time"
								/>
							)}
						/>
					</div>
					<div className="flex flex-col gap-1.25 sm:flex-row-reverse sm:justify-start">
						<Button type="submit" variant="primary">
							{
								id
									? t('page.facilities.page.edit.form.button.update')
									: t('page.facilities.page.edit.form.button.create')
							}
						</Button>
						<Button variant="secondary" onClick={() => navigate('/facilities')}>
							{t('common.button.cancel')}
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
}
