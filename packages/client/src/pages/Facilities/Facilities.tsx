import {FacilitiesGrid, FacilitiesGridContainer} from '@/components/FacilitiesGrid';
import {Suspense, useState} from 'react';
import {Button} from '@/components/ui/button';
import type {Facility} from 'schemas';
import {FacilityCardSkeleton} from '@/components/FacilityCard';
import FacilityDeleteDialog from '@/components/FacilityDeleteDialog';
import {useNavigate} from 'react-router';
import {useTranslation} from 'react-i18next';

export default function Facilities() {
	const {t} = useTranslation();
	const [confirmDelete, setConfirmDelete] = useState<Facility>();
	const navigate = useNavigate();

	const fallback = (
		<FacilitiesGridContainer>
			{
				[...Array(8)].map((_, i) => (
					<FacilityCardSkeleton
						className="nth-[n+4]:hidden md:nth-[n]:flex md:nth-[n+5]:hidden lg:nth-[n]:flex lg:nth-[n+7]:hidden 2xl:nth-[n]:flex"
						key={i}
					/>
				))
			}
		</FacilitiesGridContainer>
	);

	return (
		<>
			<h1 className="sr-only">{t('page.facilities.title')}</h1>
			<div className="flex flex-col">
				<div className="flex justify-end">
					<Button className="w-full sm:w-auto" onClick={() => navigate('add')} variant="primary">
						{t('page.facilities.button.createFacility')}
					</Button>
				</div>
				<Suspense fallback={fallback}>
					<FacilitiesGrid setConfirmDelete={setConfirmDelete}/>
				</Suspense>
			</div>
			<FacilityDeleteDialog confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete}/>
		</>
	);
}
