export interface ContentTypeBaseResponse<T extends ContentTypeBase> {
    contenttypes: T[];
}
export interface ContentTypeGroupProperty {
    label: string;
    alias: string;
    allowCultureVariant: boolean;
    propertyEditorAlias: boolean;
    sortOrder: number;
    validation: any;
}
export interface ContentTypeBaseGroup {
    name: string;
    sortOrder: number;
    properties: ContentTypeGroupProperty[];
}
export interface ContentTypeBase {
    bane: string;
    alias: string;
    groups: ContentTypeBaseGroup[];
    _createDate: string;
    _updateDate: string;
    _links: any;
    _id: string;
}
