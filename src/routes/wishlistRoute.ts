


import { wishlistController } from "../controller/wishlistController";
import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { authorize } from "../middleware/role";

const router=Router()

router.post('/:id',authenticate,authorize('ADMIN'),wishlistController.createWishlist)
router.get('/',wishlistController.getWishlist)
router.get('/:id',authenticate,wishlistController.findWishlist)
router.delete('/:id',authenticate,wishlistController.removeWishlist)

export default router;
