import EditForm from '@/pages/Facilities/Edit/EditForm';
import {useParams} from 'react-router';
import {useTranslation} from 'react-i18next';
import {Suspense} from 'react';

export default function Edit() {
	const {t} = useTranslation();
	const {id} = useParams();

	return (
		<>
			<h1>
				{id ? t('page.facilities.page.edit.title') : t('page.facilities.page.add.title')}
			</h1>
			<Suspense fallback={<div className="ml-2 mt-4">loading…</div>}>
				<EditForm/>
			</Suspense>
		</>
	);
}
