import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AppError } from '../utils/AppError'
import { UserI } from '../features/user/user.model'
import User from '../features/user/user.model'

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('No token provided', 401)
    }

    const token = authHeader.split(' ')[1]

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as { id: string; email: string }

    const user = await User.findById(decoded.id).select('-password')

    if (!user) {
      throw new AppError('User no longer exists', 401)
    }

    req.user = user

    next()

  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new AppError('Invalid token', 401))
      return
    }
    if (error instanceof jwt.TokenExpiredError) {
      next(new AppError('Token has expired, please login again', 401))
      return
    }
    next(error)
  }
}