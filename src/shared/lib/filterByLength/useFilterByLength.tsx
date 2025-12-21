import { useContext } from "react";
import { Filter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import type { FilterProviderProps } from "@/features/PostLengthFilter/model/interfaces";

export default function useFilterByLength(): FilterProviderProps {

    const context = useContext<FilterProviderProps | null>(Filter);

    if (context === null) {

        throw new Error('Произошла ошибка, связанная с контекстом');
    }

    return context;

};