import {
	Card,
	CardActions,
	CardAddress,
	CardContent,
	CardDefaultIcon,
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
} from '@/components/ui/card';
import {Dispatch, SetStateAction} from 'react';
import {Button} from '@/components/ui/button';
import DeleteIcon from '@/components/DeleteIcon';
import type {Facility} from 'schemas';
import FacilityCardBadge from './FacilityCardBadge';
import {useNavigate} from 'react-router';

type Props = {
	facility: Facility
	setConfirmDelete: Dispatch<SetStateAction<Facility | undefined>>
}

export default function FacilityCard({facility, setConfirmDelete}: Props) {
	const navigate = useNavigate();

	return (
		<Card>
			<CardImage src={facility.image}>
				{facility.isDefault && <CardDefaultIcon/>}
			</CardImage>
			<CardContent>
				<CardHeader>
					<CardTitle>
						{facility.name}
					</CardTitle>
					<FacilityCardBadge workingHours={facility.workingHours}/>
				</CardHeader>
				<CardFooter>
					<CardAddress>{facility.address}</CardAddress>
					<CardActions>
						<Button
							onClick={() => {
								setConfirmDelete(facility);
							}}
							size="icon"
							variant="secondary"
						>
							<DeleteIcon/>
						</Button>
						<Button
							onClick={() => navigate(`edit/${facility.id}`)}
							size="card"
							variant="secondary"
						>
							Edit
						</Button>
					</CardActions>
				</CardFooter>
			</CardContent>
		</Card>
	);
}
