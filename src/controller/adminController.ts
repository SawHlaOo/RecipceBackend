
import { NextFunction ,Response,Request} from "express"
import { categoryService } from "../services/categoryService"
import { sendSuccess } from "../utilis/api"

export const adminController={

    createCategory:async(req:Request,res:Response,next:NextFunction)=>{
        try{
           const category=await categoryService.createCategory(req.body)
           res.status(201).json(sendSuccess(category))
        }
        catch(error){
           next(error)
        }
    },
    updateCategory:async(req:Request,res:Response,next:NextFunction)=>{
        try{
            const id=String(req.params.id)
            const category=await categoryService.updateCategory(id,req.body)
            res.status(200).json(sendSuccess(category))
        }
        catch(error){
             next(error)
        }
    },
    deleteCategory: async(req:Request,res:Response,next:NextFunction)=>{
         try{
            const id=String(req.params.id)
            const category= await categoryService.deleteCategory(id)
            res.status(200).json(sendSuccess(category))
         }
         catch(error){
              next(error)
         }
    },
    getCategory:async(req:Request,res:Response,next:NextFunction)=>{
        try{
            const id=String(req.params.id)
            const category=await categoryService.getCategoryById(id)
            res.status(200).json(sendSuccess(category))  
        }
        catch (error){
             next(error) 
        }
    },
    getAllCategories: async(req:Request,res:Response,next:NextFunction)=>{
        try{
           const categories= await categoryService.getAllCategory()
           res.status(200).json(sendSuccess(categories))  
        }
        catch (error){
            next(error)
        }
    }
}