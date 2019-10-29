export interface PagedResponse<I> {
    page: number
    pageSize: number
    totalItems: number
    totalPages: number

    items: I[]
}