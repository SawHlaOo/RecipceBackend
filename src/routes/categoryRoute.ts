

import { adminController } from "../controller/adminController";
import { authenticate } from "../middleware/auth";
import { authorize } from "../middleware/role";
import Router from 'express';

const router=Router()

router.get('/',adminController.getAllCategories)
router.get('/:id',adminController.getCategory)
router.post('/',authenticate,authorize('ADMIN'),adminController.createCategory)
router.patch('/:id',authenticate,authorize('ADMIN'),adminController.updateCategory)
router.delete('/:id',authenticate,authorize('ADMIN'),adminController.deleteCategory)

export default router;
