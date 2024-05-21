export default function PropertyListItem({name, rating, price}) {
    return (
        <div className="PropertyListItem">
            <h2>{name}</h2>
            <h3>${price} per night</h3>
            <h4>{rating}/5.0</h4>
        </div>
    );
}