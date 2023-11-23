import z from 'zod'

export const registerSchema = z.object({
    username: z.string({ required_error: 'username is requiered' }),
    email: z.string({ required_error: 'email is requiered' }).email({ message: 'Invalid email' }),
    password: z.string({ required_error: 'password is requiered' }).min(6, { message: 'Password must be at least 6 characters' }),
})

export const loginSchema = z.object({
    email: z.string({ required_error: 'email is requiered' }).email({ message: 'Invalid email' }),
    password: z.string({ required_error: 'password is requiered' }).min(6, { message: 'Password must be at least 6 characters' }),
})