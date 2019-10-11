import { Client } from "../Client";
import { PageOptions } from "../RequestOptions";
export declare class ManagerClient {
    private readonly client;
    constructor(client: Client);
    private makeRequest;
    readonly content: {
        root: () => import("..").ApiRequest<any>;
        byId: (id: string | number) => import("..").ApiRequest<any>;
        children: (id: string | number, options?: PageOptions) => import("..").ApiRequest<any>;
        create: (body: any) => import("..").ApiRequest<any>;
        update: (id: string | number, body: any) => import("..").ApiRequest<any>;
        delete: (id: string | number) => import("..").ApiRequest<any>;
    };
    readonly contentType: {
        all: () => import("..").ApiRequest<any>;
        byAlias: (alias: string) => import("..").ApiRequest<any>;
    };
    readonly media: {
        root: () => import("..").ApiRequest<any>;
        byId: (id: string | number) => import("..").ApiRequest<any>;
        children: (id: string | number, options?: PageOptions) => import("..").ApiRequest<any>;
        create: (data: any) => import("..").ApiRequest<any>;
        update: (id: string | number, data: any) => import("..").ApiRequest<any>;
        delete: (id: string | number) => import("..").ApiRequest<any>;
    };
    readonly mediaType: {
        all: () => import("..").ApiRequest<any>;
        byAlias: (alias: string) => import("..").ApiRequest<any>;
    };
    readonly language: {
        all: () => import("..").ApiRequest<any>;
        byISOCode: (id: string) => import("..").ApiRequest<any>;
        create: (data: any) => import("..").ApiRequest<any>;
        update: (id: string, data: any) => import("..").ApiRequest<any>;
        delete: (id: string) => import("..").ApiRequest<any>;
    };
    readonly relation: {
        byId: (id: string) => import("..").ApiRequest<any>;
        byAlias: (alias: string) => import("..").ApiRequest<any>;
        byChild: (id: string) => import("..").ApiRequest<any>;
        byParent: (id: string) => import("..").ApiRequest<any>;
        create: (data: any) => import("..").ApiRequest<any>;
        delete: (id: string) => import("..").ApiRequest<any>;
    };
    readonly relationType: {
        byAlias: (alias: string) => import("..").ApiRequest<any>;
    };
    readonly member: {
        byUsername: (username: string) => import("..").ApiRequest<any>;
        create: (data: any) => import("..").ApiRequest<any>;
        update: (username: string, data: any) => import("..").ApiRequest<any>;
        addGroup: (username: string, group: string) => import("..").ApiRequest<any>;
        removeGroup: (username: string, group: string) => import("..").ApiRequest<any>;
        delete: (username: string) => import("..").ApiRequest<any>;
    };
    readonly memberGroup: {
        byName: (name: string, data: any) => import("..").ApiRequest<any>;
        create: (data: any) => import("..").ApiRequest<any>;
        delete: (name: string) => import("..").ApiRequest<any>;
    };
    readonly memberType: {
        all: () => import("..").ApiRequest<any>;
        byAlias: (alias: string) => import("..").ApiRequest<any>;
    };
}
