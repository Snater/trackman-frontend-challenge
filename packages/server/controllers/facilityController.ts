import * as path from 'node:path';
import {type Facility, FacilitySchema} from 'schemas';
import {Request, Response} from 'express';
import fs from 'fs';
import uniqid from 'uniqid';

export function facility(req: Request, res: Response) {
	const facility = req.body;

	const {data, error} = FacilitySchema.safeParse(facility);

	if (!data || error) {
		throw error;
	}

	const fileContent = fs.readFileSync(path.join(__dirname, '..', 'FACILITIES.json'), 'utf8');
	let facilities = JSON.parse(fileContent) as Facility[];

	if (data.isDefault) {
		// The submitted facility being the new default, the current default has to be reset.
		facilities = facilities.map(facility => {
			return !facility.isDefault ? facility : {...facility, isDefault: false};
		});
	}

	facilities = (data.id === '')
		? [...facilities, {...data, id: uniqid()}]
		: facilities.map(facility => facility.id === data.id ? data : facility);

	fs.writeFileSync(
		path.join(__dirname, '..', 'FACILITIES.json'),
		JSON.stringify(facilities, null, 2)
	);

	res.json(facilities);
}

export function facilityDelete(req: Request, res: Response) {
	const {id} = req.body;

	const fileContent = fs.readFileSync(path.join(__dirname, '..', 'FACILITIES.json'), 'utf8');
	const facilities = JSON.parse(fileContent) as Facility[];

	const updatedFacilities = facilities.filter(facility => facility.id !== id);

	// Ensure there is a default facility.
	if (
		updatedFacilities.length > 0
		&& !updatedFacilities.some(facility => facility.isDefault)
	) {
		updatedFacilities[Math.floor(Math.random() * updatedFacilities.length)].isDefault = true;
	}

	fs.writeFileSync(
		path.join(__dirname, '..', 'FACILITIES.json'),
		JSON.stringify(updatedFacilities, null, 2)
	);

	res.json(updatedFacilities);
}
