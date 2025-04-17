export type Facility = {
	id: string
	name: string
	address: string
	description: string
	image: string
	workingHours: WorkingHours
	isDefault: boolean
}

export type WorkingHours = [string, string]
