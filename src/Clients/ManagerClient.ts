import {Client} from "../Client";
import {Endpoint} from "../Endpoint";
import {Endpoints} from "../Endpoints";
import {PageOptions} from "../RequestOptions";

export class ManagerClient {

    constructor(
        private readonly client: Client
    ) {

    }

    private makeRequest = (endpoint: Endpoint, data?: any) => {
        return this.client.makeRequest(endpoint, data)
    }


    get content() {
        return {
            root: () => this.makeRequest(Endpoints.management.content.root()),
            byId: (id: string|number) => this.makeRequest(Endpoints.management.content.byId(id)),
            children: (id: string|number, options?: PageOptions) => this.makeRequest(Endpoints.management.content.children(id, options)),
            create: (body: any) => this.makeRequest(Endpoints.management.content.create(), body),
            update: (id: string|number, body: any) => this.makeRequest(Endpoints.management.content.update(id), body),
            delete: (id: string|number) => this.makeRequest(Endpoints.management.content.update(id))
        }
    }

    get contentType() {
        return {
            all: () => this.makeRequest(Endpoints.management.contentType.all()),
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.contentType.byAlias(alias)),
        }
    }

    get media() {
        return {
            root: () => this.makeRequest(Endpoints.management.media.root()),
            byId: (id: string|number) => this.makeRequest(Endpoints.management.media.byId(id)),
            children: (id: string|number, options?: PageOptions) => this.makeRequest(Endpoints.management.media.children(id, options)),
            create: (data: any) => this.makeRequest(Endpoints.management.media.create(), data),
            update: (id: string|number, data: any) => this.makeRequest(Endpoints.management.media.update(id)),
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
            all: () => this.makeRequest(Endpoints.management.language.all()),
            byISOCode: (id: string) => this.makeRequest(Endpoints.management.language.byISOCode(id)),
            create: (data: any) => this.makeRequest(Endpoints.management.language.create(), data),
            update: (id: string, data: any) => this.makeRequest(Endpoints.management.language.update(id), data),
            delete: (id: string) => this.makeRequest(Endpoints.management.language.delete(id)),

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
            byUsername: (username: string) => this.makeRequest(Endpoints.management.member.byUsername(username)),
            create: (data: any) => this.makeRequest(Endpoints.management.member.create(), data),
            update: (username: string, data: any) => this.makeRequest(Endpoints.management.member.update(username), data),
            addGroup: (username: string, group: string) => this.makeRequest(Endpoints.management.member.addGroup(username, group)),
            removeGroup: (username: string, group: string) => this.makeRequest(Endpoints.management.member.removeGroup(username, group)),
            delete: (username: string) => this.makeRequest(Endpoints.management.member.delete(username)),
        }
    }

    get memberGroup() {
        return {
            byName: (name: string, data: any) => this.makeRequest(Endpoints.management.memberGroup.byName(name), data),
            create: (data: any) => this.makeRequest(Endpoints.management.memberGroup.create(), data),
            delete: (name: string) => this.makeRequest(Endpoints.management.memberGroup.delete(name)),
        }
    }

    get memberType() {
        return {
            all: () => this.makeRequest(Endpoints.management.memberType.all()),
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.memberType.byAlias(alias))
        }
    }



}
