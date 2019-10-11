import { Endpoint } from "./Endpoint";
import { DepthOptions, PageOptions } from "./RequestOptions";
import { ApiResponse } from "./ApiResponse";
import { ContentResponseElement, RootContentResponse } from "./Responses";
export declare const Endpoints: {
    cdn: {
        root: <T extends ContentResponseElement>() => Endpoint<ApiResponse<RootContentResponse<T>>>;
        byId: (id: string | number, options?: DepthOptions) => Endpoint<any>;
        byUrl: (url: string, options?: DepthOptions) => Endpoint<any>;
        children: (id: string | number, options?: PageOptions) => Endpoint<any>;
        ancestors: (id: string | number) => Endpoint<any>;
        descendants: (id: string | number, options?: PageOptions) => Endpoint<any>;
    };
    media: {
        root: () => Endpoint<any>;
        byId: (id: string | number) => Endpoint<any>;
        children: (id: string | number, options?: PageOptions) => Endpoint<any>;
    };
    management: {
        content: {
            root: () => Endpoint<any>;
            byId: (id: string | number) => Endpoint<any>;
            children: (id: string | number, options?: PageOptions) => Endpoint<any>;
            create: () => Endpoint<any>;
            update: (id: string | number) => Endpoint<any>;
            delete: (id: string | number) => Endpoint<any>;
        };
        contentType: {
            all: () => Endpoint<any>;
            byAlias: (alias: string) => Endpoint<any>;
        };
        media: {
            root: () => Endpoint<any>;
            byId: (id: string | number) => Endpoint<any>;
            children: (id: string | number, options?: PageOptions) => Endpoint<any>;
            create: () => Endpoint<any>;
            update: (id: string | number) => Endpoint<any>;
            delete: (id: string | number) => Endpoint<any>;
        };
        mediaType: {
            all: () => Endpoint<any>;
            byAlias: (alias: string) => Endpoint<any>;
        };
        language: {
            all: () => Endpoint<any>;
            byISOCode: (id: string) => Endpoint<any>;
            create: () => Endpoint<any>;
            update: (id: string) => Endpoint<any>;
            delete: (id: string) => Endpoint<any>;
        };
        relation: {
            byId: (id: string | number) => Endpoint<any>;
            byAlias: (alias: string) => Endpoint<any>;
            byChild: (id: string) => Endpoint<any>;
            byParent: (id: string) => Endpoint<any>;
            create: () => Endpoint<any>;
            delete: (id: string | number) => Endpoint<any>;
        };
        relationType: {
            byAlias: (alias: string) => Endpoint<any>;
        };
        member: {
            byUsername: (username: string) => Endpoint<any>;
            create: () => Endpoint<any>;
            update: (username: string) => Endpoint<any>;
            addGroup: (username: string, group: string) => Endpoint<any>;
            removeGroup: (username: string, group: string) => Endpoint<any>;
            delete: (username: string) => Endpoint<any>;
        };
        memberGroup: {
            byName: (name: string) => Endpoint<any>;
            create: () => Endpoint<any>;
            delete: (name: string) => Endpoint<any>;
        };
        memberType: {
            all: () => Endpoint<any>;
            byAlias: (alias: string) => Endpoint<any>;
        };
    };
};
