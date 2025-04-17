import {Outlet} from 'react-router';

export default function Layout() {
	return (
		<div className="container mx-auto pb-4 pt-10.75 px-2">
			<Outlet/>
		</div>
	);
}
