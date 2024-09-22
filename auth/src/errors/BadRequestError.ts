import {CustomError} from "./CustomError";

export  class BadRequestError extends  CustomError{
    statusCode = 400;
constructor(message:string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
}
    serializeErrors(): { message: string; filed?: string }[] {
        return [{message:this.message}];
    }

}