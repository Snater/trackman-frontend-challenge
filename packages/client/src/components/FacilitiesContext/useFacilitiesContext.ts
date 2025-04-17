import FacilitiesContext, {type FacilitiesContextType} from './FacilitiesContext';
import {use} from 'react';

export default function useFacilitiesContext(): FacilitiesContextType {
	const context = use(FacilitiesContext);

	if (!context) {
		throw new Error('useFacilitiesContext must be used within a FacilitiesProvider');
	}

	return context;
}
