import { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/AppError'
import { ApiResponse } from '../utils/ApiResponse'

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = error instanceof AppError ? error.statusCode : 500
  const message = error instanceof AppError ? error.message : 'Server error, please try again'
  
  res.status(statusCode).json(ApiResponse.error(message))
}