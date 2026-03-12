import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";
// import { useState } from "react";
// import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

// import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {

    const {gifs,previousTerms,handleTermClicked,handleSearch} = useGifs()
   
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
