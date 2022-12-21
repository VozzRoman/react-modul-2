import React, { Component } from 'react';

// import CounterTow from './components/CounterTwo/CounterTow';
// import Counter from './components/Counter/Counter';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import './App.css';
// import DropDown from './components/DropDown/DropDown';
import ToDoList from './components/ToDoList'; //reexport 

// const colorPickerOption = [
//   { lable: "red", color: "red" },
//   { lable: "green", color: "green" },
//   { lable: "blue", color: "blue" },
//   { lable: "gray", color: "gray"},
// ]


//Так как в тудуЛист мы будем менять Стейт и хранить его в Арр() то из функции мы дклаем класс
class App extends Component {
	state = {
		todolist:
		[{ id: 'id-1', text: 'Todo-1', compledted: false },
			{ id: 'id-2', text: 'Todo-2', compledted: true},
			{ id: 'id-3', text: 'Todo-3', compledted: false },
			{ id: 'id-4', text: 'Todo-4', compledted: true }
		],
	}

	deleteToDo = todoId => { // создаем методкласса для удаления туду по Айди
		this.setState(prevStae => ({ // функция от предидущего
      todolist: prevStae.todolist.filter(todo => { //фильтурем массив по айди
        return todo.id !== todoId
      })
		}))
	}

	render() {
    const { todolist } = this.state // destructurisation
    const completedToDo = todolist.reduce((total, totdo) => {
      return totdo.compledted ? total + 1 : total
    }, 0)
    console.log(completedToDo);
		return (
	<>
      <h1>Состояние компонента</h1>
      {/* <Counter initialValue={10} /> 
      <CounterTow initialValue={10} />
      <DropDown />
      <ColorPicker option={colorPickerOption} /> */}
        <ToDoList todolist={todolist} onDeleteToDo={this.deleteToDo} /> 
        <p>Количество: {todolist.length}</p>
        <p>Количество выполненых: {completedToDo}</p>
        
        {/* //передаем методкласса удаления туду в пропс */}
    </>
		)
	}
}

export default App;
