import {Request, Response} from 'express';
import fs from 'fs';
import * as path from 'node:path';

export async function facilities(_req: Request, res: Response) {
	res.setHeader('content-type', 'application/json');
	fs.createReadStream(path.join(__dirname, '..', 'FACILITIES.json')).pipe(res);
}
