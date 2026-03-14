import { Request, Response, NextFunction } from 'express'
import { ZodType } from 'zod'
import { ApiResponse } from '../utils/ApiResponse'

export const validate = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)
    
    if (!result.success) {
      const errors = result.error.issues.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
      
      res.status(400).json(ApiResponse.error('Validation failed', errors))
      return
    }

    req.body = result.data
    next()
  }
}