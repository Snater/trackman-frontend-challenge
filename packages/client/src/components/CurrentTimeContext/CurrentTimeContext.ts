import {createContext} from 'react';

export interface CurrentTimeContextType {
	currentTime: string
}

const CurrentTimeContext = createContext<CurrentTimeContextType | null>(null);

export default CurrentTimeContext;
