


import { Request,Response,NextFunction } from "express";
import  jwt  from "jsonwebtoken";
import {env }from '../../config/env';
import { sendError } from "../utilis/api";


export const authenticate= (req:Request,res:Response,next:NextFunction)=>{
    const header=req.headers.authorization;

    if (!header || !header.startsWith('Bearer')){
        res.status(401).json("Error")
        return;
    }

    const token = header.split(' ')[1]

   try{ 

    const decoded=jwt.verify(token,env.jwtSecret) as {userId:string,email:string,role:'USER'| 'ADMIN'}

    req.user={
        userId:decoded.userId,
        email:decoded.email,
        role:decoded.role
    }
    next();
      }
    catch (error){
        res.status(401).json(sendError("authentication required"))

    }

}




