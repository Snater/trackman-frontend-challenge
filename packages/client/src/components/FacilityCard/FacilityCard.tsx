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
import {useTranslation} from 'react-i18next';

type Props = {
	facility: Facility
	setConfirmDelete: Dispatch<SetStateAction<Facility | undefined>>
}

export default function FacilityCard({facility, setConfirmDelete}: Props) {
	const {t} = useTranslation();
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
							aria-label={t('facility.card.deleteButton.label')}
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
