export interface ContentRelationType {
    _id: number;
    parentId: string;
    childId: string;
    relationTypeAlias: string;
    comment: string;
    _links: any;
}
export interface ContentRelationRootType<T extends ContentRelationType> {
    relations: T[];
}
export interface ContentRelationTypeType {
    name: string;
    alias: string;
    isBidirectional: boolean;
    parentObjectType: string;
    childObjectType: string;
    _createDate: string;
    _id: string;
    _updateDate: string;
}
