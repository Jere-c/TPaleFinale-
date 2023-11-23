import { Router } from "express";

import { authRequiere } from "../middlewares/validateToken.js";

import { login , register, logout, profile } from "../controllers/auth.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";

import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login' , validateSchema(loginSchema), login)
router.post('/logout' , logout)
router.get('/profile', authRequiere, profile)

export default router