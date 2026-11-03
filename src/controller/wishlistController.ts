

import { Request,Response,NextFunction } from "express";


import { wishlistService } from "../services/wishlistService";
import { sendSuccess } from "../utilis/api";


export const wishlistController={
   createWishlist:async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const userId=String(req.user?.userId)
        const recipeId=String(req.params.id)
        const result = wishlistService.createWishlist(userId,recipeId)
        return res.status(201).json(sendSuccess(result))
    }
    catch (error){
        next(error)

    }},
    getWishlist: async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const userId=String(req.user?.userId)
            const result = await wishlistService.getWishlist(userId)
            return res.status(200).json(sendSuccess(result))
        }
        catch (error){
            next(error)
        }
    },
    findWishlist:async(req:Request,res:Response,next:NextFunction)=>{
          try{
              const userId=String(req.user?.userId)
              const recipeId=String(req.params.id)
              const result =await wishlistService.findWishlist(userId,recipeId)
              return res.status(200).json(sendSuccess(result))
          }
          catch (error){
            next(error);
          }
    },
    removeWishlist:async(req:Request,res:Response,next:NextFunction)=>{
             try{
                const userId=String(req.user?.userId)
                const recipeId=String(req.params.id)
                const result= await wishlistService.removeWishlist(userId,recipeId)
                return res.status(200).json(sendSuccess(result))
             }
             catch (error){
                next(error);

             }
    }
    
}








// import { wishlistRepo } from "../repositories/wishlistRepo";
// import { userRepo } from "../repositories/userRepo";
// import { recipeRepo } from "../repositories/recipeRepo";
// import { ApiError } from "../middleware/errorhandler";

// export const wishlistService={
//       createWishlist:async(userId:string,recipeId:string)=> {
//         const user= await userRepo.findById(userId)
//         const recipe= await recipeRepo.findRecipeById(recipeId)
//         if (!user && !recipe){
//             throw new ApiError("user or recipe not found",404)
//         }
//         wishlistRepo.createWishlist(userId,recipeId)
//       },
//       getWishlist:async(userId:string)=>{
//         const user= await userRepo.findById(userId)
//         if(!user){
//             throw new ApiError("user not found",404)
//         }
//         return wishlistRepo.getWishlist(userId)
//       },
//       findWishlist:async(userId:string,recipeId:string)=>{
     
//         const user= await userRepo.findById(userId)
//         const recipe= await recipeRepo.findRecipeById(recipeId)
//         if (!user && !recipe){
//             throw new ApiError("user or recipe not found",404)
//         }
//          return wishlistRepo.findWishlist(userId,recipeId)
//         },
//         removeWishlist: async(userId:string,recipeId:string)=>{
//         const user= await userRepo.findById(userId)
//         const recipe= await recipeRepo.findRecipeById(recipeId)
//         if (!user && !recipe){
//             throw new ApiError("user or recipe not found",404)
//         }
//             return wishlistRepo.remoeWishlist(userId,recipeId)
//         }
// }
