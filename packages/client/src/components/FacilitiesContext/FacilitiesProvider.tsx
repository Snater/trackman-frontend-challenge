import FacilitiesContext from './FacilitiesContext';
import {gql, request} from 'graphql-request';
import type {Facility} from 'schemas';
import {PropsWithChildren} from 'react';
import {useQuery} from '@tanstack/react-query';

type Props = PropsWithChildren

const allFacilities = gql`
	query AllFacilities {
		facilities {
			address
			description
			id
			image
			isDefault
			name
			workingHours
		}
	}
`;

export default function FacilitiesProvider({children}: Props) {
	const {data} = useQuery<Facility[]>({
		queryKey: ['facilities'],
		queryFn: async (): Promise<Facility[]> => {
			const response = await request<{facilities: Facility[]}>(
				`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT}/graphql`,
				allFacilities
			);
			return response.facilities;
		},
	});

	return (
		<FacilitiesContext.Provider value={{facilities: data}}>
			{children}
		</FacilitiesContext.Provider>
	);
}
