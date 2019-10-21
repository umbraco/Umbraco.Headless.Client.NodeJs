import {Client} from "../Client";
import {Endpoint} from "../Endpoint";
import {Endpoints} from "../Endpoints";
import {PageOptions} from "../RequestOptions";
import {
    ContentCreateMemberType,
    ContentLanguageType,
    ContentManagerMediaType,
    ContentMemberCreateGroupType,
    ContentMemberGroupType,
    ContentMemberType, ContentMemberTypeType,
    ContentMemberTypeTypeGroup,
    ContentResponseElement,
    ContentTypeBase,
    CreateContentBody,
    CreateContentLanguageType,
    MediaTypeContentManagerRoot
} from "../Responses";
import {ApiRequest} from "../ApiRequest";

export class ManagerClient {

    constructor(
        private readonly client: Client
    ) {

    }

    private makeRequest = <R>(endpoint: Endpoint<R>, data?: any) => {
        return this.client.makeRequest(endpoint, data)
    }


    get content() {
        return {
            root: <R extends ContentResponseElement>() => this.makeRequest(Endpoints.management.content.root<R>()),
            byId: <R extends ContentResponseElement>(id: string|number) => this.makeRequest(Endpoints.management.content.byId<R>(id)),
            children: <R extends ContentResponseElement>(id: string|number, options?: PageOptions) => this.makeRequest(Endpoints.management.content.children(id, options)),
            create: <R extends ContentResponseElement>(body: CreateContentBody) => this.makeRequest(Endpoints.management.content.create<R>(), body),
            publish: <R extends ContentResponseElement>(id: string) => this.makeRequest(Endpoints.management.content.publish<R>(id) as Endpoint<R>),
            unPublish: <R extends ContentResponseElement>(id: string) => this.makeRequest(Endpoints.management.content.unPublish<R>(id)),
            update: <R extends ContentResponseElement>(id: string|number, body: Partial<R>) => this.makeRequest(Endpoints.management.content.update<R>(id), body),
            delete: (id: string|number) => this.makeRequest(Endpoints.management.content.delete(id))
        }
    }

    get contentType() {
        return {
            all: <R extends ContentTypeBase>() => this.makeRequest(Endpoints.management.contentType.all<R>()),
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.contentType.byAlias(alias)),
        }
    }

    get media() {
        return {
            root: <R extends ContentManagerMediaType>() => this.makeRequest(Endpoints.management.media.root<R>()),
            byId: <R extends ContentManagerMediaType>(id: string|number) => this.makeRequest(Endpoints.management.media.byId<R>(id)),
            children: <R extends ContentManagerMediaType>(id: string|number, options?: PageOptions) => this.makeRequest(Endpoints.management.media.children<R>(id, options)),
            create: (data: any) => this.makeRequest(Endpoints.management.media.create(), data),
            update: (id: string|number, data: any) => this.makeRequest(Endpoints.management.media.update(id), data),
            delete: (id: string|number) => this.makeRequest(Endpoints.management.media.delete(id)),
        }
    }

    get mediaType() {
        return {
            all: () => this.makeRequest(Endpoints.management.mediaType.all()),
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.mediaType.byAlias(alias))
        }
    }

    get language() {
        return {
            all: <R extends ContentLanguageType>() => this.makeRequest(Endpoints.management.language.all<R>()),
            byISOCode: <R extends ContentLanguageType>(id: string) => this.makeRequest(Endpoints.management.language.byISOCode<R>(id)),
            create: <R extends ContentLanguageType>(data: CreateContentLanguageType) => this.makeRequest(Endpoints.management.language.create<R>(), data),
            update: <R extends ContentLanguageType>(id: string, data: CreateContentLanguageType) => this.makeRequest(Endpoints.management.language.update<R>(id), data),
            delete: <R extends ContentLanguageType>(id: string) => this.makeRequest(Endpoints.management.language.delete<R>(id)),

        }
    }

    get relation() {
        return {
            byId: (id: string) => this.makeRequest(Endpoints.management.relation.byId(id)),
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.relation.byAlias(alias)),
            byChild: (id: string) => this.makeRequest(Endpoints.management.relation.byChild(id)),
            byParent: (id: string) => this.makeRequest(Endpoints.management.relation.byParent(id)),
            create: (data: any) => this.makeRequest(Endpoints.management.relation.create(), data),
            delete: (id: string) => this.makeRequest(Endpoints.management.relation.delete(id))
        }
    }

    get relationType() {
        return {
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.relationType.byAlias(alias))
        }
    }


    get member() {
        return {
            byUsername: <R extends ContentMemberType>(username: string) => this.makeRequest(Endpoints.management.member.byUsername<R>(username)),
            create: <R extends ContentMemberType>(data: ContentCreateMemberType) => this.makeRequest(Endpoints.management.member.create<R>(), data),
            update: <R extends ContentMemberType>(username: string, data: ContentCreateMemberType) => this.makeRequest(Endpoints.management.member.update<R>(username), data),
            addGroup: (username: string, group: string) => this.makeRequest(Endpoints.management.member.addGroup(username, group)),
            removeGroup: (username: string, group: string) => this.makeRequest(Endpoints.management.member.removeGroup(username, group)),
            delete: (username: string) => this.makeRequest(Endpoints.management.member.delete(username)),
        }
    }

    get memberGroup() {
        return {
            byName: (name: string, data: any) => this.makeRequest<ContentMemberGroupType>(Endpoints.management.memberGroup.byName(name), data),
            create: (data: ContentMemberCreateGroupType) => this.makeRequest(Endpoints.management.memberGroup.create(), data),
            delete: (name: string) => this.makeRequest(Endpoints.management.memberGroup.delete(name)),
        }
    }

    get memberType() {
        return {
            all: <R extends ContentMemberTypeType>() => this.makeRequest(Endpoints.management.memberType.all<R>()),
            byAlias: <R extends ContentMemberTypeType>(alias: string) => this.makeRequest(Endpoints.management.memberType.byAlias<R>(alias))
        }
    }



}
