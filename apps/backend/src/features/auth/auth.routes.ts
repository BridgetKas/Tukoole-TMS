import { Router } from 'express'
import { registerUser } from './auth.controller'
import { validate } from '../../middleware/validate.middleware'
import { upload } from '../../middleware/upload.middleware'
import { registerSchema } from './auth.validation'

const router = Router()

router.post(
  '/register',
  upload.single('cvFile'),
  validate(registerSchema),
  registerUser
)

export default router