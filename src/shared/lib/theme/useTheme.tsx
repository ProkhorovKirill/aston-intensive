import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function useTheme() {

    const context = useContext(ThemeContext);

    if (context === null) {

        throw new Error('Произошла ошибка, связанная с контекстом');
    }

    return context;

};