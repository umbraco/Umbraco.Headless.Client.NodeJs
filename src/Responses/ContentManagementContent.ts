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
export interface ContentManagementContent {
  name: ContentLanguageProperty
  contentTypeAlias: string
  parentId?: string
  sortOrder?: number
  [key: string]: ContentLanguageProperty | any
}
