import React from 'react';
import CounterTow from './components/CounterTwo/CounterTow';
import Counter from './components/Counter/Counter';
import ColorPicker from './components/ColorPicker/ColorPicker';
import './App.css';
import DropDown from './components/DropDown/DropDown';

const colorPickerOption = [
  { lable: "red", color: "red" },
  { lable: "green", color: "green" },
  { lable: "blue", color: "blue" },
  { lable: "gray", color: "gray"},
]

const App = () => {
  return (
    <>
      <h1>Состояние компонента</h1>
      <Counter initialValue={10} /> 
      <CounterTow initialValue={10} />
      <DropDown />
      <ColorPicker option={colorPickerOption} />
    </>
  );
}

export default App;
