import {ValidationError} from "express-validator";
import {CustomError} from  "./CustomError"
export class  RequestValidationErrors extends CustomError{
    statusCode: number = 400;
    constructor(private errors: ValidationError[]) {
        super("invalid request validation error");
        Object.setPrototypeOf(this, RequestValidationErrors.prototype);
    }

    serializeErrors(): { message: string; filed?: string }[] {
        // @ts-ignore
        return this.errors.map(err=>{
            if(err.type === "field")
                return {message: err.msg,filed:err.path}
        })

    }


}
