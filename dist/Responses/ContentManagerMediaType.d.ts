export interface ContentManagerMediaType {
    _hasChildren: boolean;
    _level: string;
    _createDate: string;
    _id: string;
    _updateDate: string;
    _links: any;
    mediaTypeAlias: string;
    name: string;
    sortOrder: number;
}
export interface ContentManagerMediaTypeBase<T extends ContentManagerMediaType> {
    media: T[];
}
export interface ContentManagerMediaTypeBody {
    content: any;
    file: string;
}
export interface MediaTypeContentManagerRoot {
    mediatypes: MediaTypeContentManager[];
}
export interface MediaTypeContentManager {
    alias: string;
    compositions: any[];
    groups: GroupMediaTypeContentManager[];
    name: string;
    _createDate: string;
    _id: string;
    _updateDate: string;
    _links: any;
}
export interface GroupMediaTypeContentManager {
    name: string;
    sortOrder: number;
    properties: PropertyMediaType[];
}
export interface PropertyMediaType {
    alias: string;
    label: string;
    propertyEditorAlias: string;
    sortOrder: number;
    validation: any;
}
