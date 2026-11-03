


import { ApiError } from "../middleware/errorhandler";
import { recipeRepo } from "../repositories/recipeRepo";


export const recipeService={
      ceateRecipe:async (payload:any)=> recipeRepo.createRecipe(payload),
      countRecipe:async ()=> recipeRepo.countRecipe(),
      getAllRecipes:async ()=> recipeRepo.findAllRecipes(),
      getRecipeById: async (id:string)=> {
            const recipe=await recipeRepo.findRecipeById(id)
             if (!recipe){
                  throw new ApiError("recipe not found",404)
             }
             return recipe
      },
      updateRecipe: async(id:string,data:any)=> {
             const recipe=await recipeRepo.findRecipeById(id)
             if (!recipe){
                  throw new ApiError("recipe not found to be updated",404)
             }
             return recipeRepo.updateRecipe(id,data)
      },

      deleteRecipe: async(id:string)=>{
            const recipe= await recipeRepo.findRecipeById(id)
            if (!recipe){
                  throw new ApiError("recipe not found to be deleted",404)
            }
            return recipeRepo.deleteRecipe(id)
      }
}






// export const recipeRepo= {
//     createRecipe :(data: RecipeData)=> prisma.recipe.create({data}) ,
//     findAllRecipes:()=>prisma.recipe.findMany(),
//    findRecipeById:(id:string)=>prisma.recipe.findUnique({where:{id}}),
//     findRecipeBySlug:(slug:string)=>prisma.recipe.findUnique({where:{slug}}),
//     updateRecipe:(id:string,data: Partial<RecipeData>)=>prisma.recipe.update({where:{id},data}),
//     deleteRecipe:(id:string)=>prisma.recipe.delete({where:{id}}),
//     countRecipe:()=>prisma.recipe.count()
// }