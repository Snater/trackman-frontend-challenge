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
	const facilities = JSON.parse(fileContent) as Facility[];

	const updatedFacilities = (data.id === undefined)
		? [...facilities, {...data, id: uniqid()}]
		: facilities.map(facility => facility.id === data.id ? data : facility);

	fs.writeFileSync(
		path.join(__dirname, '..', 'FACILITIES.json'),
		JSON.stringify(updatedFacilities, null, 2)
	);

	res.json(updatedFacilities);
}
