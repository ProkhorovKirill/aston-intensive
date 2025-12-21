import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import type { ThemeContextType } from "./ThemeProvider";

export default function useTheme(): ThemeContextType {

    const context: ThemeContextType | null = useContext(ThemeContext);

    if (context === null) {

        throw new Error('Произошла ошибка, связанная с контекстом');
    }

    return context;

};