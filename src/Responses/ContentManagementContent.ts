/**
 * @public
 */
export interface ContentLanguageProperty {
  $invariant?: any
  [key: string]: any
}

/**
 * @public
 */
export interface CurrentVersionSate {
  $invariant?: any
  [key: string]: ContentSavedState
}

/**
 * The saved state of a content item.
 * @public
 */
export enum ContentSavedState {
  /**
   * The item isn't created yet.
   */
  NotCreated = 'NOT_CREATED',
  /**
   * The item is saved but isn't published.
   */
  Draft = 'DRAFT',
  /**
   * The item is published and there are no pending changes.
   */
  Published = 'PUBLISHED',
  /**
   * The item is published and there are pending changes.
   */
  PublishedPendingChanges = 'PUBLISHED_PENDING_CHANGES'
}

/**
 * @public
 */
export interface ContentManagementContent {
  readonly _hasChildren: boolean
  readonly _level: string
  readonly _currentVersionState: CurrentVersionSate
  readonly _createDate: string
  readonly _deleteDate: string
  readonly _id: string
  readonly _updateDate: string
  name: ContentLanguageProperty
  contentTypeAlias: string
  parentId?: string
  sortOrder?: number
  [key: string]: ContentLanguageProperty | any
}

/**
 * @public
 */
export interface ContentManagementContentRequest {
  name: ContentLanguageProperty
  contentTypeAlias: string
  parentId?: string
  sortOrder?: number
  [key: string]: ContentLanguageProperty | any
}
