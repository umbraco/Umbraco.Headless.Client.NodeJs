import { Endpoint } from "./Endpoint";
import { CDNContentByContentTypeOptions, CDNContentByIdOptions, CDNContentChildrenOptions, CDNContentRootOptions, MultipartOptions } from "./RequestOptions";
import { ContentLanguageType, ContentManagerMediaType, ContentMemberGroupType, ContentMemberType, ContentMemberTypeType, ContentRelationType, ContentRelationTypeType, ContentResponseElement, ContentTypeBase, MediaTypeContentManager, MediaTypeContentManagerRoot, PagedResponse } from "./Responses";
export declare const Endpoints: {
    delivery: {
        content: {
            root: <T extends ContentResponseElement>(options?: CDNContentRootOptions | undefined) => Endpoint<T[], any>;
            byId: <T extends ContentResponseElement>(id: string | number, options?: CDNContentByIdOptions | undefined) => Endpoint<T, any>;
            byUrl: <T extends ContentResponseElement>(url: string, options?: CDNContentByIdOptions | undefined) => Endpoint<T, any>;
            children: <T extends ContentResponseElement>(id: string | number, options?: CDNContentChildrenOptions | undefined) => Endpoint<PagedResponse<T>, any>;
            ancestors: <T extends ContentResponseElement>(id: string | number, options?: CDNContentRootOptions | undefined) => Endpoint<T[], any>;
            descendants: <T extends ContentResponseElement>(id: string | number, options?: CDNContentChildrenOptions | undefined) => Endpoint<T[], any>;
            byContentType: <T extends ContentResponseElement>(contentType: string, options?: CDNContentByContentTypeOptions | undefined) => Endpoint<PagedResponse<T>, any>;
            search: <T extends ContentResponseElement>(term: string, options?: CDNContentByContentTypeOptions | undefined) => Endpoint<PagedResponse<T>, any>;
        };
        media: {
            root: () => Endpoint<any, any>;
            byId: (id: string | number) => Endpoint<any, any>;
            children: (id: string | number, options?: import("../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/PageOptions").PageOptions | undefined) => Endpoint<any, import("../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/PageOptions").PageOptions>;
        };
    };
    management: {
        content: {
            root: <R extends ContentResponseElement>() => Endpoint<R[], any>;
            byId: <R extends ContentResponseElement>(id: string | number) => Endpoint<R, any>;
            children: <R extends ContentResponseElement>(id: string | number, options?: import("../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/PageOptions").PageOptions | undefined) => Endpoint<PagedResponse<R>, any>;
            create: <R extends ContentResponseElement>() => Endpoint<R, any>;
            publish: <R extends ContentResponseElement>(id: string | number, options?: import("../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/CultureOptions").CultureOptions | undefined) => Endpoint<R, import("../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/CultureOptions").CultureOptions>;
            unPublish: <R extends ContentResponseElement>(id: string | number, options?: import("../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/CultureOptions").CultureOptions | undefined) => Endpoint<R, any>;
            update: <R extends ContentResponseElement>(id: string | number) => Endpoint<R, any>;
            delete: (id: string | number) => Endpoint<any, any>;
        };
        contentType: {
            all: <R extends ContentTypeBase>() => Endpoint<R[], any>;
            byAlias: <R extends ContentTypeBase>(alias: string) => Endpoint<R, any>;
        };
        media: {
            root: <R extends ContentManagerMediaType>() => Endpoint<R[], any>;
            byId: <R extends ContentManagerMediaType>(id: string | number) => Endpoint<R, any>;
            children: <R extends ContentManagerMediaType>(id: string | number, options?: import("../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/PageOptions").PageOptions | undefined) => Endpoint<PagedResponse<R>, any>;
            create: () => Endpoint<any, MultipartOptions>;
            update: (id: string | number) => Endpoint<any, any>;
            delete: (id: string | number) => Endpoint<any, any>;
        };
        mediaType: {
            all: () => Endpoint<MediaTypeContentManagerRoot, any>;
            byAlias: (alias: string) => Endpoint<MediaTypeContentManager, any>;
        };
        language: {
            all: <R extends ContentLanguageType>() => Endpoint<R[], any>;
            byISOCode: <R extends ContentLanguageType>(id: string) => Endpoint<R, any>;
            create: <R extends ContentLanguageType>() => Endpoint<R, any>;
            update: <R extends ContentLanguageType>(id: string) => Endpoint<R, any>;
            delete: <R extends ContentLanguageType>(id: string) => Endpoint<R, any>;
        };
        relation: {
            byId: (id: string | number) => Endpoint<ContentRelationType, any>;
            byParent: (id: string) => Endpoint<ContentRelationType[], any>;
            byChild: (id: string) => Endpoint<ContentRelationType[], any>;
            byAlias: (alias: string) => Endpoint<ContentRelationType[], any>;
            create: () => Endpoint<ContentRelationType, any>;
            delete: (id: string | number) => Endpoint<ContentRelationType, any>;
        };
        relationType: {
            byAlias: (alias: string) => Endpoint<ContentRelationTypeType, any>;
        };
        member: {
            byUsername: <R extends ContentMemberType>(username: string) => Endpoint<R, any>;
            create: <R extends ContentMemberType>() => Endpoint<R, any>;
            update: <R extends ContentMemberType>(username: string) => Endpoint<R, any>;
            addGroup: (username: string, group: string) => Endpoint<any, any>;
            removeGroup: (username: string, group: string) => Endpoint<any, any>;
            delete: (username: string) => Endpoint<any, any>;
        };
        memberGroup: {
            byName: (name: string) => Endpoint<ContentMemberGroupType, any>;
            create: () => Endpoint<ContentMemberGroupType, any>;
            delete: (name: string) => Endpoint<ContentMemberGroupType, any>;
        };
        memberType: {
            all: <R extends ContentMemberTypeType>() => Endpoint<R[], any>;
            byAlias: <R extends ContentMemberTypeType>(alias: string) => Endpoint<R, any>;
        };
    };
};
