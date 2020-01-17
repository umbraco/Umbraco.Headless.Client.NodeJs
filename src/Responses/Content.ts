/**
 * Content
 * @public
 */
export interface Content {
  _creatorName: string
  _url: string
  _writerName: string
  _hasChildren: boolean
  _level: number
  _createDate: string
  _id: string
  _updateDate: string
  contentTypeAlias: string
  name: string
  parentId: string
  sortOrder: number
  [key: string]: any
}
