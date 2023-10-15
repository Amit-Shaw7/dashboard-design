import React, { useState, createContext } from 'react'
export const AppContext = createContext();


const AppProvider = ({ children }) => {

    const [showMobileSidebar, setShowMobileSidebar] = useState("");
    console.log(showMobileSidebar);

    return (

        <AppContext.Provider value={{ showMobileSidebar, setShowMobileSidebar }}>
            {children}
        </AppContext.Provider>
    );

}

export default AppProvider