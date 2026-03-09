import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {

    const [gifs,setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term:string)=>{
       
    }
    const handleSearch = async (query:string) =>{
        const cleanedQuery = query.toLowerCase().trim();
        if (cleanedQuery.length === 0) return;

        setPreviousTerms(prev => {
            if (prev.includes(cleanedQuery)) return prev;
            return [cleanedQuery, ...prev];
        });
        
        const gifs=await getGifsByQuery(query);
        setGifs(gifs);
        
    }
    return (
        <>
            {/* header */}
            <CustomHeader  title="Buscador de Gifs" 
            description="Descubre y comparte el gif perfecto"/>
            {/* seach */}
            <SearchBar 
            placeholder="Busca lo que quieras"
            onQuery={
                // (query:string)=>handleSearch(query)
                handleSearch
            }
            />
            {/* busquqedas previas */}
            <PreviousSearches title="Búsquedas previas" 
            itemList={previousTerms}
            onLabelCkiked={handleTermClicked}/>
            {/* gifs */}
            <GifList gifs={gifs} />
        </>
    )
}
