import { createContext, useState, ReactNode } from "react";



interface ThemeContextData {
    isDarkMode: boolean;
    darkMode: () => void;
}


interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {

    const [isDarkMode, setDarkMode] = useState(false);


    function darkMode() {
        setDarkMode(!isDarkMode);

        console.log(isDarkMode);
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, darkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

