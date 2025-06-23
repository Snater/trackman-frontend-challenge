import FacilitiesContext from './FacilitiesContext';
import {gql, useQuery} from '@apollo/client';
import type {Facility} from 'schemas';
import {PropsWithChildren} from 'react';

type Props = PropsWithChildren

const ALL_FACILITIES = gql`
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
	const {data} = useQuery<{facilities: Facility[]}>(ALL_FACILITIES);

	return (
		<FacilitiesContext.Provider value={{facilities: data?.facilities}}>
			{children}
		</FacilitiesContext.Provider>
	);
}
