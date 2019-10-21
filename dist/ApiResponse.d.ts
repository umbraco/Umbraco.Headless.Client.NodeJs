export interface ApiResponse<Response = any, Links = any> {
    _links: Links;
    _embedded: Response;
}
export interface ApiPagedResponse<Response = any> extends ApiResponse<Response> {
    _totalItems: number;
    _totalPages: number;
    _page: number;
    _pageSize: number;
}
