import {createContext, useContext, useState} from "react";

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext);

function MyComponent() {
    const theme = useGetTheme();
    return (
        <div>
            <span>Theme</span>
            <p>Theme:{theme}</p>
        </div>
    );
}

function Index() {
    const [theme, setTheme] = useState<Theme>("dark");
    return (
        <ThemeContext.Provider value={theme}>
            <MyComponent/>
        </ThemeContext.Provider>
    );
}

export default Index;