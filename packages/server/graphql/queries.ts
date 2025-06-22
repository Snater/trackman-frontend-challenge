import fs from 'fs';
import path from 'path';
import {type Facility} from 'schemas';
import {fileURLToPath} from 'url';

export default {
	facilities: async () => {
		const currentDir = path.dirname(fileURLToPath(import.meta.url));
		const storageFile = path.join(currentDir, '..', 'FACILITIES.json');
		const fileContent = fs.readFileSync(storageFile, 'utf8');
		const facilities = JSON.parse(fileContent) as Facility[];

		// Have the default facility always be first.
		facilities.sort(a => a.isDefault ? -1 : 1);
		return facilities;
	},
};