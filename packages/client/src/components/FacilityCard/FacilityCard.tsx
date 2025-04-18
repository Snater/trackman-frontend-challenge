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
import type {Facility, WorkingHours} from 'schemas';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Trash} from 'lucide-react';
import {useNavigate} from 'react-router';

type Props = {
	facility: Facility
	setConfirmDelete: Dispatch<SetStateAction<Facility | undefined>>
}

/**
 * @param timeString Between `00:00` and `23:59`.
 */
function timeToInt(timeString: string) {
	return parseInt(timeString.split(':').join(''), 10);
}

function isInWorkingHours(timeString: string, workingHours: WorkingHours) {
	const time = timeToInt(timeString);
	const open = timeToInt(workingHours[0]);
	const close = timeToInt(workingHours[1]);

	if (open > close && (time >= open || time <= close)) {
		// Opening hours beyond midnight.
		return true;
	}

	return time >= open && time <= close;
}

export default function FacilityCard({facility, setConfirmDelete}: Props) {
	const navigate = useNavigate();

	const now = new Date().toLocaleTimeString().substring(0, 5);
	const isOpen = isInWorkingHours(now, facility.workingHours);

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
					<Badge variant={isOpen ? 'open' : 'closed'}/>
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
							<Trash/>
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
