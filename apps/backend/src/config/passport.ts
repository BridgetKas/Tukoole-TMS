import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import User from '../features/user/user.model'
import { AppError } from '../utils/AppError'
import { UserI } from '../features/user/user.model'

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_CALLBACK_URL as string
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: (error: any, user?: UserI | false) => void
    ) => {
      try {
        const email = profile.emails?.[0].value
        const fullName = profile.displayName

        if (!email) {
          return done(
            new AppError('No email associated with this Google account', 400)
          )
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
          if (existingUser.authProvider === 'local') {
            return done(
              new AppError(
                'Email already registered. Please login with your password',
                409
              )
            )
          }
          return done(null, existingUser)
        }

        const newUser = await User.create({
          fullName,
          email,
          authProvider: 'google',
          isProfileComplete: false
        })

        return done(null, newUser)

      } catch (error) {
        return done(error)
      }
    }
  )
)

export default passport