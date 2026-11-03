

import {prisma} from '../../lib/prisma';



export const categroyRepo={
     createCategory:(data:any)=> prisma.category.create({data}),
     findAllCategories:()=> prisma.category.findMany(),
     findById:(id:string)=> prisma.category.findUnique({where:{id}}),
     findBySllug:(slug:string)=> prisma.category.findUnique({where:{slug}}),
     updateCategory:(id:string,data:any)=>prisma.category.update({where:{id},data}),
     removeCategory:(id:string)=>prisma.category.delete({where:{id}})
}









// model Category{

// id String @id @default(cuid())
// name String
// imageUrl String @unique
// slug   String @unique
// isAvailable Boolean @default(true)
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt
// recipes Recipe[]

// @@index([isAvailable])
// }