import {z} from 'zod';

const WorkingHoursSchema = z.tuple([
	z.string().regex(/[0-9]{1,2}:[0-9]{2}/).transform(value => value.padStart(5, '0')),
	z.string().regex(/[0-9]{1,2}:[0-9]{2}/).transform(value => value.padStart(5, '0'))
]);

export type WorkingHours = z.infer<typeof WorkingHoursSchema>;

export const FacilitySchema = z.object({
	id: z.string().optional(),
	name: z.string().nonempty(),
	address: z.string().nonempty(),
	description: z.string().nonempty(),
	image: z.string().url().nonempty(),
	workingHours: WorkingHoursSchema,
	isDefault: z.boolean(),
});

export type Facility = z.infer<typeof FacilitySchema>;
