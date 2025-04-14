import './index.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import App from './App.tsx';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App/>
	</StrictMode>,
);
