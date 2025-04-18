import type {Facility} from 'schemas';
import {createContext} from 'react';

export interface FacilitiesContextType {
	facilities?: Facility[]
}

const FacilitiesContext = createContext<FacilitiesContextType | null>(null);

export default FacilitiesContext;
