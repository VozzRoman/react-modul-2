import './DropDown.css';
import { Component } from "react";

class DropDown extends Component {

    //Создаем состоняние
    state = {
        visible: false,
    }
    //пишем методы для изменеия состояния
    show = () => {
        this.setState({ visible: true });
    } 

    hide = () => {
        this.setState({ visible: false });
    }
    // /можно использовать метод Тогл, но тут мы изменяем состояние от предидущего
    toogle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    }

    render() {
        return (
            <div className="Drop__down">
                <button type="button" className="drop__toogle" onClick={this.toogle}>
                    {/* показать или скрыть = по услови, если тру = ПОКАЗАТЬ есл флос = Скрыть */}
                    {this.state.visible ? 'Показать' : 'Скрыть'}
                </button>
                {/* <button type="button" className="drop__toogle" onClick={this.show}>
                    Показать
                </button>
                  <button type="button" className="drop__toogle" onClick={this.hide}>
                    Скрыть
                </button> */}
                {this.state.visible && ( // если тру то разметка рендрится если фолс то нет
                    <div className="drop__menu">выпадающее меню</div>
                )}
                
            </div>
        )
    }

}

export default DropDown
