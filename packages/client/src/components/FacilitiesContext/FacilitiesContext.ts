import type {Facility} from '@/types';
import {createContext} from 'react';

export interface FacilitiesContextType {
	facilities?: Facility[]
}

const FacilitiesContext = createContext<FacilitiesContextType | null>(null);

export default FacilitiesContext;
