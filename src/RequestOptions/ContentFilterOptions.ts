/**
 * Content Filter Properties.
 * @public
 */
export interface ContentFilterProperties {
  alias: string
  value: string
  match: ContentFilterMatch
}

/**
 * Content Filter.
 * @public
 */
export interface ContentFilter {
  contentTypeAlias?: string
  properties: ContentFilterProperties[]
}

/**
 * Content Filter Match.
 * @public
 */
export enum ContentFilterMatch {
  Contains = 'CONTAINS',
  Like = 'LIKE'
}
