import { Response } from "node-fetch";
export declare class APIRequestError extends Error {
    response: Response;
    jsonData: any;
    constructor(message: string, response: Response, jsonData: any);
}
