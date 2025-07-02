import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {CurrentTimeProvider} from '@/components/CurrentTimeContext';
import {Helmet} from '@dr.pogodin/react-helmet';
import Navbar from '@/components/Navbar';
import menuConfig from '@/menuConfig.tsx';
import useHtmlLang from '@/hooks/useHtmlLang.ts';
import {useRoutes} from 'react-router';
import {useTranslation} from 'react-i18next';

function App() {
	const {t} = useTranslation();

	const client = new ApolloClient({
		uri: `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT}/graphql`,
		cache: new InMemoryCache(),
	});

	useHtmlLang();

	const routes = useRoutes(menuConfig);

	return (
		<>
			<Helmet>
				<title>{t('page.title')}</title>
			</Helmet>
			<ApolloProvider client={client}>
				<CurrentTimeProvider>
					<Navbar/>
					{routes}
				</CurrentTimeProvider>
			</ApolloProvider>
		</>
	);
}

export default App;
