export interface ContentMemberType {
    _failedPasswordAttempts: number;
    _groups: string[];
    _lastLoginDate: string;
    _lastPasswordChangeDate: string;
    _createDate: string;
    _id: string;
    _updateDate: string;
    _links: any;
    comments: string;
    email: string;
    isApproved: boolean;
    isLockedOut: boolean;
    memberTypeAlias: string;
    username: string;
    name: string;
}
export interface ContentCreateMemberType {
    email: string;
    isApproved: boolean;
    isLockedOut: boolean;
    memberTypeAlias: string;
    username: string;
    name: string;
}
export interface ContentMemberGroupType {
    _id: string;
    name: string;
    _createDate: string;
    _updateData: string;
}
export interface ContentMemberCreateGroupTypeProperty {
    isSensitive: boolean;
    memberCanEdit: boolean;
    memberCanView: boolean;
    alias: string;
    label: string;
    propertyEditorAlias: string;
    sortOrder: number;
    validation: any;
}
export interface ContentMemberCreateGroupType {
    name: string;
    sortOrder: number;
    properties: ContentMemberCreateGroupTypeProperty[];
}
export interface ContentMemberTypeType {
    alias: string;
    compositions: any[];
    groups: ContentMemberCreateGroupType[];
    name: string;
    _createDate: string;
    _id: string;
    _updateDate: string;
    _links: any;
}
export interface ContentMemberTypeTypeGroup<T extends ContentMemberTypeType = ContentMemberTypeType> {
    membertypes: T[];
}
