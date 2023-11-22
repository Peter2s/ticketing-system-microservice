import {CustomError} from "./CustomError";

export  class  NotFoundError extends  CustomError {
    statusCode = 404;
    constructor() {
        super("Route not found error");
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
    serializeErrors(): { message: string; filed?: string }[] {
        return [{message: "Route not found error"}];
    }
}