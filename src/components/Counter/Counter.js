import React from "react";
import './Counter.css';

//Все события передаются через on
//onClick
//onMouseEnter
//onSubmit
//onInput
//Для того что бы передать событие на кнопку нужно прямо в теге передать пропс 
//-<button type="button" onClick={функция}>Увеличить</button> 

//Функции внутри  onClick={} могут быть боьшие и поэтому мы можем создать метод публичного класса и передать в проп onClick={this.handleIncrement}
// Но если нам нужно достучатся к this  то мы получим /undefind, по этому пишем все в стрелочных функциях
//Также можно передавать event но это не натиный эвент а обертка Реакта (ThenteticEvent object) 
//В асинхронном коде event не работает потому что евент переиспользуется, в этом случае нужно евент просто в нести в какуЭто переменную
// const trget = event.target;


class Counter extends React.Component { // Реакт компонент для событий

//     headnleIncrement() {
//         console.log('increase');
//         console.log(this); // /будет андефйнд
// }
    
    // headnleIncrement = (event) => {
    //     // console.log(event.target);
    //     console.log('increase');
    //     console.log('это this', this)
    //     setTimeout(() => {
    //       console.log(event.target);
    //   },2000)
    // }
    
    //-----State
    //В конструкторе обьявляем свойство this.state где хранится обьект с данными котрые мы будем использовать
    // constructor() { // - ola school вариант
    //     super();
    //     this.state = {
    //         value: 5,
    //     }
    // }
    //Если нужно передать значение пропа компонента в велью - value: this.props.initialValue
    //
    static defaultProps = { // /дефлотное значение пропса
        initialValue: 0
    }

    //В классе можно описывать пропТайпы
    static propTypes = {
        
    }


    state = {
        // value: 5,
        value: this.props.initialValue
    }

    headnleIncrement = () => {
        // для обновления значения (состояния) нужео вызывать специальный метод setState() и в него передавать то что мы хотим изменмть
        // this.setState({ // можем только перезаписать значение
        //     value: 10,
        // })
        //Если нам нужно обновить обьект от предвидущего значения value: 5 то в методе setState() вызываем функцию
        this.setState(prevState => {
            return  {
                value: prevState.value + 1,
              }
          })
    }
    
     headnleDicrement = () => {
              this.setState(prevState => {
            return  {
                value: prevState.value - 1,
              }
          })
        }
    render() {
        return (

                  <div className="Counter">
            <span className="Counter__value">{this.state.value}</span>

            <div className="Counter__control">
                    <button type="button" onClick={() => {
                        console.log('Увеличить')
                    }}>
                        Увеличить</button> 
                <button type="button" onClick={this.headnleIncrement}>Увеличить</button>
                <button type="button" onClick={this.headnleDicrement}>Уменьшить</button>
            </div>

        </div>
        )
    }
}

export default Counter;
