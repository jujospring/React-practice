import Box from "./Box";
import PropTypes, { string } from "prop-types";
import "./LottaBoxes.css";

export default function LottaBoxes({colors, num}) {
    const boxes = [];
    for (let i = 0; i < num; i++) {
        boxes.push(<Box colors={colors} num={num}/>);
    }
    return (
        <div className="BoxGrid">
            {boxes}
        </div>
    );
}

LottaBoxes.propTypes = {
    colors: PropTypes.arrayOf(string),
    num: PropTypes.number,
}
