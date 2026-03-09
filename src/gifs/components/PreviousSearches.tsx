interface Props{
    title: string;
    itemList: string[];
    onLabelCkiked:(term:string)=>void;
}

export const PreviousSearches = ({title, itemList,onLabelCkiked}: Props) => {
    return (
    <div className="previous-searches">
        <h2>{title}</h2>
        <ul className="previous-searches-list">
            {itemList.map((term) => (
                <li key={term}
                    onClick={()=>onLabelCkiked(term)}
                >{term}</li>
            ))}
        </ul>
    </div>
    )
}



