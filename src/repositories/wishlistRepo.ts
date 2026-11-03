

import { prisma } from "../../lib/prisma"

export const wishlistRepo={
        createWishlist: (userId:string,recipeId:string)=> prisma.favourite.upsert(
        {where:{
            userId_recipeId:{userId,recipeId}
        },
      update:{},
        create:{
            userId,
            recipeId
        },
    include:{
        recipe:true
    }}),

    getWishlist: (userId:string)=> prisma.favourite.findMany({
        where:{userId},
        orderBy:{
            createdAt: 'desc'
        },
        include:{
            recipe:true }
    }),

        findWishlist: (userId:string,recipeId:string)=> prisma.favourite.findUnique({where:{userId_recipeId:{
            userId,recipeId}},}),
        remoeWishlist: (userId:string,recipeId:string)=> prisma.favourite.delete(
            {where:{
                userId_recipeId:{
                    userId,recipeId
                }
            }}
        )
    
        
}




// model Favourite{
  
// userId String
// recipeId String
// createdAt DateTime @default(now())
// updatedAt  DateTime @updatedAt

// user User @relation(fields: [userId], references:[id])
// recipe Recipe @relation(fields: [recipeId], references:[id])

// @@id([userId,recipeId])
// @@index([createdAt])
//  }