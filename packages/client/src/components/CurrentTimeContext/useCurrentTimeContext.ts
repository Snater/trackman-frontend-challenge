import CurrentTimeContext, {type CurrentTimeContextType} from './CurrentTimeContext';
import {use} from 'react';

export default function useCurrentTimeContext(): CurrentTimeContextType {
	const context = use(CurrentTimeContext);

	if (!context) {
		throw new Error('useCurrentTimeContext must be used within a CurrentTimeProvider');
	}

	return context;
}
