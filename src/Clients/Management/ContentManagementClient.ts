import FormData from 'form-data'

import { Client } from '../../Client'
import { PagedResponse, ContentManagementContent, ContentManagementContentRequest } from '../../Responses'
import { Endpoint } from '../../Endpoint'
import { Endpoints } from '../../Endpoints'
import { APIContentChildrenOptions, APIContentPublishOptions, APIContentUnpublishOptions } from '../../RequestOptions'

/**
 * ContentManagementClient is used to access the Content part of the Content Management API.
 * @public
 */
export class ContentManagementClient {
  /**
   * @internal
   */
  constructor (
    private readonly client: Client
  ) {
  }

  private readonly makeRequest = async <T>(endpoint: Endpoint<T>, data?: any) => {
    return this.client.makeRequest(endpoint, data)
  }

  /**
   * Fetch all content at the root of the tree, which the authorized user has access to according to the 'Start node'-permissions.
   * @returns a `Promise` that resolves to an array of {@link ContentManagementContent},
   */
  async root<T extends ContentManagementContent> () {
    return this.makeRequest(Endpoints.management.content.root<T>())
  }

  /**
   * Fetch a single Content item by its id.
   * @param id - GUID id of the Content item.
   * @returns a `Promise` that resolves to a {@link ContentManagementContent} if found, otherwise `undefined`.
   */
  async byId<T extends ContentManagementContent> (id: string) {
    return this.makeRequest(Endpoints.management.content.byId<T>(id))
  }

  /**
   * Fetch all children of a Content item.
   * @param id - GUID id of the Content item.
   * @param options - Request options. See {@link APIContentChildrenOptions}.
   * @returns a `Promise` that resolves to a {@link PagedResponse} of {@link ContentManagementContent} if found, otherwise `undefined`.
   */
  async children<T extends ContentManagementContent> (id: string, options?: APIContentChildrenOptions): Promise<PagedResponse<T>> {
    return this.makeRequest(Endpoints.management.content.children(id, options))
  }

  /**
   * Create a new Content item.
   * @param body - The Content to create. See {@link ContentManagementContentRequest}.
   * @returns a `Promise` that resolves to the newly created {@link ContentManagementContent}.
   *
   * @example
   * ```typescript
   * const content = await client.management.content.create({
   *  name: {
   *    $invariant: '<name>',
   *  },
   *  contentTypeAlias: '<content-type-alias>',
   *  parentId: '<parentId|undefined>',
   * })
   * ```
   *
   * If the Content Type includes an `Upload` or an `Image Cropper` property and you want to upload a file you need to pass a `FormData` object to the function instead,
   *
   * ```typescript
   * import FormData from `form-data`
   * import fs from 'fs'
   * import path from 'path'
   *
   * const data = new FormData()
   *
   * data.append(JSON.stringify({
   *  name: {
   *    $invariant: '<name>',
   *  },
   *  contentTypeAlias: '<content-type-alias>',
   *  parentId: '<parentId|undefined>',
   *  // if myFile is of type `Upload` and is culture variant
   *  myFile: {
   *    'en-US': 'my-file.txt',
   *  },
   *  // if myImage is of type `Image Cropper` and is culture invariant
   *  myImage: {
   *    $invariant: {
   *      src: 'my-image.jpg',
   *    },
   *  },
   * }))
   *
   * data.append('myFile.en-US', fs.createReadStream(path.join(__dirname, 'my-file.txt')))
   * data.append('myImage.$invariant', fs.createReadStream(path.join(__dirname, 'my-image.txt')))
   *
   * const content = await client.management.content.create(data)
   * ```
   *
   * See {@link https://our.umbraco.com/documentation/Umbraco-Heartcore/API-Documentation/Content-Management/content/#create-content} for more info on the structure of the document.
   */
  async create<T extends ContentManagementContent> (body: ContentManagementContentRequest | FormData) {
    return this.makeRequest(Endpoints.management.content.create<T>(), body)
  }

  /**
   * Publish a Content item.
   * @param id - GUID id of the Content item.
   * @param options - Request options. See {@link APIContentPublishOptions}.
   * @returns a `Promise` that resolves to a {@link ContentManagementContent} if found, otherwise `undefined`.
   */
  async publish<T extends ContentManagementContent> (id: string, options?: APIContentPublishOptions) {
    return this.makeRequest(Endpoints.management.content.publish<T>(id, options))
  }

  /**
   * Unpublish a Content item.
   * @param id - GUID id of the Content item.
   * @param options - Request options. See {@link APIContentPublishOptions}.
   * @returns a `Promise` that resolves to a {@link ContentManagementContent} if found, otherwise `undefined`.
   */
  async unPublish<T extends ContentManagementContent> (id: string, options?: APIContentUnpublishOptions) {
    return this.makeRequest(Endpoints.management.content.unPublish<T>(id, options))
  }

  /**
   * Update a Content item.
   * @param id - GUID id of the Content item.
   * @param body - Content to update, must be a complete Content item including all cultures. See {@link ContentManagementContentRequest}.
   * @returns a `Promise` that resolves to a {@link ContentManagementContent} of the updated Content item if found, otherwise `undefined`.
   *
   * @example
   * ```typescript
   * const content = await client.management.content.update('<content-id>', {
   *  name: {
   *    $invariant: '<name>',
   *  },
   *  contentTypeAlias: '<content-type-alias>',
   *  parentId: '<parentId|undefined>',
   * })
   * ```
   *
   * If the Content Type includes an `Upload` or an `Image Cropper` property and you want to upload a file you need to pass a `FormData` object to the function instead,
   *
   * ```typescript
   * import FormData from `form-data`
   * import fs from 'fs'
   * import path from 'path'
   *
   * const data = new FormData()
   *
   * data.append(JSON.stringify({
   *  name: {
   *    $invariant: '<name>',
   *  },
   *  contentTypeAlias: '<content-type-alias>',
   *  parentId: '<parentId|undefined>',
   *  // if myFile is of type `Upload` and is culture variant
   *  myFile: {
   *    'en-US': 'my-file.txt',
   *  },
   *  // if myImage is of type `Image Cropper` and is culture invariant
   *  myImage: {
   *    $invariant: {
   *      src: 'my-image.jpg',
   *    },
   *  },
   * }))
   *
   * data.append('myFile.en-US', fs.createReadStream(path.join(__dirname, 'my-file.txt')))
   * data.append('myImage.$invariant', fs.createReadStream(path.join(__dirname, 'my-image.txt')))
   *
   * const content = await client.management.content.update('<content-id>', data)
   * ```
   *
   * See {@link https://our.umbraco.com/documentation/Umbraco-Heartcore/API-Documentation/Content-Management/content/#update-content} for more info on the structure of the document.
   */
  async update<T extends ContentManagementContent> (id: string, body: ContentManagementContentRequest | FormData) {
    return this.makeRequest(Endpoints.management.content.update<T>(id), body)
  }

  /**
   * Delete a Content item.
   * @param id - GUID id of the Content item.
   * @returns a `Promise` that resolves to a {@link ContentManagementContent} of the deleted Content item if found, otherwise `undefined`.
   */
  async delete <T extends ContentManagementContent> (id: string) {
    return this.makeRequest(Endpoints.management.content.delete(id))
  }
}
