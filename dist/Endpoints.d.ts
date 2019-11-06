import { Endpoint } from "./Endpoint";
import { CDNContentByContentTypeOptions, CDNContentByIdOptions, CDNContentChildrenOptions, CDNContentRootOptions, MultipartOptions } from "./RequestOptions";
import { ContentLanguageType, ContentManagerMediaType, ContentMemberGroupType, ContentMemberType, ContentMemberTypeType, ContentRelationType, ContentRelationTypeType, ContentResponseElement, ContentTypeBase, MediaTypeContentManager, MediaTypeContentManagerRoot, PagedResponse } from "./Responses";
export declare const Endpoints: {
    delivery: {
        content: {
            root: <T extends ContentResponseElement>(options?: CDNContentRootOptions | undefined) => Endpoint<T[], any>;
            byId: <T_1 extends ContentResponseElement>(id: string | number, options?: CDNContentByIdOptions | undefined) => Endpoint<T_1, any>;
            byUrl: <T_2 extends ContentResponseElement>(url: string, options?: CDNContentByIdOptions | undefined) => Endpoint<T_2, any>;
            children: <T_3 extends ContentResponseElement>(id: string | number, options?: CDNContentChildrenOptions | undefined) => Endpoint<PagedResponse<T_3>, any>;
            ancestors: <T_4 extends ContentResponseElement>(id: string | number, options?: CDNContentRootOptions | undefined) => Endpoint<T_4[], any>;
            descendants: <T_5 extends ContentResponseElement>(id: string | number, options?: CDNContentChildrenOptions | undefined) => Endpoint<T_5[], any>;
            byContentType: <T_6 extends ContentResponseElement>(contentType: string, options?: CDNContentByContentTypeOptions | undefined) => Endpoint<PagedResponse<T_6>, any>;
            search: <T_7 extends ContentResponseElement>(term: string, options?: CDNContentByContentTypeOptions | undefined) => Endpoint<PagedResponse<T_7>, any>;
        };
        media: {
            root: () => Endpoint<any, any>;
            byId: (id: string | number) => Endpoint<any, any>;
            children: (id: string | number, options?: import("./RequestOptions").PageOptions | undefined) => Endpoint<any, import("./RequestOptions").PageOptions>;
        };
    };
    management: {
        content: {
            root: <R extends ContentResponseElement>() => Endpoint<R[], any>;
            byId: <R_1 extends ContentResponseElement>(id: string | number) => Endpoint<R_1, any>;
            children: <R_2 extends ContentResponseElement>(id: string | number, options?: import("./RequestOptions").PageOptions | undefined) => Endpoint<PagedResponse<R_2>, any>;
            create: <R_3 extends ContentResponseElement>() => Endpoint<R_3, any>;
            publish: <R_4 extends ContentResponseElement>(id: string | number, options?: import("./RequestOptions").CultureOptions | undefined) => Endpoint<R_4, import("./RequestOptions").CultureOptions>;
            unPublish: <R_5 extends ContentResponseElement>(id: string | number, options?: import("./RequestOptions").CultureOptions | undefined) => Endpoint<R_5, any>;
            update: <R_6 extends ContentResponseElement>(id: string | number) => Endpoint<R_6, any>;
            delete: (id: string | number) => Endpoint<any, any>;
        };
        contentType: {
            all: <R_7 extends ContentTypeBase>() => Endpoint<R_7[], any>;
            byAlias: <R_8 extends ContentTypeBase>(alias: string) => Endpoint<R_8, any>;
        };
        media: {
            root: <R_9 extends ContentManagerMediaType>() => Endpoint<R_9[], any>;
            byId: <R_10 extends ContentManagerMediaType>(id: string | number) => Endpoint<R_10, any>;
            children: <R_11 extends ContentManagerMediaType>(id: string | number, options?: import("./RequestOptions").PageOptions | undefined) => Endpoint<PagedResponse<R_11>, any>;
            create: () => Endpoint<any, MultipartOptions>;
            update: (id: string | number) => Endpoint<any, any>;
            delete: (id: string | number) => Endpoint<any, any>;
        };
        mediaType: {
            all: () => Endpoint<MediaTypeContentManagerRoot, any>;
            byAlias: (alias: string) => Endpoint<MediaTypeContentManager, any>;
        };
        language: {
            all: <R_12 extends ContentLanguageType>() => Endpoint<R_12[], any>;
            byISOCode: <R_13 extends ContentLanguageType>(id: string) => Endpoint<R_13, any>;
            create: <R_14 extends ContentLanguageType>() => Endpoint<R_14, any>;
            update: <R_15 extends ContentLanguageType>(id: string) => Endpoint<R_15, any>;
            delete: <R_16 extends ContentLanguageType>(id: string) => Endpoint<R_16, any>;
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
            byUsername: <R_17 extends ContentMemberType>(username: string) => Endpoint<R_17, any>;
            create: <R_18 extends ContentMemberType>() => Endpoint<R_18, any>;
            update: <R_19 extends ContentMemberType>(username: string) => Endpoint<R_19, any>;
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
            all: <R_20 extends ContentMemberTypeType>() => Endpoint<R_20[], any>;
            byAlias: <R_21 extends ContentMemberTypeType>(alias: string) => Endpoint<R_21, any>;
        };
    };
};
