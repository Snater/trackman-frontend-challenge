import FacilitiesContext from './FacilitiesContext';
import type {Facility} from '@/types';
import {PropsWithChildren} from 'react';
import {useQuery} from '@tanstack/react-query';

type Props = PropsWithChildren

export default function FacilitiesProvider({children}: Props) {
	const {data} = useQuery<Facility[]>({
		queryKey: ['facilities'],
		queryFn: async (): Promise<Facility[]> => {
			const response = await fetch(
				`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT}/facilities`,
				{mode: 'cors'}
			);
			return response.json();
		},
	});

	return (
		<FacilitiesContext.Provider value={{facilities: data}}>
			{children}
		</FacilitiesContext.Provider>
	);
}
