import React from "react";

const  Control = ({onIncrement, onDecrement}) => { // принемаем пропс из КаунтерТу
    return (
        <div className="control">
        <button type="button" onClick={onIncrement}>Увеличить</button>
        <button type="button" onClick={onDecrement}>Уменьшить</button>
        </div>
    )
}

export default Control;
