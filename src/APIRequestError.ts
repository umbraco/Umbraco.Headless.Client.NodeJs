import {Response} from "node-fetch";

export class APIRequestError extends Error {

    constructor(message: string, public response: Response, public jsonData: any) {
        super(message)
        this.name = "APIRequestError"

    }

}
