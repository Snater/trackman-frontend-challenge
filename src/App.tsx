import './App.css';
import {Route, Routes} from 'react-router';
import Edit from '@/pages/Facilities/Edit';
import Facilities from '@/pages/Facilities';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
