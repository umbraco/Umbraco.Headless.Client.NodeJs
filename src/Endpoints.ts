import { Endpoint, EndpointSource } from './Endpoint'
import {
  APIContentChildrenOptions,
  APIContentPublishOptions,
  APIContentUnpublishOptions,
  APIMediaChildrenOptions,
  ContentDeliveryAncestorsOptions,
  ContentDeliveryByContentTypeOptions,
  ContentDeliveryByIdOptions,
  ContentDeliveryByUrlOptions,
  ContentDeliveryChildrenOptions,
  ContentDeliveryDescendantsOptions,
  ContentDeliveryRootOptions,
  ContentDeliveryFilterOptions,
  ContentDeliverySearchOptions,
  MediaDeliveryChildrenOptions,
  MultipartOptions
} from './RequestOptions'
import {
  Content,
  ContentLanguageType,
  MediaTypeContentManager,
  ContentMemberGroupType,
  ContentMemberType,
  ContentMemberTypeType,
  ContentRelationType,
  ContentRelationTypeType,
  ContentTypeBase,
  ContentManagementContent,
  ContentManagementMedia,
  Media,
  PagedResponse,
  Form
} from './Responses'

/**
 * @internal
 */
export const Endpoints = {

  delivery: {

    content: {
      root: <T extends Content>(options?: ContentDeliveryRootOptions) => new Endpoint<T[]>(EndpointSource.CDN, '/content', {}, 'get', options),
      byId: <T extends Content>(id: string, options?: ContentDeliveryByIdOptions) => new Endpoint<T>(EndpointSource.CDN, '/content/{id}', { id }, 'get', options),
      byUrl: <T extends Content>(url: string, options?: ContentDeliveryByUrlOptions) => new Endpoint<T>(EndpointSource.CDN, '/content/url?url={url}', { url }, 'get', options),
      children: <T extends Content>(id: string, options?: ContentDeliveryChildrenOptions) => new Endpoint<PagedResponse<T>>(EndpointSource.CDN, '/content/{id}/children', { id }, 'get', options),
      ancestors: <T extends Content>(id: string, options?: ContentDeliveryAncestorsOptions) => new Endpoint<T[]>(EndpointSource.CDN, '/content/{id}/ancestors', { id }, 'get', options),
      descendants: <T extends Content>(id: string, options?: ContentDeliveryDescendantsOptions) => new Endpoint<T[]>(EndpointSource.CDN, '/content/{id}/descendants', { id }, 'get', options),
      byContentType: <T extends Content>(contentType: string, options?: ContentDeliveryByContentTypeOptions) => new Endpoint<PagedResponse<T>>(EndpointSource.CDN, '/content/type?contentType={contentType}', { contentType }, 'get', options),
      filter: <T extends Content>(options?: ContentDeliveryFilterOptions) => new Endpoint<PagedResponse<T>>(EndpointSource.CDN, '/content/filter', {}, 'post', options),
      search: <T extends Content>(term: string, options?: ContentDeliverySearchOptions) => new Endpoint<PagedResponse<T>>(EndpointSource.CDN, '/content/search?term={term}', { term }, 'get', options)
    },

    media: {
      root: <T extends Media>() => new Endpoint<T[]>(EndpointSource.CDN, '/media', {}, 'get'),
      byId: <T extends Media>(id: string) => new Endpoint<T>(EndpointSource.CDN, '/media/{id}', { id }, 'get'),
      children: <T extends Media>(id: string, options?: MediaDeliveryChildrenOptions) => new Endpoint<T>(EndpointSource.CDN, '/media/{id}/children', { id }, 'get', options)
    }

  },

  management: {
    content: {
      root: <R extends ContentManagementContent>() => new Endpoint<R[]>(EndpointSource.ContentManagement, '/content', {}, 'get'),
      byId: <R extends ContentManagementContent>(id: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/content/{id}', { id }, 'get'),
      children: <R extends ContentManagementContent>(id: string, options?: APIContentChildrenOptions) => new Endpoint<PagedResponse<R>>(EndpointSource.ContentManagement, '/content/{id}/children', { id }, 'get', options),
      create: <R extends ContentManagementContent>() => new Endpoint<R>(EndpointSource.ContentManagement, '/content', {}, 'post'),
      publish: <R extends ContentManagementContent>(id: string, options?: APIContentPublishOptions) => {
        return new Endpoint<R>(EndpointSource.ContentManagement, '/content/{id}/publish', { id }, 'put', options) as Endpoint<R, APIContentPublishOptions>
      },
      unPublish: <R extends ContentManagementContent>(id: string, options?: APIContentUnpublishOptions) => new Endpoint<R>(EndpointSource.ContentManagement, '/content/{id}/unpublish', { id }, 'put', options),
      update: <R extends ContentManagementContent>(id: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/content/{id}', { id }, 'put'),
      delete: <R extends ContentManagementContent>(id: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/content/{id}', { id }, 'delete')
    },
    contentType: {
      all: <R extends ContentTypeBase>() => new Endpoint<R[]>(EndpointSource.ContentManagement, '/content/type', {}, 'get'),
      byAlias: <R extends ContentTypeBase>(alias: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/content/type/{alias}', { alias }, 'get')
    },
    media: {
      root: <R extends ContentManagementMedia>() => new Endpoint<R[]>(EndpointSource.ContentManagement, '/media', {}, 'get'),
      byId: <R extends ContentManagementMedia>(id: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/media/{id}', { id }, 'get'),
      children: <R extends ContentManagementMedia>(id: string, options?: APIMediaChildrenOptions) => new Endpoint<PagedResponse<R>>(EndpointSource.ContentManagement, '/media/{id}/children', { id }, 'get', options),
      create: <R extends ContentManagementMedia>() => new Endpoint<R, MultipartOptions>(EndpointSource.ContentManagement, '/media', {}, 'post', { usingMultipart: true }),
      update: <R extends ContentManagementMedia>(id: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/media/{id}', { id }, 'put'),
      delete: <R extends ContentManagementMedia>(id: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/media/{id}', { id }, 'delete')
    },

    mediaType: {
      all: () => new Endpoint<MediaTypeContentManager[]>(EndpointSource.ContentManagement, '/media/type', {}, 'get'),
      byAlias: (alias: string) => new Endpoint<MediaTypeContentManager>(EndpointSource.ContentManagement, '/media/type/{alias}', { alias }, 'get')
    },

    language: {
      all: <R extends ContentLanguageType>() => new Endpoint<R[]>(EndpointSource.ContentManagement, '/language', {}, 'get'),
      byISOCode: <R extends ContentLanguageType>(id: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/language/{id}', { id }, 'get'),
      create: <R extends ContentLanguageType>() => new Endpoint<R>(EndpointSource.ContentManagement, '/language', {}, 'post'),
      update: <R extends ContentLanguageType>(id: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/language/{id}', { id }, 'put'),
      delete: <R extends ContentLanguageType>(id: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/language/{id}', { id }, 'delete')

    },

    relation: {
      byId: (id: string|number) => new Endpoint<ContentRelationType>(EndpointSource.ContentManagement, '/relation/{id}', { id }, 'get'),
      byParent: (id: string) => new Endpoint<ContentRelationType[]>(EndpointSource.ContentManagement, '/relation/parent/{id}', { id }, 'get'),
      byChild: (id: string) => new Endpoint<ContentRelationType[]>(EndpointSource.ContentManagement, '/relation/child/{id}', { id }, 'get'),
      byAlias: (alias: string) => new Endpoint<ContentRelationType[]>(EndpointSource.ContentManagement, '/relation/{alias}', { alias }, 'get'),
      create: () => new Endpoint<ContentRelationType>(EndpointSource.ContentManagement, '/relation', {}, 'post'),
      delete: (id: string|number) => new Endpoint<ContentRelationType>(EndpointSource.ContentManagement, '/relation/{id}', { id }, 'delete')
    },

    relationType: {
      byAlias: (alias: string) => new Endpoint<ContentRelationTypeType>(EndpointSource.ContentManagement, '/relation/type/{alias}', { alias }, 'get')
    },

    member: {
      byUsername: <R extends ContentMemberType>(username: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/member/{username}', { username }, 'get'),
      create: <R extends ContentMemberType>() => new Endpoint<R>(EndpointSource.ContentManagement, '/member', {}, 'post'),
      update: <R extends ContentMemberType>(username: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/member/{username}', { username }, 'put'),
      addGroup: (username: string, group: string) => new Endpoint(EndpointSource.ContentManagement, '/member/{username}/groups/{group}', { username, group }, 'put'),
      removeGroup: (username: string, group: string) => new Endpoint(EndpointSource.ContentManagement, '/member/{username}/groups/{group}', { username, group }, 'delete'),
      delete: (username: string) => new Endpoint(EndpointSource.ContentManagement, '/member/{username}', { username }, 'delete')
    },

    memberGroup: {
      byName: (name: string) => new Endpoint<ContentMemberGroupType>(EndpointSource.ContentManagement, '/member/group/{name}', { name }, 'get'),
      create: () => new Endpoint<ContentMemberGroupType>(EndpointSource.ContentManagement, '/member/group', {}, 'post'),
      delete: (name: string) => new Endpoint<ContentMemberGroupType>(EndpointSource.ContentManagement, '/member/group/{name}', { name }, 'delete')
    },

    memberType: {
      all: <R extends ContentMemberTypeType>() => new Endpoint<R[]>(EndpointSource.ContentManagement, '/member/type', {}, 'get'),
      byAlias: <R extends ContentMemberTypeType>(alias: string) => new Endpoint<R>(EndpointSource.ContentManagement, '/member/type/{alias}', { alias }, 'get')
    },

    forms: {
      all: () => new Endpoint<Form[]>(EndpointSource.ContentManagement, '/forms', {}, 'get'),
      byId: (id: string) => new Endpoint<Form>(EndpointSource.ContentManagement, '/forms/{id}', { id }, 'get'),
      submitEntry: (id: string) => new Endpoint(EndpointSource.ContentManagement, '/forms/{id}/entries', { id }, 'post')
    }
  }
}
