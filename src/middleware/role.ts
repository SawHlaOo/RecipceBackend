

import { NextFunction,Request,Response } from "express";
import { sendError } from "../utilis/api";

export const authorize= (...roles:Array<'USER'| 'ADMIN'>)=>{
          return (req:Request,res:Response,next:NextFunction)=>{
                 if(!req.user){
                    res.status(401).json(sendError('Authentication required!'))
                    return;
                 }
                 if (!roles.includes(req.user.role)){
                    res.status(403).json(sendError("You don't have the permission to access this feature"))
                    return;
                 }
                 next();
          }      
}