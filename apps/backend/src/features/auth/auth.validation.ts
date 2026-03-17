import { z } from 'zod'

export const registerSchema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name cannot exceed 50 characters'),

  email: z.string()
    .email('Please provide a valid email'),

  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      'Password must contain uppercase, lowercase, number and special character'
    ),

  confirmPassword: z.string(),

  phoneNumber: z.string()
    .regex(/^\+?[\d\s\-\(\)]{10,15}$/, 'Please provide a valid phone number'),

  yearsOfExperience: z.number()
    .min(0, 'Years of experience cannot be negative')
    .max(20, 'Years of experience cannot exceed 20'),

  authProvider: z.enum(['local', 'google']).default('local')

}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  }
)


export const completeProfileSchema = z.object({
  phoneNumber: z.string()
    .regex(/^\+?[\d\s\-\(\)]{10,15}$/, 'Please provide a valid phone number'),
  yearsOfExperience: z.number()
    .min(0, 'Years of experience cannot be negative')
    .max(20, 'Years of experience cannot exceed 20')
})


export type CompleteProfileInput = z.infer<typeof completeProfileSchema>
export type RegisterInput = z.infer<typeof registerSchema>