import { Client } from "../Client";
import { PageOptions } from "../RequestOptions";
import { ContentCreateMemberType, ContentLanguageType, ContentManagerMediaType, ContentMemberCreateGroupType, ContentMemberGroupType, ContentMemberType, ContentMemberTypeType, ContentMemberTypeTypeGroup, ContentResponseElement, ContentTypeBase, CreateContentBody, CreateContentLanguageType, MediaTypeContentManagerRoot } from "../Responses";
import { ApiRequest } from "../ApiRequest";
export declare class ManagerClient {
    private readonly client;
    constructor(client: Client);
    private makeRequest;
    readonly content: {
        root: <R extends ContentResponseElement>() => ApiRequest<import("..").ApiResponse<import("../Responses").RootContentResponse<R>, any>>;
        byId: <R_1 extends ContentResponseElement>(id: string | number) => ApiRequest<R_1>;
        children: <R_2 extends ContentResponseElement>(id: string | number, options?: PageOptions) => ApiRequest<import("..").ApiResponse<import("../Responses").RootContentResponse<ContentResponseElement>, any>>;
        create: <R_3 extends ContentResponseElement>(body: CreateContentBody) => ApiRequest<R_3>;
        publish: <R_4 extends ContentResponseElement>(id: string) => ApiRequest<R_4>;
        unPublish: <R_5 extends ContentResponseElement>(id: string) => ApiRequest<R_5>;
        update: <R_6 extends ContentResponseElement>(id: string | number, body: Partial<R_6>) => ApiRequest<R_6>;
        delete: (id: string | number) => ApiRequest<any>;
    };
    readonly contentType: {
        all: <R extends ContentTypeBase>() => ApiRequest<import("..").ApiResponse<import("../Responses").ContentTypeBaseResponse<R>, any>>;
        byAlias: (alias: string) => ApiRequest<ContentTypeBase>;
    };
    readonly media: {
        root: <R extends ContentManagerMediaType>() => ApiRequest<import("..").ApiResponse<import("../Responses").ContentManagerMediaTypeBase<R>, any>>;
        byId: <R_1 extends ContentManagerMediaType>(id: string | number) => ApiRequest<R_1>;
        children: <R_2 extends ContentManagerMediaType>(id: string | number, options?: PageOptions) => ApiRequest<import("..").ApiResponse<import("../Responses").ContentManagerMediaTypeBase<R_2>, any>>;
        create: (data: any) => ApiRequest<any>;
        update: (id: string | number, data: any) => ApiRequest<any>;
        delete: (id: string | number) => ApiRequest<any>;
    };
    readonly mediaType: {
        all: () => ApiRequest<MediaTypeContentManagerRoot>;
        byAlias: (alias: string) => ApiRequest<import("../Responses").MediaTypeContentManager>;
    };
    readonly language: {
        all: <R extends ContentLanguageType>() => ApiRequest<import("..").ApiResponse<import("../Responses").ContentLanguageRootType<R>, any>>;
        byISOCode: <R_1 extends ContentLanguageType>(id: string) => ApiRequest<R_1>;
        create: <R_2 extends ContentLanguageType>(data: CreateContentLanguageType) => ApiRequest<R_2>;
        update: <R_3 extends ContentLanguageType>(id: string, data: CreateContentLanguageType) => ApiRequest<R_3>;
        delete: <R_4 extends ContentLanguageType>(id: string) => ApiRequest<R_4>;
    };
    readonly relation: {
        byId: (id: string) => ApiRequest<import("../Responses").ContentRelationType>;
        byAlias: (alias: string) => ApiRequest<import("../Responses").ContentRelationRootType<import("../Responses").ContentRelationType>>;
        byChild: (id: string) => ApiRequest<import("../Responses").ContentRelationRootType<import("../Responses").ContentRelationType>>;
        byParent: (id: string) => ApiRequest<import("../Responses").ContentRelationRootType<import("../Responses").ContentRelationType>>;
        create: (data: any) => ApiRequest<import("../Responses").ContentRelationType>;
        delete: (id: string) => ApiRequest<import("../Responses").ContentRelationType>;
    };
    readonly relationType: {
        byAlias: (alias: string) => ApiRequest<import("../Responses").ContentRelationTypeType>;
    };
    readonly member: {
        byUsername: <R extends ContentMemberType>(username: string) => ApiRequest<R>;
        create: <R_1 extends ContentMemberType>(data: ContentCreateMemberType) => ApiRequest<R_1>;
        update: <R_2 extends ContentMemberType>(username: string, data: ContentCreateMemberType) => ApiRequest<R_2>;
        addGroup: (username: string, group: string) => ApiRequest<any>;
        removeGroup: (username: string, group: string) => ApiRequest<any>;
        delete: (username: string) => ApiRequest<any>;
    };
    readonly memberGroup: {
        byName: (name: string, data: any) => ApiRequest<ContentMemberGroupType>;
        create: (data: ContentMemberCreateGroupType) => ApiRequest<ContentMemberGroupType>;
        delete: (name: string) => ApiRequest<ContentMemberGroupType>;
    };
    readonly memberType: {
        all: <R extends ContentMemberTypeType>() => ApiRequest<ContentMemberTypeTypeGroup<R>>;
        byAlias: <R_1 extends ContentMemberTypeType>(alias: string) => ApiRequest<R_1>;
    };
}
