import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {CurrentTimeProvider} from '@/components/CurrentTimeContext';
import {FacilitiesProvider} from '@/components/FacilitiesContext';
import {Helmet} from '@dr.pogodin/react-helmet';
import Navbar from '@/components/Navbar';
import menuConfig from '@/menuConfig.tsx';
import useHtmlLang from '@/hooks/useHtmlLang.ts';
import {useRoutes} from 'react-router';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

function App() {
	const {t} = useTranslation();
	const [queryClient] = useState(() => new QueryClient());

	useHtmlLang();

	const routes = useRoutes(menuConfig);

	return (
		<>
			<Helmet>
				<title>{t('page.title')}</title>
			</Helmet>
			<QueryClientProvider client={queryClient}>
				<CurrentTimeProvider>
					<FacilitiesProvider>
						<Navbar/>
						{routes}
					</FacilitiesProvider>
				</CurrentTimeProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
