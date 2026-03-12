import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = ()=>{
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

        return{
            gifs,
            previousTerms,
            handleTermClicked,
            handleSearch,
        }
}