import { createContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme,
  toggleTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({children} : {children: React.ReactNode}) {

    const savedTheme = localStorage.getItem('theme') as Theme | null;

    const [theme, setTheme] = useState<Theme>(savedTheme ? savedTheme : 'light');

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
    }, [theme]);

    const toggleTheme = () => {

        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    }
    

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}