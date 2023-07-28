import React,{useState} from "react";

const ThemeContext = React.createContext();

function ThemeProvider ({children}){
    const theme = useState("light");

    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider}