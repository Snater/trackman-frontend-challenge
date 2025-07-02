import {Dispatch, SetStateAction} from 'react';
import FacilityCard, {FacilityCardSkeleton} from '@/components/FacilityCard';
import {FacilitiesGridContainer} from '@/components/FacilitiesGrid';
import type {Facility} from 'schemas';
import useQueryAllFacilities from '@/hooks/useQueryAllFacilities';
import {useTranslation} from 'react-i18next';

type Props = {
	setConfirmDelete: Dispatch<SetStateAction<Facility | undefined>>
}

export default function FacilitiesGrid({setConfirmDelete}: Props) {
	const {t} = useTranslation();
	const facilities = useQueryAllFacilities();

	if (facilities && facilities.length === 0) {
		return (
			<div className="mt-12 text-center w-full">{t('page.facilities.empty')}</div>
		);
	}

	return (
		<FacilitiesGridContainer>
			{
				facilities
					? (
						facilities.map(facility => (
							<FacilityCard
								facility={facility as Facility}
								key={facility.id}
								setConfirmDelete={setConfirmDelete}
							/>
						))
					)
					: (
						[...Array(8)].map((_, i) => (
							<FacilityCardSkeleton
								className="nth-[n+4]:hidden md:nth-[n]:flex md:nth-[n+5]:hidden lg:nth-[n]:flex lg:nth-[n+7]:hidden 2xl:nth-[n]:flex"
								key={i}
							/>
						))
					)
			}
		</FacilitiesGridContainer>
	);
}
