import fs from 'fs';
import path from 'path';
import {type Facility, FacilitySchema} from 'schemas';
import {fileURLToPath} from 'url';
import uniqid from 'uniqid';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const storageFile = path.join(currentDir, '..', 'FACILITIES.json');

function getFacilities(resetDefault?: boolean): Facility[] {
	const fileContent = fs.readFileSync(storageFile, 'utf8');
	let facilities = JSON.parse(fileContent) as Facility[];

	if (resetDefault) {
		// The submitted facility being the new default, the current default has to be reset.
		facilities = facilities.map(facility => {
			return !facility.isDefault ? facility : {...facility, isDefault: false};
		});
	}

	return facilities;
}

function saveFacilities(facilities: Facility[]) {
	fs.writeFileSync(
		storageFile,
		JSON.stringify(facilities, null, 2)
	);
}

export default {
	addFacility: async (_: unknown, params: {facility: {facilityData: Omit<Facility, 'id'>}}) => {
		const {data, error} = FacilitySchema.safeParse(params.facility.facilityData);

		if (!data || error) {
			throw error;
		}

		const facilities: Facility[] = [...getFacilities(data.isDefault), {...data, id: uniqid()}];

		saveFacilities(facilities);

		return {success: true};
	},

	updateFacility: async (_: unknown, params: {facility: {id: Pick<Facility, 'id'>, facilityData: Omit<Facility, 'id'>}}) => {
		const {data, error} = FacilitySchema.safeParse(
			{id: params.facility.id, ...params.facility.facilityData}
		);

		if (!data || error) {
			throw error;
		}

		const facilities: Facility[] = getFacilities(data.isDefault)
			.map(facility => facility.id === data.id ? data : facility);

		saveFacilities(facilities);

		return {success: true};
	},

	deleteFacility: async (_: unknown, params: {facilityId: string}) => {
		const facilities = getFacilities();

		const updatedFacilities = facilities.filter(facility => facility.id !== params.facilityId);

		// Ensure there is a default facility.
		if (
			updatedFacilities.length > 0
			&& !updatedFacilities.some(facility => facility.isDefault)
		) {
			updatedFacilities[Math.floor(Math.random() * updatedFacilities.length)].isDefault = true;
		}

		saveFacilities(updatedFacilities);

		return params.facilityId;
	}
};