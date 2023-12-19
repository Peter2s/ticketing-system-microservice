import {CustomError} from "./CustomError";

export  class NotAuthorizedError extends CustomError{

    statusCode = 401;
    constructor(){
        super("not authorized");
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    serializeErrors(): { message: string; filed?: string }[] {
        return [
            {message: "not authorized"}
        ];
    }
}