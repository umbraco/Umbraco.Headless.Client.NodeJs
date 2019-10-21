export interface ContentLanguageType {
    isoCode: string;
    cultureName: string;
    isDefault: boolean;
    isMandatory: boolean;
    _createDate: string;
    _updateDate: string;
    _links: any;
}
export interface ContentLanguageRootType<T extends ContentLanguageType = ContentLanguageType> {
    languages: T[];
}
export interface CreateContentLanguageType {
    isoCode: string;
    cultureName: string;
    isDefault: boolean;
    isMandatory: boolean;
}
