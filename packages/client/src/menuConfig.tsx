import Facilities from '@/pages/Facilities';
import Edit from '@/pages/Facilities/Edit';
import {RouteObject} from 'react-router';
import Layout from '@/components/Layout';

export type MenuItem = RouteObject & {
	children?: MenuItem[]
	i18nLabel?: string
}

const menu: MenuItem[] = [
	{
		element: <Layout/>,
		children: [
			{
				element: <></>,
				index: true,
			},
			{
				path: '/facilities',
				i18nLabel: 'nav.label.facilities',
				children: [
					{
						element: <Facilities/>,
						index: true
					},
					{
						path: 'add',
						element: <Edit/>,
					},
					{
						path: 'edit/:id',
						element: <Edit/>,
					}
				],
			},
			{
				path: '/locations',
				i18nLabel: 'nav.label.locations',
				element: <></>,
			},
			{
				path: '/players',
				i18nLabel: 'nav.label.players',
				element: <></>,
			},
			{
				path: '/access-management',
				i18nLabel: 'nav.label.accessManagement',
				element: <></>,
			},
		],
	}
];

export default menu;
