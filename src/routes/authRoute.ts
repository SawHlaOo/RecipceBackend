

import { authController } from "../controller/authController";
import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { validate } from "../middleware/validate";
import { registerSchema , loginSchema } from "../validators/auth";

const router= Router()

router.post('/register', validate(registerSchema), authController.register)
router.post('/login', validate(loginSchema), authController.login)
router.get('/me',authenticate ,authController.me)


export default router;

