import {z} from 'zod';

export const FormSchema = z.object({
	name: z.string(),
	address: z.string(),
	description: z.string(),
	image: z.string(),
	openingTime: z.string(),
	closingTime: z.string(),
	isDefault: z.string(),
});
