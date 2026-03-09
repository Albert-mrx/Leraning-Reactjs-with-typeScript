export interface Gif{
    id: string;
    title: string;
    url: string;
    width: number;
    height: number;
}

interface Props{
    // gifs: Gif[] | null;
    gifs: Gif[];
}

export const GifList = ({gifs}: Props) => {
// if (gifs === null) {
//     return <p>Cargando...</p>;
// }

// if (gifs.length === 0) {
//     return <p>No se encontraron resultados</p>;
// }
return (
    <div className="gifs-container">
        {
            gifs.map((gif)=>(
                <div key={gif.id} className="gif-card">
                    <img src={gif.url} alt={gif.title} />
                    <h3>{gif.title}</h3>
                    <p>{gif.width} x {gif.height} (1.5mb)</p>
                </div>
            ))
        }
    </div>
)
}
