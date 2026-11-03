import {prisma} from '../../lib/prisma';


          
                                      

export const recipeRepo= {
    createRecipe :(data:any)=> prisma.recipe.create({data}) ,
    findAllRecipes:()=>prisma.recipe.findMany(),
   findRecipeById:(id:string)=>prisma.recipe.findUnique({where:{id}}),
    findRecipeBySlug:(slug:string)=>prisma.recipe.findUnique({where:{slug}}),
    updateRecipe:(id:string,data: any)=>prisma.recipe.update({where:{id},data}),
    deleteRecipe:(id:string)=>prisma.recipe.delete({where:{id}}),
    countRecipe:()=>prisma.recipe.count()
}






// #	Function	Purpose
// 1	createRecipe()	Create a new recipe
// 2	findAllRecipes()	Retrieve recipes with pagination
// 3	findRecipeById()	Find a recipe by ID
// 4	findRecipeBySlug()	Find a recipe by its URL slug
// 5	updateRecipe()	Update recipe information
// 6	deleteRecipe()	Delete a recipe
// 7	countRecipes()	Count recipes for pagination






// model Recipe{

// id   String   @id @default(cuid())
// title String @ 
// slug  String @unique
// categoryId String
// category Category @relation(fields: [categoryId], references:[id])

// imageUrl String
// instructionContent String
// ingredientList String
// equipment  String
// prepTime   Int
// cookTime   Int
// totalTime  Int
// yield      Int
// isActive  Boolean @default(true)

// favourites Favourite[]

// @@index([isActive])
// }




// type FoodData = {
//   name: string;
//   slug: string;
//   description: string;
//   price: number;
//   imageUrl?: string;
//   categoryId: string;
//   ingredients: string[];
//   preparationTime?: number;
//   isAvailable?: boolean;
// };

// create: (data: FoodData) => prisma.food.create({ data }),
// update: (id: string, data: Partial<FoodData>) =>
//   prisma.food.update({ where: { id }, data }),


