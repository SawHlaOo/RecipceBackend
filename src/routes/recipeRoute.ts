
import { validate } from "../middleware/validate";
import { recipeController } from "../controller/recipeController";
import { Router } from "express";
import { recipeSchema } from "../validators/recipce";
import { authenticate } from "../middleware/auth";
import { authorize } from "../middleware/role";

const router = Router();

router.get('/',recipeController.getAllRecipe)
router.get('/:id',recipeController.getRecipeById)
router.post('/',authenticate,authorize('ADMIN'),recipeController.createRecipe)
router.patch('/:id',authenticate,authorize('ADMIN'),validate(recipeSchema.partial()),recipeController.updateRecipe)
router.delete('/:id',authenticate,authorize('ADMIN'),recipeController.deleteRecipe)

export default router;