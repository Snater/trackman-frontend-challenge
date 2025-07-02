import {PropsWithChildren} from 'react';

type Props = PropsWithChildren

export default function FacilitiesGridContainer({children}: Props) {
	return (
		<div className="grid gap-1.5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
			{children}
		</div>
	);
}
