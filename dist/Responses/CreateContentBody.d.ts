export interface ContentLanguageProperty {
    $invariant?: any;
    [key: string]: any;
}
export interface CreateContentBody {
    contentTypeAlias: string;
    parentId?: string;
    sortOrder?: number;
    [key: string]: ContentLanguageProperty | any;
}
