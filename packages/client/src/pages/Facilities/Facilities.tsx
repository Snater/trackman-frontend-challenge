import {Button} from '@/components/ui/button';
import type {Facility} from '@/types';
import FacilityCard from '@/components/FacilityCard';
import FacilityDeleteDialog from '@/components/FacilityDeleteDialog';
import useFacilitiesContext from '@/components/FacilitiesContext';
import {useNavigate} from 'react-router';
import {useState} from 'react';

export default function Facilities() {
	const [confirmDelete, setConfirmDelete] = useState<Facility>();
	const navigate = useNavigate();
	const {facilities} = useFacilitiesContext();

	if (!facilities) {
		return null;
	}

	return (
		<>
			<div className="flex flex-col">
				<div className="flex justify-end">
					<Button onClick={() => navigate('add')} variant="primary">Create Facility</Button>
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
			<FacilityDeleteDialog confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete}/>
		</>
	);
}
