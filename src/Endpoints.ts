import {Endpoint, EndpointSource} from "./Endpoint";
import {DepthOptions, PageOptions} from "./RequestOptions";
import {ApiResponse} from "./ApiResponse";
import {ContentResponseElement, RootContentResponse} from "./Responses";

export const Endpoints = {

    cdn: {

        root: <T extends ContentResponseElement>() => new Endpoint<ApiResponse<RootContentResponse<T>>>(EndpointSource.CDN, '/content', {}, 'get'),
        byId: (id: string | number, options?: DepthOptions) => new Endpoint(EndpointSource.CDN, '/content/{id}', {id}, 'get', options),
        byUrl: (url: string, options?: DepthOptions) => new Endpoint(EndpointSource.CDN, '/content/url?url={url}', {url}, 'get', options),
        children: (id: string | number, options?: PageOptions) => new Endpoint(EndpointSource.CDN, '/content/{id}/children', {id}, 'get', options),
        ancestors: (id: string | number) => new Endpoint(EndpointSource.CDN, '/content/{id}/ancestors', {id}, 'get'),
        descendants: (id: string | number, options?: PageOptions) => new Endpoint(EndpointSource.CDN, '/content/{id}/descendants', {id}, 'get', options)
    },

    media: {
        root: () => new Endpoint(EndpointSource.CDN, "/media", {}, 'get'),
        byId: (id: string | number) => new Endpoint(EndpointSource.CDN, '/media/{id}', {id}, 'get'),
        children: (id: string | number, options?: PageOptions) => new Endpoint(EndpointSource.CDN, '/media/{id}/children', {id}, 'get', options),
    },

    management: {
        content: {
            root: () => new Endpoint(EndpointSource.ContentManagement, "/content", {}, 'get'),
            byId: (id: string | number) => new Endpoint(EndpointSource.ContentManagement, '/content/{id}', {id}, 'get'),
            children: (id: string | number, options?: PageOptions) => new Endpoint(EndpointSource.ContentManagement, '/content/{id}/children', {id}, 'get', options),
            create: () => new Endpoint(EndpointSource.ContentManagement, '/content', {}, 'post'),
            update: (id: number | string) => new Endpoint(EndpointSource.ContentManagement, '/content/{id}', {id}, 'put'),
            delete: (id: number | string) => new Endpoint(EndpointSource.ContentManagement, '/content/{id}', {id}, 'delete'),
        },
        contentType: {
            all: () => new Endpoint(EndpointSource.ContentManagement, '/content/type', {}, 'get'),
            byAlias: (alias: string) => new Endpoint(EndpointSource.ContentManagement, '/content/type/{alias}', {alias}, 'get'),
        },
        media: {
            root: () => new Endpoint(EndpointSource.ContentManagement, '/media', {}, 'get'),
            byId: (id: string|number) => new Endpoint(EndpointSource.ContentManagement, '/media/{id}', {id}, 'get'),
            children: (id: string|number, options?: PageOptions) => new Endpoint(EndpointSource.ContentManagement, '/media/{id}/children', {id}, 'get', options),
            create: () => new Endpoint(EndpointSource.ContentManagement, '/media', {}, 'post'),
            update: (id: string|number) => new Endpoint(EndpointSource.ContentManagement, '/media/{id}', {id}, 'put'),
            delete: (id: string|number) => new Endpoint(EndpointSource.ContentManagement, '/media/{id}', {id}, 'delete'),
        },

        mediaType: {
            all: () => new Endpoint(EndpointSource.ContentManagement, '/media/type', {}, 'get'),
            byAlias: (alias: string) => new Endpoint(EndpointSource.ContentManagement, '/media/type/{alias}', {alias}, 'get'),
        },

        language: {
            all: () => new Endpoint(EndpointSource.ContentManagement, '/language', {}, 'get'),
            byISOCode: (id: string) => new Endpoint(EndpointSource.ContentManagement, '/language/{id}', {id}, 'get'),
            create: () => new Endpoint(EndpointSource.ContentManagement, '/language', {}, 'post'),
            update: (id: string) => new Endpoint(EndpointSource.ContentManagement, '/language/{id}', {id}, 'put'),
            delete: (id: string) => new Endpoint(EndpointSource.ContentManagement, '/language/{id}', {id}, 'delete'),

        },

        relation: {
            byId: (id: string|number) => new Endpoint(EndpointSource.ContentManagement, '/relation/{id}', {id}, 'get'),
            byAlias: (alias: string) => new Endpoint(EndpointSource.ContentManagement, '/relation/{alias}', {alias}, 'get'),
            byChild: (id: string) => new Endpoint(EndpointSource.ContentManagement, '/relation/child/{id}', {id}, 'get'),
            byParent: (id: string) => new Endpoint(EndpointSource.ContentManagement, '/relation/parent/{id}', {id}, 'get'),
            create: () => new Endpoint(EndpointSource.ContentManagement, '/relation', {}, 'post'),
            delete: (id: string|number) => new Endpoint(EndpointSource.ContentManagement, '/relation/{id}', {id}, 'delete'),
        },

        relationType: {
            byAlias: (alias: string) => new Endpoint(EndpointSource.ContentManagement, '/relation/type/{alias}', {alias}, 'get')
        },


        member: {
            byUsername: (username: string) => new Endpoint(EndpointSource.ContentManagement, '/member/{username}', {username}, 'get'),
            create: () => new Endpoint(EndpointSource.ContentManagement, '/member', {}, 'post'),
            update: (username: string) => new Endpoint(EndpointSource.ContentManagement, '/member/{username}', {username}, 'put'),
            addGroup: (username: string, group: string) => new Endpoint(EndpointSource.ContentManagement, '/member/{username}/groups/{group}', {username, group}, 'put'),
            removeGroup: (username: string, group: string) => new Endpoint(EndpointSource.ContentManagement, '/member/{username}/groups/{group}', {username, group}, 'delete'),
            delete: (username: string) => new Endpoint(EndpointSource.ContentManagement, '/member/{username}', {username}, 'delete'),
        },

        memberGroup: {
            byName: (name: string) => new Endpoint(EndpointSource.ContentManagement, '/member/group/{name}', {name}, 'post'),
            create: () => new Endpoint(EndpointSource.ContentManagement, '/member/group', {}, 'post'),
            delete: (name: string) => new Endpoint(EndpointSource.ContentManagement, '/member/group/{name}', {name}, 'delete'),
        },

        memberType: {
            all: () => new Endpoint(EndpointSource.ContentManagement, '/member/type', {}, 'get'),
            byAlias: (alias: string) => new Endpoint(EndpointSource.ContentManagement, '/member/type/{alias}', {alias}, 'get')
        }
    }
}
