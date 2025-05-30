import FacilityCard, {FacilityCardSkeleton} from '@/components/FacilityCard';
import {Button} from '@/components/ui/button';
import type {Facility} from 'schemas';
import FacilityDeleteDialog from '@/components/FacilityDeleteDialog';
import useFacilitiesContext from '@/components/FacilitiesContext';
import {useNavigate} from 'react-router';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

export default function Facilities() {
	const {t} = useTranslation();
	const [confirmDelete, setConfirmDelete] = useState<Facility>();
	const navigate = useNavigate();
	const {facilities} = useFacilitiesContext();

	return (
		<>
			<h1 className="sr-only">{t('page.facilities.title')}</h1>
			<div className="flex flex-col">
				<div className="flex justify-end">
					<Button className="w-full sm:w-auto" onClick={() => navigate('add')} variant="primary">
						{t('page.facilities.button.createFacility')}
					</Button>
				</div>
				{
					facilities && facilities.length === 0 && (
						<div className="mt-12 text-center w-full">{t('page.facilities.empty')}</div>
					)
				}
				{
					!facilities || facilities.length > 0 && (
						<div className="grid gap-1.5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
						</div>
					)
				}
				</div>
			<FacilityDeleteDialog confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete}/>
		</>
	);
}
