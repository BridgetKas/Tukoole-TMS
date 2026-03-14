import mongoose, { Document, Schema } from 'mongoose'

export interface UserI extends Document {
  fullName: string
  field:string
  email: string
  password?: string
  phoneNumber: string
  yearsOfExperience: number
  cvFile?: string
  authProvider: 'local' | 'google'
  createdAt: Date
}

const UserSchema = new Schema<UserI>({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
   field: {
    type: String,
    required: [true, 'Field is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    select: false
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  yearsOfExperience: {
    type: Number,
    required: [true, 'Years of experience is required']
  },
  cvFile: {
    type: String
  },
  authProvider: {
    type: String,
    enum: {
      values: ['local', 'google'],
      message: 'Auth provider must be either local or google'
    },
    default: 'local'
  }
}, {
  timestamps: true
})

export default mongoose.model<UserI>('User', UserSchema)