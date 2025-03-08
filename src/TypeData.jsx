import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider =({children})=>{
    const [searchType, setSearchType] = useState("all");

    return (
        <SearchContext.Provider value={{searchType,setSearchType}}>
            {children}
        </SearchContext.Provider>
    );
}