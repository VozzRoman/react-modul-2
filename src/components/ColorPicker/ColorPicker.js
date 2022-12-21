import React, { Component } from "react";
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 2,
    }

    makeOptionClasses = (index) => {
    const optionClasses = ["Color__pickker-option"];
        if (index === this.state.activeOptionIdx) {
        optionClasses.push("Color__pickker-option--active")
        }
        return optionClasses.join(' ');
    }

    setActiveIndex = (index) => {
        this.setState({ activeOptionIdx: index });
    }

    render() {
        const activeLabelColor = this.props.option[this.state.activeOptionIdx]
        console.log(activeLabelColor.lable);
        return (
                <div className="ColorPicker">
            <h2 className="ColorPicker__title">ColorPicker</h2>
                <div>
                    <p>Цвет:{activeLabelColor.lable}</p>
                    {this.props.option.map(({ lable, color }, index) => {
                        // const optionClasses = ["Color__pickker-option"]; // этот скрипт можно вынести в отдельную функцию
                        // if (index === this.state.activeOptionIdx) {
                        //     optionClasses.push("Color__pickker-option--active")
                        // }
                        const optionCassesName = this.makeOptionClasses(index)
                        return (
                        <button
                            key={lable}
                            // className={optionClasses.join(' ')}
                            className={optionCassesName}
                                style={{ backgroundColor: color }}
                            onClick={() => this.setActiveIndex(index)}  >
                        </button>
                        )
                    })}
            </div>
    </div>
        )
    }
}

export default ColorPicker;
