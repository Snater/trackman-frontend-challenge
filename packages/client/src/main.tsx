import './i18n';
import './index.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import App from './App.tsx';
import {BrowserRouter} from 'react-router';
import {HelmetProvider} from '@dr.pogodin/react-helmet';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</HelmetProvider>
	</StrictMode>,
);
