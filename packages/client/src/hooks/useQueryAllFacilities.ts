import {gql, useSuspenseQuery} from '@apollo/client';
import type {Facility} from 'schemas';

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

export default function useQueryAllFacilities() {
	const {data} = useSuspenseQuery<{facilities: Facility[]}>(ALL_FACILITIES);

	return data.facilities;
}
