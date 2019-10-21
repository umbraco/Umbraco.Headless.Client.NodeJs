export interface ContentResponseElementLinks {
    [key: string]: {
        href: string
        title?: string
    }
}

export interface ContentResponseElement {
    _creatorName: string
    _url: string
    _writerName: string
    _hasChildren: boolean
    _level: number
    _createDate: string
    _deleteDate?: string
    _id: string
    _updateDate: string
    _links: ContentResponseElementLinks
}

export interface RootContentResponse<T extends ContentResponseElement = ContentResponseElement> {
    content: T[]
}
