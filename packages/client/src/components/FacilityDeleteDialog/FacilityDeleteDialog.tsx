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
import {Button} from '@/components/ui/button';
import type {Facility} from 'schemas';

type Props = {
	confirmDelete?: Facility
	setConfirmDelete: Dispatch<SetStateAction<Facility | undefined>>
}

export default function FacilityDeleteDialog({confirmDelete: facility, setConfirmDelete}: Props) {
	const queryClient = useQueryClient();

	const {mutate} = useMutation<null, DefaultError, string>({
		mutationFn: async (id) => {
			await fetch(
				`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT}/facility`,
				{
					body: JSON.stringify({id}),
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'DELETE',
					mode: 'cors',
				}
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
					<DialogTitle>Delete Facility</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					Are you sure you want to delete this facility? This action cannot be undone.<br/>
					Facility: <span className="font-semibold">{facility?.name}</span>
				</DialogDescription>
				<DialogFooter>
					<Button onClick={() => setConfirmDelete(undefined)} variant="secondary">Cancel</Button>
					<Button onClick={handleDelete} variant="primary">Yes, Delete</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
