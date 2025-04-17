import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Route, Routes} from 'react-router';
import Edit from '@/pages/Facilities/Edit';
import Facilities from '@/pages/Facilities';
import {FacilitiesProvider} from '@/components/FacilitiesContext';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import {useState} from 'react';

function App() {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<FacilitiesProvider>
				<Navbar/>
				<Routes>
					<Route element={<Layout/>}>
						<Route index element={<></>}/>
						<Route path="facilities">
							<Route index element={<Facilities/>}/>
							<Route path="add" element={<Edit/>}/>
							<Route path="edit/:id" element={<Edit/>}>
							</Route>
						</Route>
						<Route path="locations" element={<></>}/>
						<Route path="players" element={<></>}/>
						<Route path="access-management" element={<></>}/>
					</Route>
				</Routes>
			</FacilitiesProvider>
		</QueryClientProvider>
	);
}

export default App;
