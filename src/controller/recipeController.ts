

import { NextFunction,Request,Response } from "express";
import { recipeService } from "../services/recipeService";
import { sendError, sendSuccess } from "../utilis/api";


export const recipeController={
          getAllRecipe:async(req:Request,res:Response,next:NextFunction)=>{
            try{
               const result= await recipeService.getAllRecipes()
               res.status(200).json(sendSuccess(result))
            }
            catch(error){
               next(error)
            }
          },
          getRecipeById:async(req:Request,res:Response,next:NextFunction)=>{
            try{
              const id=String(req.params.id)
              const result=await recipeService.getRecipeById(id)
              res.status(200).json(sendSuccess(result))
            }
            catch(error){
              next(error)
            }
          },
          deleteRecipe:async(req:Request,res:Response,next:NextFunction)=>{
            try{
               const id=String(req.params.id)
               const result=await recipeService.deleteRecipe(id)
               res.status(200).json(sendSuccess(result))
            }
            catch(error){
                next(error)
            }      
          },
          updateRecipe:async(req:Request,res:Response,next:NextFunction)=>{
            try{
                 const id=String(req.params.id)
                 const result=await recipeService.updateRecipe(id,req.body)
                 res.status(200).json(sendSuccess(result))
            }
            catch(error){
                    next(error)
            }
          },
          createRecipe:async(req:Request,res:Response,next:NextFunction)=>{
            try{
              const result=await recipeService.ceateRecipe(req.body)
              res.status(201).json(sendSuccess(result))
            }
            catch(error){
               next(error)
            }
          },      
}






