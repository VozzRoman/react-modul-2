import React from "react";
import Control from './controls';

class CounterTow extends React.Component { // Реакт компонент для событий

    //
    static defaultProps = { // /дефлотное значение пропса
        initialValue: 0
    }
    static propTypes = {
        
    }
    state = {
        // value: 5,
        value: this.props.initialValue
    }

    headnleIncrement = () => {
    
        this.setState(prevState => {
            return  {
                value: prevState.value + 1,
              }
          })}
     headnleDicrement = () => {
              this.setState(prevState => {
            return  {
                value: prevState.value - 1,
              }
          })
        }
    render() {
        return (
        <div>
            <div>
            <span>{this.state.value}</span>
                    <Control
                        onDecrement={this.headnleDicrement} //пропсы евента
                        onIncrement={this.headnleIncrement}
                    />     
            </div>
        </div>
        )}}

export default CounterTow;
