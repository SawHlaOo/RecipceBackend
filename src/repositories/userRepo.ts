
import { prisma } from "../../lib/prisma";


export const userRepo= {
    findByemail  : (email:string)=> prisma.user.findUnique({where:{email}}),
    findById     : (id:string)=> prisma.user.findUnique({where:{id}}),
    findNameById : (id:string)=> prisma.user.findUnique({where:{id}, select:{name:true}}),
    create       : (data:{name:string,email:string,password:string,role?:'USER'|'ADMIN'})=>prisma.user.create({data}),
    list         :  ()=>prisma.user.findMany({orderBy:{createdAt:"desc"}})  
}



/*model User {

id  String @id @default(cuid())
name String
password String 
email  String @unique
role   Role @default(USER)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
favourites Favourite[]

@@index([role])

}*/

