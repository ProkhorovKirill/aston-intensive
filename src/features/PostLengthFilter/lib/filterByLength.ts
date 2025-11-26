import type { Post } from "../../../entities/post/model/interfaces";
import type { DebouceProps } from "../model/interfaces";
import { useState, useEffect } from "react";

export default function useDebounce( {value, delay}: DebouceProps ) {

    const [debouncedValue, setDebouncedValue] = useState<number>(value);

    useEffect(() => {

        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };

    }, [value]);

    return debouncedValue;

}

export function filterPostsByLength(posts: Post[], maxLength: number) {

    return posts.filter((item: Post) => item.title.length <= maxLength);

}