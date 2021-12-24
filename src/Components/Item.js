

export default function Item(props) {
    return (
        <div>
            <li className="border d-flex justify-content-between align-items-center p-2 m-2">
                <div className="p-3">{props.txt}</div>
                <button 
                className="btn btn-danger p-2 h-50" 
                // On click execute the function to generate the new array (filtered by id) whithout this Item 
                onClick={()=> props.deleteFunction(props.id)}
                >Supprimer</button>
            </li>
        </div>
    )
}
