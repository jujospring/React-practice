import { useState } from "react";
import PropTypes, { string } from "prop-types";

function getRandColor(arr) {
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}

function getBoxDims(num) {
    const boxDims = 100/Math.ceil(Math.sqrt(num)) ;
    return boxDims;
}

export default function Box({colors, num}) {
    const [color, setColor] = useState(`#${getRandColor(colors)}`);
    const colDims = getBoxDims(num);
    const changeColor = () => {
        setColor(`#${getRandColor(colors)}`);
    };
    return (
        <div 
            className="Box" 
            onClick={changeColor} 
            style={{backgroundColor: color, width: `${colDims}%`, height: `${colDims}%`}}
        >
        </div>
    );
}

Box.propTypes = {
    colors: PropTypes.arrayOf(string),
    num: PropTypes.number,
}