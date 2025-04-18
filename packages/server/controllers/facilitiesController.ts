import * as path from 'node:path';
import {Request, Response} from 'express';
import type {Facility} from 'schemas';
import fs from 'fs';

export async function facilities(_req: Request, res: Response) {
	const fileContent = fs.readFileSync(path.join(__dirname, '..', 'FACILITIES.json'), 'utf8');
	const facilities = JSON.parse(fileContent) as Facility[];

	// Have the default facility always be first.
	facilities.sort(a => a.isDefault ? -1 : 1);

	res.setHeader('content-type', 'application/json');
	res.json(facilities);
}
