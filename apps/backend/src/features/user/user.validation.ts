import { z } from 'zod'

export const completeProfileSchema = z.object({
  phoneNumber: z.string()
    .regex(/^\+?[\d\s\-\(\)]{10,15}$/, 'Please provide a valid phone number'),
  yearsOfExperience: z.coerce.number()
    .min(0, 'Years of experience cannot be negative')
    .max(20, 'Years of experience cannot exceed 20')
})

export type CompleteProfileInput = z.infer<typeof completeProfileSchema>