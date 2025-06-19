import {z} from 'zod/v4';

const WorkingHoursSchema = z.tuple([
	z.iso.time({precision: -1}),
	z.iso.time({precision: -1}),
]);

export type WorkingHours = z.infer<typeof WorkingHoursSchema>;

export const FacilitySchema = z.object({
	id: z.string().optional(),
	name: z.string().nonempty(),
	address: z.string().nonempty(),
	description: z.string().nonempty(),
	image: z.url().nonempty(),
	workingHours: WorkingHoursSchema,
	isDefault: z.boolean(),
});

export type Facility = z.infer<typeof FacilitySchema>;
