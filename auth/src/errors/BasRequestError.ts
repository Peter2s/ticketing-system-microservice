import {CustomError} from "./CustomError";

export  class  BasRequestError extends  CustomError{
    statusCode = 400;
constructor(message:string) {
    super(message);
    Object.setPrototypeOf(this, BasRequestError.prototype);
}
    serializeErrors(): { message: string; filed?: string }[] {
        return [{message:this.message}];
    }

}