import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import User from '../user/user.model'
import { ApiResponse } from '../../utils/ApiResponse'
import { AppError } from '../../utils/AppError'
import { RegisterInput } from './auth.validation'
import { UserI } from '../user/user.model'

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      fullName,
      email,
      password,
      phoneNumber,
      yearsOfExperience
    } = req.body as RegisterInput

    const cvFile = req.file?.path

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      throw new AppError('Email already exists', 409)
    }

    let hashedPassword: string | undefined
    if (password) {
      const salt = await bcrypt.genSalt(10)
      hashedPassword = await bcrypt.hash(password, salt)
    }

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      yearsOfExperience,
      cvFile,
      authProvider: 'local'
    })

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    )

    const userResponse = user.toObject()
    delete userResponse.password

    res.status(201).json(
      ApiResponse.ok('Registration successful', {
        user: userResponse,
        token
      })
    )
  } catch (error) {
    console.error('Register error',error)
    next(error)
  }
}

export const googleAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false
  })(req, res, next)
}

export const googleCallback = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  passport.authenticate(
    'google',
    { session: false },
    async (
      error: Error | null,
      user: UserI | false | null | undefined
    ) => {
      try {
        if (error) {
          throw new AppError(
            error.message,
            (error as AppError).statusCode || 401
          )
        }

        if (!user) {
          throw new AppError('Google authentication failed', 401)
        }

        const token = jwt.sign(
          { id: user._id, email: user.email },
          process.env.JWT_SECRET as string,
          { expiresIn: '7d' }
        )

        if (!user.isProfileComplete) {
          res.redirect(
            `${process.env.CLIENT_URL}/complete-profile?token=${token}`
          )
          return
        }

        res.redirect(
          `${process.env.CLIENT_URL}/dashboard?token=${token}`
        )
      } catch (error) {
        next(error)
      }
    }
  )(req, res, next)
}