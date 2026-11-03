
import { ApiError } from "../middleware/errorhandler";
import { categroyRepo } from "../repositories/categoryRepo";


export const categoryService={
    createCategory:(data:any)=>categroyRepo.createCategory(data),
    getAllCategory:()=>categroyRepo.findAllCategories(),
    getCategoryById:async(id:string)=>{
       const category= await categroyRepo.findById(id)
       if(!category){
        throw new ApiError("cateory not found",404)
       }
       return category
    },
    getCategoryBySlug:async(slug:string)=>{
        const category= await categroyRepo.findBySllug(slug)
        if(!category)
            throw new ApiError("category not found",404);
        return category;
    },
    updateCategory:async (id:string,data:any)=>{
        const category= await categroyRepo.findById(id)
        if(!category){
            throw new ApiError("category not found to be updated",404)
        }
        return categroyRepo.updateCategory(id,data)
    },
    deleteCategory:async (id:string)=>{
        const category=await categroyRepo.findById(id)
        if(!category){
            throw new ApiError("category not found to be deleted",404)
        }
        return categroyRepo.removeCategory(id)  
    }




}





// export const categroyRepo={
//      createCategory:(data:any)=> prisma.category.create({data}),
//      findAllCategories:()=> prisma.category.findMany(),
//      findById:(id:string)=> prisma.category.findUnique({where:{id}}),
//      findBySllug:(slug:string)=> prisma.category.findUnique({where:{slug}}),
//      updateCategory:(id:string,data:any)=>prisma.category.update({where:{id},data}),
//      removeCategory:(id:string)=>prisma.category.delete({where:{id}})
// }










