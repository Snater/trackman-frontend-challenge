import {type DefaultError, useMutation, useQueryClient} from '@tanstack/react-query';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import {Dispatch, SetStateAction, useCallback} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {gql, request} from 'graphql-request';
import {Button} from '@/components/ui/button';
import type {Facility} from 'schemas';

const deleteFacility = gql`
	mutation UpdateFacility($facilityId: String!) {
		deleteFacility(facilityId: $facilityId)
	}
`;

type Props = {
	confirmDelete?: Facility
	setConfirmDelete: Dispatch<SetStateAction<Facility | undefined>>
}

export default function FacilityDeleteDialog({confirmDelete: facility, setConfirmDelete}: Props) {
	const {t} = useTranslation();
	const queryClient = useQueryClient();

	const {mutate} = useMutation<null, DefaultError, string>({
		mutationFn: async (id) => {
			await request(
				`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT}/graphql`,
				deleteFacility,
				{facilityId: id},
			);

			return null;
		},
		onSuccess: () => {
			queryClient.refetchQueries({queryKey: ['facilities']});
			setConfirmDelete(undefined);
		},
	});

	const handleOpenChange = (open: boolean) => {
		if (!open) {
			setConfirmDelete(undefined);
		}
	}

	const handleDelete = useCallback(() => {
		if (!facility?.id) {
			return;
		}

		mutate(facility.id);
	}, [facility, mutate]);

	return (
		<Dialog open={facility !== undefined} onOpenChange={handleOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{t('facility.deleteDialog.title')}</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					<Trans
						i18nKey="facility.deleteDialog.confirm"
						components={{strong: <span className="font-semibold"/>}}
						values={{facilityName: facility?.name}}
					/>
				</DialogDescription>
				<DialogFooter>
					<Button onClick={() => setConfirmDelete(undefined)} variant="secondary">
						{t('common.button.cancel')}
					</Button>
					<Button onClick={handleDelete} variant="primary">{t('common.button.delete')}</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
