import { useContext } from "react";
import { Filter } from "../../../features/PostLengthFilter/ui/PostLengthFilter";

export default function useFilterByLength() {

    const context = useContext(Filter);

    if (context === null) {

        throw new Error('Произошла ошибка, связанная с контекстом');
    }

    return context;

};