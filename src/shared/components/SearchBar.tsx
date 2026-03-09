import { useEffect, useState } from "react";

/*
  🚀En caso event importemos de react: 
  // import { type KeyboardEvent } from "react";
  🚀Debemos de asignar un tipo de evento asi:
  //event:KeyboardEvent<HTMLInputElement>
*/
interface Props{
    placeholder?:string;
    onQuery:(query:string)=>void;
}

export const SearchBar = ({placeholder="Buscar",onQuery}: Props) => {

  const [query,setQuery] = useState("");
  //esta implementacion con use efect se le conoce como DEBOUNCE
  //solo al dejar de escribir que se busque o haga la peticion
  useEffect(()=>{
    const timemoutId = setTimeout(()=>{
        onQuery(query);
    },700);
    return()=>{
      clearTimeout(timemoutId);
    }
  },[query,onQuery])

  const handleSearch = ()=>{
      onQuery(query);
      setQuery("");
  }
  const handleKeyDow = (event:React.KeyboardEvent<HTMLInputElement>)=>{
    if(event.key==="Enter"){
      handleSearch();
    }
  }

  return (
    <div className="search-container">
        <input type="text" 
        placeholder={placeholder} 
        value={query}
        onChange={(event)=>setQuery(event.target.value)}
        onKeyDown={handleKeyDow}
        />
        <button
        onClick={handleSearch}
        >Buscar</button>
    </div>
  )
}

/** FUNCION DEL EFECTO
 * 
🧠 Flujo real correcto

Cuando escribes "H":

-query cambia

-React renderiza

-useEffect corre

-Se crea un setTimeout (700ms)

Si no escribes nada más…
👉 después de 700ms se ejecuta onQuery("H")

🚀Ahora escribes "HO" antes de que pasen los 700ms:

-query cambia otra vez

-React renderiza otra vez

-Antes de ejecutar el nuevo efecto,
React ejecuta la limpieza del anterior

-Se hace clearTimeout → se cancela el anterior

-Se crea un nuevo setTimeout de 700ms

Y así sucesivamente.
*/