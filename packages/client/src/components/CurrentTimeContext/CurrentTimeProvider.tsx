import {PropsWithChildren, useEffect, useState} from 'react';
import CurrentTimeContext from './CurrentTimeContext';

type Props = PropsWithChildren

function dateToTime(date: Date) {
	return date.toLocaleTimeString('dk').substring(0, 5);
}

export default function CurrentTimeProvider({children}: Props) {
	const [currentTime, setCurrentTime] = useState(dateToTime(new Date()));

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(dateToTime(new Date()));
		}, 30000);

		return () => {
			clearInterval(intervalId);
		}
	}, []);

	return (
		<CurrentTimeContext.Provider value={{currentTime}}>
			{children}
		</CurrentTimeContext.Provider>
	);
}
