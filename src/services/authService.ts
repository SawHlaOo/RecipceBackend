import bcrypt from "bcryptjs";
import  jwt from "jsonwebtoken";
import{env} from '../../config/env';
import { userRepo } from "../repositories/userRepo";
import { ApiError } from "../middleware/errorhandler";

export const authService={
    register: async(payload:{name:string,email:string,password:string})=>{
        const existing=await userRepo.findByemail(payload.email)
        if (existing){
              throw new ApiError("User already exist",409)
        }
        const hashedPwd=await bcrypt.hash(payload.password,10)
        const user = await userRepo.create({
            name:payload.name,
            email:payload.email,
            password:hashedPwd,
            role:"USER"
        })

        return{
            user:{id:user.id,name:user.name,role:user.role},
            token:jwt.sign({userId:user.id,email:user.email,role:user.role},env.jwtSecret,{expiresIn:'7d'})
        }
    },


    login: async(payload:{email:string,password:string})=>{
        const user=await userRepo.findByemail(payload.email.toLowerCase())
        if (!user){
            throw new ApiError("Invalid password or email")
        }
        const valid = await bcrypt.compare(payload.password, user.password);
        if(!valid){
            throw new ApiError("Invalid password or email")
        }
        return{
            user:{id:user.id,name:user.name,role:user.role},
            token:jwt.sign({userId:user.id,email:user.email,role:user.role},env.jwtSecret,{expiresIn:'7d'})
        }
    },
    me: async(userId:string)=>{
        const user=await userRepo.findById(userId)
        if(!user){
            throw new ApiError("User not found",404)
        }

        return{
            user:{id:user.id,name:user.name,role:user.role}
        }

    }

}

