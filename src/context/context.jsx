import { createContext, useState } from "react";

export const CodeContext = createContext({})

export const CodeProvider = function({children}) {
    const [codes, setCodes] = useState([]);
    return (
        <CodeContext.Provider value={{codes, setCodes}}>
            {children}
        </CodeContext.Provider>
    )
}