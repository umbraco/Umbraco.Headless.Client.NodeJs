/**
 * Paged Response
 * @public
 */
export interface PagedResponse<I> {
  /** The page number */
  page: number
  /** The page size */
  pageSize: number
  /** Number of total items */
  totalItems: number
  /** Number of total pagen */
  totalPages: number
  /** The items */
  items: I[]
}
