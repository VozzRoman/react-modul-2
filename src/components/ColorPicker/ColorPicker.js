import React from "react";
import './ColorPicker.css';

export const ColorPicker = ({ option }) => {
    console.log(option)
    return (
        <div className="ColorPicker">
            <h2 className="ColorPicker__title">ColorPicker</h2>
            <div>
                {option.map(({ lable, color }) => (
                    <span
                        key={lable}
                        className="Color__pickker-option"
                        style={{backgroundColor: color}} >
                        
                    </span>
                ))}
            </div>

    </div>
)
}

export default ColorPicker;
