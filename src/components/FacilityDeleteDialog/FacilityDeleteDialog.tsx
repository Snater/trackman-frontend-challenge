import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import {Dispatch, SetStateAction} from 'react';
import {Button} from '@/components/ui/button';
import type {Facility} from '@/types';

type Props = {
	confirmDelete?: Facility
	setConfirmDelete: Dispatch<SetStateAction<Facility | undefined>>
}

export default function FacilityDeleteDialog({confirmDelete, setConfirmDelete}: Props) {

	const handleOpenChange = (open: boolean) => {
		if (!open) {
			setConfirmDelete(undefined);
		}
	}

	return (
		<Dialog open={confirmDelete !== undefined} onOpenChange={handleOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Facility</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					Are you sure you want to delete this facility? This action cannot be undone.<br/>
					Facility: <span className="font-semibold">{confirmDelete?.name}</span>
				</DialogDescription>
				<DialogFooter>
					<Button onClick={() => setConfirmDelete(undefined)} variant="secondary">Cancel</Button>
					<Button variant="primary">Yes, Delete</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
