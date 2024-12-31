import { NextFunction, Request, Response } from "express"

const ErrorHandler: any = (err: any, req: Request, res: Response, next: NextFunction) => {
   console.log('Middleware Error Handling')
   const errStatus = err.statusCode || 500
   const errMsg = err.message || 'Something went wrong'
   res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
      stack: err.stack
   })
}

export default ErrorHandler

