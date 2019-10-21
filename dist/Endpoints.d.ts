import { Endpoint } from "./Endpoint";
import { DepthOptions, MultipartOptions, PageOptions } from "./RequestOptions";
import { ApiPagedResponse, ApiResponse } from "./ApiResponse";
import { ContentManagerMediaType, ContentResponseElement, ContentTypeBase, ContentTypeBaseResponse, RootContentResponse, ContentManagerMediaTypeBase, MediaTypeContentManagerRoot, MediaTypeContentManager, ContentLanguageRootType, ContentLanguageType, ContentRelationType, ContentRelationRootType, ContentRelationTypeType, ContentMemberType, ContentMemberGroupType, ContentMemberTypeTypeGroup, ContentMemberTypeType } from "./Responses";
export declare const Endpoints: {
    cdn: {
        root: <T extends ContentResponseElement>() => Endpoint<ApiResponse<RootContentResponse<T>, any>, any>;
        byId: <T_1 extends ContentResponseElement>(id: string | number, options?: DepthOptions) => Endpoint<ApiResponse<RootContentResponse<T_1>, any>, any>;
        byUrl: <T_2 extends ContentResponseElement>(url: string, options?: DepthOptions) => Endpoint<T_2, any>;
        children: <T_3 extends ContentResponseElement>(id: string | number, options?: PageOptions) => Endpoint<ApiPagedResponse<RootContentResponse<T_3>>, any>;
        ancestors: (id: string | number) => Endpoint<any, any>;
        descendants: (id: string | number, options?: PageOptions) => Endpoint<any, PageOptions>;
    };
    media: {
        root: () => Endpoint<any, any>;
        byId: (id: string | number) => Endpoint<any, any>;
        children: (id: string | number, options?: PageOptions) => Endpoint<any, PageOptions>;
    };
    management: {
        content: {
            root: <R extends ContentResponseElement>() => Endpoint<ApiResponse<RootContentResponse<R>, any>, any>;
            byId: <R_1 extends ContentResponseElement>(id: string | number) => Endpoint<R_1, any>;
            children: <R_2 extends ContentResponseElement>(id: string | number, options?: PageOptions) => Endpoint<ApiResponse<RootContentResponse<R_2>, any>, any>;
            create: <R_3 extends ContentResponseElement>() => Endpoint<R_3, any>;
            publish: <R_4 extends ContentResponseElement>(id: string | number) => Endpoint<R_4, any>;
            unPublish: <R_5 extends ContentResponseElement>(id: string | number) => Endpoint<R_5, any>;
            update: <R_6 extends ContentResponseElement>(id: string | number) => Endpoint<R_6, any>;
            delete: (id: string | number) => Endpoint<any, any>;
        };
        contentType: {
            all: <R_7 extends ContentTypeBase>() => Endpoint<ApiResponse<ContentTypeBaseResponse<R_7>, any>, any>;
            byAlias: <R_8 extends ContentTypeBase>(alias: string) => Endpoint<R_8, any>;
        };
        media: {
            root: <R_9 extends ContentManagerMediaType>() => Endpoint<ApiResponse<ContentManagerMediaTypeBase<R_9>, any>, any>;
            byId: <R_10 extends ContentManagerMediaType>(id: string | number) => Endpoint<R_10, any>;
            children: <R_11 extends ContentManagerMediaType>(id: string | number, options?: PageOptions) => Endpoint<ApiResponse<ContentManagerMediaTypeBase<R_11>, any>, any>;
            create: () => Endpoint<any, MultipartOptions>;
            update: (id: string | number) => Endpoint<any, any>;
            delete: (id: string | number) => Endpoint<any, any>;
        };
        mediaType: {
            all: () => Endpoint<MediaTypeContentManagerRoot, any>;
            byAlias: (alias: string) => Endpoint<MediaTypeContentManager, any>;
        };
        language: {
            all: <R_12 extends ContentLanguageType>() => Endpoint<ApiResponse<ContentLanguageRootType<R_12>, any>, any>;
            byISOCode: <R_13 extends ContentLanguageType>(id: string) => Endpoint<R_13, any>;
            create: <R_14 extends ContentLanguageType>() => Endpoint<R_14, any>;
            update: <R_15 extends ContentLanguageType>(id: string) => Endpoint<R_15, any>;
            delete: <R_16 extends ContentLanguageType>(id: string) => Endpoint<R_16, any>;
        };
        relation: {
            byId: (id: string | number) => Endpoint<ContentRelationType, any>;
            byParent: (id: string) => Endpoint<ContentRelationRootType<ContentRelationType>, any>;
            byChild: (id: string) => Endpoint<ContentRelationRootType<ContentRelationType>, any>;
            byAlias: (alias: string) => Endpoint<ContentRelationRootType<ContentRelationType>, any>;
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
            all: <R_20 extends ContentMemberTypeType>() => Endpoint<ContentMemberTypeTypeGroup<R_20>, any>;
            byAlias: <R_21 extends ContentMemberTypeType>(alias: string) => Endpoint<R_21, any>;
        };
    };
};
