import PropertyListItem from "./PropertyListItem";
import "./PropertyList.css"

export default function PropertyList({properties}) {
    return (
        <div className="PropertyList">
            {properties.map((i) => {
                return <PropertyListItem key={i.id} {...i}/>
            })}
        </div>
    );
}