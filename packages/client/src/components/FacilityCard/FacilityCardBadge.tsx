import {Badge} from '@/components/ui/badge';
import {WorkingHours} from 'schemas';
import useCurrentTimeContext from '@/components/CurrentTimeContext';
import {useTranslation} from 'react-i18next';

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

type Props = {
	workingHours: WorkingHours
}

export default function FacilityCardBadge({workingHours}: Props) {
	const {t} = useTranslation();
	const {currentTime} = useCurrentTimeContext();
	const isOpen = isInWorkingHours(currentTime, workingHours);

	return (
		<Badge variant={isOpen ? 'open' : 'closed'}>
			{isOpen ? t('facility.card.isOpenBadge.open') : t('facility.card.isOpenBadge.closed')}
		</Badge>
	)
}
