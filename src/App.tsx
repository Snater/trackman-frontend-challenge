import './App.css';
import Facilities from '@/pages/Facilities';
import Navbar from '@/components/Navbar';
import {Route, Routes} from 'react-router';

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route index element={<></>}/>
				<Route path="facilities">
					<Route index element={<Facilities/>}/>
					<Route path="edit" element={<></>}>
						<Route path=":id" element={<></>}/>
					</Route>
				</Route>
				<Route path="locations" element={<></>}/>
				<Route path="players" element={<></>}/>
				<Route path="access-management" element={<></>}/>
			</Routes>
		</>
	);
}

export default App;
