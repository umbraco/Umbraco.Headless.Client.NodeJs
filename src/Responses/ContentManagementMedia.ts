/**
 * @public
 */
export interface ContentManagementMedia {
  readonly _hasChildren: boolean
  readonly _level: string
  readonly _createDate: string
  readonly _deleteDate: string
  readonly _id: string
  readonly _updateDate: string
  mediaTypeAlias: string
  name: string
  sortOrder: number
  [key: string]: any
}
