import { NextFunction, Request, RequestHandler, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const catchAsync = (fn : RequestHandler) =>{

    return  (req: Request, res: Response, next: NextFunction) => {

          Promise.resolve(fn(req,res,next)).catch(error => {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: 'could not fetch random movie!',
                error: error.message
            })
        })
    
}
}