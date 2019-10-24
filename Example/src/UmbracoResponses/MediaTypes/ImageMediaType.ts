import {MediaType} from "@umbraco/headless-sdk";

export interface ImageMediaType extends MediaType {
    mediaTypeAlias: 'Image'
    name: string
    parentId: string
    sortOrder: number
    umbracoFile: {
        src: string
        focalPoint: {
            left: number
            top: number
        },
        crops: any
    }
    umbracoWidth: number
    umbracoHeight: number
    umbracoBytes: number
    umbracoExtension: string


}
