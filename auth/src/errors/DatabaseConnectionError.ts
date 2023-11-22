import {CustomError} from "./CustomError";

export class DatabaseConnectionError extends CustomError {
    Reason:string = "database connection error";
    statusCode:number = 500;
    constructor() {
        super("database connection error");
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors(){
        return [
            {message :this.Reason}
        ]
    }
}