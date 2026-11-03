



import { wishlistRepo } from "../repositories/wishlistRepo";
import { userRepo } from "../repositories/userRepo";
import { recipeRepo } from "../repositories/recipeRepo";
import { ApiError } from "../middleware/errorhandler";

export const wishlistService={
      createWishlist:async(userId:string,recipeId:string)=> {
        const user= await userRepo.findById(userId)
        const recipe= await recipeRepo.findRecipeById(recipeId)
        if (!user || !recipe){
            throw new ApiError("user or recipe not found",404)
        }
        return wishlistRepo.createWishlist(userId,recipeId)
      },
      getWishlist:async(userId:string)=>{
        const user= await userRepo.findById(userId)
        if(!user){
            throw new ApiError("user not found",404)
        }
        return wishlistRepo.getWishlist(userId)
      },
      findWishlist:async(userId:string,recipeId:string)=>{
     
        const user= await userRepo.findById(userId)
        const recipe= await recipeRepo.findRecipeById(recipeId)
        if (!user && !recipe){
            throw new ApiError("user or recipe not found",404)
        }
         return wishlistRepo.findWishlist(userId,recipeId)
        },
        removeWishlist: async(userId:string,recipeId:string)=>{
        const user= await userRepo.findById(userId)
        const recipe= await recipeRepo.findRecipeById(recipeId)
        if (!user && !recipe){
            throw new ApiError("user or recipe not found",404)
        }
            return wishlistRepo.remoeWishlist(userId,recipeId)
        }
}

























// import { prisma } from "../../lib/prisma"

// export const wishlistRepo={
//         createWishlist: (userId:string,recipeId:string)=> prisma.favourite.upsert(
//         {where:{
//             userId_recipeId:{userId,recipeId}
//         },
//       update:{},
//         create:{
//             userId,
//             recipeId
//         },
//     include:{
//         recipe:true
//     }}),

//     getWishlist: (userId:string)=> prisma.favourite.findMany({
//         where:{userId},
//         orderBy:{
//             createdAt: 'desc'
//         },
//         include:{
//             recipe:true }
//     }),

//         findWishlist: (userId:string,recipeId:string)=> prisma.favourite.findUnique({where:{userId_recipeId:{
//             userId,recipeId}},}),
//         remoeWishlist: (userId:string,recipeId:string)=> prisma.favourite.delete(
//             {where:{
//                 userId_recipeId:{
//                     userId,recipeId
//                 }
//             }}
//         )
    
        
// }



