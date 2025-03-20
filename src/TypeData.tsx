import React, { createContext, useState,ReactNode } from "react";

export const SearchContext = createContext({
    searchType: { pokemonName: "", pokemonTypes: "all" },
    setSearchType: (searchType: { pokemonName: string; pokemonTypes: string }) => {}
});

type SearchType = {
    pokemonName: string;
    pokemonTypes: string;
};

export const SearchProvider =({children}: {children: ReactNode})=>{
    const [searchType, setSearchType] = useState<SearchType>({pokemonName: "", pokemonTypes:"all"});

    return (
        <SearchContext.Provider value={{searchType,setSearchType}}>
            {children}
        </SearchContext.Provider>
    );
}