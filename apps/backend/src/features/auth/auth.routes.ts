import { Router } from 'express'
import { registerUser, googleAuth, googleCallback } from './auth.controller'
import { validate } from '../../middleware/validate.middleware'
import { upload } from '../../middleware/upload.middleware'
import { registerSchema } from './auth.validation'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - password
 *               - confirmPassword
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: Password123!
 *               confirmPassword:
 *                 type: string
 *                 example: Password123!
 *               phoneNumber:
 *                 type: string
 *                 example: +256700123456
 *               yearsOfExperience:
 *                 type: number
 *                 example: 3
 *               cvFile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Registration successful
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                     user:
 *                       type: object
 *       409:
 *         description: Email already exists
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post(
  '/register',
  upload.single('cvFile'),
  validate(registerSchema),
  registerUser
)

/**
 * @swagger
 * /api/auth/google:
 *   get:
 *     summary: Initiate Google OAuth
 *     tags: [Auth]
 *     description: Redirects the user to Google login page
 *     responses:
 *       302:
 *         description: Redirects to Google
 */
router.get('/google', googleAuth)

/**
 * @swagger
 * /api/auth/google/callback:
 *   get:
 *     summary: Google OAuth callback
 *     tags: [Auth]
 *     description: Handles Google's response after authentication
 *     responses:
 *       302:
 *         description: Redirects to frontend with token
 *       401:
 *         description: Google authentication failed
 *       409:
 *         description: Email already registered with password
 */
router.get('/google/callback', googleCallback)

export default router