import FormData from 'form-data'

import { Client } from '../../Client'
import { PagedResponse, ContentManagementMedia, ContentManagementMediaRequest } from '../../Responses'
import { Endpoint } from '../../Endpoint'
import { Endpoints } from '../../Endpoints'
import { APIMediaChildrenOptions } from '../../RequestOptions'

/**
 * MediaManagementClient is used to access the Media part of the Content Management API.
 * @public
 *
 * @example
 * The {@link MediaManagementClient} must be accessed through {@link Client}.
 *
 * ```typescript
 * import { Client } from '@umbraco/headless-client'
 *
 * const client = new Client({
 *  projectAlias: '<your-project-alias>',
 *  apiKey: '<your-api-key>',
 *  language: '<iso-code>',
 * })
 *
 * const mediaClient = client.management.media
 * ```
 */
export class MediaManagementClient {
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
   * Fetch all media at the root of the tree, which the authorized user has access to according to the 'Start node'-permissions.
   * @returns a `Promise` that resolves to an array of {@link ContentManagementMedia}.
   */
  async root<T extends ContentManagementMedia> () {
    return this.makeRequest(Endpoints.management.media.root<T>())
  }

  /**
   * Fetch a single media item by its id.
   * @param id - GUID id of the Media item
   * @returns a `Promise` that resolves to a {@link ContentManagementMedia} if found, otherwise `undefined`.
   */
  async byId<T extends ContentManagementMedia> (id: string) {
    try {
      return await this.makeRequest(Endpoints.management.media.byId<T>(id))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }

      throw err
    }
  }

  /**
   * Fetch all children of a Media item.
   * @param id - GUID id of the Media item
   * @param options - Request options. See {@link APIMediaChildrenOptions}.
   * @returns a `Promise` that resolves to a {@link PagedResponse} of {@link ContentManagementMedia} if found, otherwise `undefined`.
   */
  async children<T extends ContentManagementMedia> (id: string, options?: APIMediaChildrenOptions): Promise<PagedResponse<T> | undefined> {
    try {
      return await this.makeRequest(Endpoints.management.media.children<T>(id, options))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }

      throw err
    }
  }

  /**
   * Create a new Media item.
   * @param body - The Media to create. See {@link ContentManagementMediaRequest}.
   * @returns a `Promise` that resolves to the newly created {@link ContentManagementMedia}.
   *
   * @example
   * ```typescript
   * const media = await client.management.media.create({
   *  name: '<name>',
   *  mediaTypeAlias: '<media-type-alias>',
   *  parentId: '<parentId|undefined>',
   * })
   * ```
   *
   * If the Media Type includes an `Upload` or an `Image Cropper` property and you want to upload a file you need to pass a `FormData` object to the function instead,
   *
   * ```typescript
   * import FormData from `form-data`
   * import fs from 'fs'
   * import path from 'path'
   *
   * const data = new FormData()
   *
   * data.append(JSON.stringify({
   *  name: '<name>',
   *  mediaTypeAlias: '<media-type-alias>',
   *  parentId: '<parentId|undefined>',
   *  // if myFile is of type `Upload`
   *  myFile: 'my-file.txt',
   *  // if myImage is of type `Image Cropper`
   *  myImage: { src: 'my-image.jpg', },
   * }))
   *
   * data.append('myFile', fs.createReadStream(path.join(__dirname, 'my-file.txt')))
   * data.append('myImage', fs.createReadStream(path.join(__dirname, 'my-image.txt')))
   *
   * const media = await client.management.media.create(data)
   * ```
   *
   * See {@link https://our.umbraco.com/documentation/Umbraco-Heartcore/API-Documentation/Content-Management/media/#create-content} for more info on the structure of the document.
   */
  async create <T extends ContentManagementMedia> (body: ContentManagementMediaRequest | FormData) {
    return this.makeRequest(Endpoints.management.media.create(), body)
  }

  /**
   * Update a Media item.
   * @param id - GUID id of the Content item.
   * @param body - Media to update. See {@link ContentManagementMediaRequest}.
   * @returns a `Promise` that resolves to a {@link ContentManagementMedia} of the updated Media item if found, otherwise `undefined`.
   *
   * @example
   * ```typescript
   * const media = await client.management.media.update('<media-id>', {
   *  name: '<name>',
   *  mediaTypeAlias: '<media-type-alias>',
   *  parentId: '<parentId|undefined>',
   * })
   * ```
   *
   * If the Media Type includes an `Upload` or an `Image Cropper` property and you want to upload a file you need to pass a `FormData` object to the function instead,
   *
   * ```typescript
   * import FormData from `form-data`
   * import fs from 'fs'
   * import path from 'path'
   *
   * const data = new FormData()
   *
   * data.append(JSON.stringify({
   *  name: '<name>',
   *  mediaTypeAlias: '<media-type-alias>',
   *  parentId: '<parentId|undefined>',
   *  // if myFile is of type `Upload`
   *  myFile: 'my-file.txt',
   *  // if myImage is of type `Image Cropper`
   *  myImage: { src: 'my-image.jpg', },
   * }))
   *
   * data.append('myFile', fs.createReadStream(path.join(__dirname, 'my-file.txt')))
   * data.append('myImage', fs.createReadStream(path.join(__dirname, 'my-image.txt')))
   *
   * const media = await client.management.media.update('<media-id>', data)
   * ```
   *
   * See {@link https://our.umbraco.com/documentation/Umbraco-Heartcore/API-Documentation/Content-Management/media/#update-media} for more info on the structure of the document.
   */
  async update <T extends ContentManagementMedia> (id: string, body: ContentManagementMediaRequest | FormData) {
    try {
      return await this.makeRequest(Endpoints.management.media.update(id), body)
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }

      throw err
    }
  }

  /**
   * Delete a Media item.
   * @param id - GUID id of the Media item.
   * @returns a `Prommise` that resolves to a {@link ContentManagementMedia} of the deleted Media item if found', otherwise `undefined`.
   */
  async delete <T extends ContentManagementMedia> (id: string) {
    try {
      return await this.makeRequest(Endpoints.management.media.delete(id))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }

      throw err
    }
  }
}
