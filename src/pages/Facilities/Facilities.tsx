import {Button} from '@/components/ui/button';
import type {Facility} from '@/types';
import FacilityCard from '@/components/FacilityCard';
import FacilityDeleteDialog from '@/components/FacilityDeleteDialog';
import facilities from '@/facilities.json';
import {useState} from 'react';

export default function Facilities() {
	const [confirmDelete, setConfirmDelete] = useState<Facility>();

	return (
		<>
			<div className="container mx-auto pb-4 pt-10.75 px-2">
				<div className="flex flex-col">
					<div className="flex justify-end">
						<Button variant="primary">Create Facility</Button>
					</div>
					<div className="grid gap-1.5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
						{
							facilities.map(facility => (
								<FacilityCard
									facility={facility as Facility}
									key={facility.id}
									setConfirmDelete={setConfirmDelete}
								/>
							))
						}
					</div>
				</div>
			</div>
			<FacilityDeleteDialog confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete}/>
		</>
	);
}
