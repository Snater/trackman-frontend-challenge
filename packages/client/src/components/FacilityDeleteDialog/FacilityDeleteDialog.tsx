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
import {gql, useMutation} from '@apollo/client';
import {Button} from '@/components/ui/button';
import type {Facility} from 'schemas';

const DELETE_FACILITY = gql`
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
	const [deleteFacility] = useMutation(DELETE_FACILITY, {refetchQueries: ['AllFacilities']});

	const handleOpenChange = (open: boolean) => {
		if (!open) {
			setConfirmDelete(undefined);
		}
	}

	const handleDelete = useCallback(async () => {
		if (!facility?.id) {
			return;
		}

		await deleteFacility({variables: {facilityId: facility.id}});

		setConfirmDelete(undefined);
	}, [deleteFacility, facility, setConfirmDelete]);

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
