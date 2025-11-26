import type { Post } from "../../../entities/post/model/interfaces"

export interface DebouceProps {
    value: number,
    delay: number
}

export interface FilterProviderProps {
    debouncedSymbolCount: number,
    filterPostsByLength: (posts: Post[], maxLength: number) => Post[];
}