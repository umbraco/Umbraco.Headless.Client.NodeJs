export interface ContentFilterProperties {
    alias: string;
    value: string;
    match: ContentFilterMatch;
  }
  export interface ContentFilter {
    contentTypeAlias?: string;
    properties: ContentFilterProperties[];
  }
  export enum ContentFilterMatch {
    Contains = "CONTAINS",
    Like = "LIKE"
  }