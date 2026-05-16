import { UserI } from '../features/user/user.model'

declare global {
  namespace Express {
    interface User extends UserI {}
    interface Request {
      user?: UserI
    }
  }
}