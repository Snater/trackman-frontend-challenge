import {z} from 'zod';

const WorkingHoursSchema = z.tuple([z.string(), z.string()]);

export type WorkingHours = z.infer<typeof WorkingHoursSchema>;

export const FacilitySchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	address: z.string(),
	description: z.string(),
	image: z.string(),
	workingHours: WorkingHoursSchema,
	isDefault: z.boolean(),
});

export type Facility = z.infer<typeof FacilitySchema>;
