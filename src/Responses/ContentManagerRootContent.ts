export interface LanguageContainer<T> {
    $invariant? : T
    [key: string]: T
}
