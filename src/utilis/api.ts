

export  type ApiSuccess<T>={
    success:true;
    data:T;
}

export type ApiError={
    success:false;
    message:string;
}

export const sendSuccess= <T>(data:T)=>(
    {success:true as const , data})



export const sendError= (message:string) : ApiError =>({success:false,message})

