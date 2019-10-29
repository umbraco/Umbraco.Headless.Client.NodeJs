export interface LanguageContainer<T> {
    [key: string]: T | undefined
    $invariant? : T

}
