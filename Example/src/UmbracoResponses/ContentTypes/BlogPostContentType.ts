import {ContentResponseElement, LanguageContainer} from "@umbraco/headless-sdk";


export interface BlogPostContentType extends ContentResponseElement {

    contentTypeAlias: 'blogpost'
    name: string
    parentId: string
    sortOrder: number
    pageTitle: string
    categories: string[]
    excerpt: string
    bodyText: string

}

export namespace BlogPostContentType {
    export interface Manager extends ContentResponseElement {
        contentTypeAlias: 'blogpost'
        name: LanguageContainer<string>
        parentId: string
        sortOrder: LanguageContainer<number>
        pageTitle: LanguageContainer<string>
        categories: LanguageContainer<string[]>
        excerpt: LanguageContainer<string>
        bodyText: LanguageContainer<string>
    }
}
