import {Content} from "@umbraco/headless-sdk";


export interface HomeContentFooterCTALink extends Content {
    contentTypeAlias: 'blog'
    name: string
    parentId: string
    sortOrder: number
    pageTitle: string
    bodyText: string
    seoMetaDescription: string
    keywords: string[]
    umbNavHide: boolean
    howManyPostsShouldBeShown: number
    disqusShortname: string
}
