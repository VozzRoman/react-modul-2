import React, { Component } from 'react';
import shortid from 'shortid';
// import CounterTow from './components/CounterTwo/CounterTow';
// import Counter from './components/Counter/Counter';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import './App.css';
// import DropDown from './components/DropDown/DropDown';
import ToDoList from './components/ToDoList'; //reexport 
import ToDoEditor from './components/toDoEditor';

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
    name: "Привет я Реакт", // value инпут
    password: ''
	}

	deleteToDo = todoId => { // создаем методкласса для удаления туду по Айди
		this.setState(prevStae => ({ // функция от предидущего
      todolist: prevStae.todolist.filter(todo => { //фильтурем массив по айди
        return todo.id !== todoId
      })
		}))
  }

	toggleCompleted = todoId => {
    console.log(todoId)
    this.setState(prevStae => ({
      todolist: prevStae.todolist.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            compledted: !todo.compledted,
          };
        }
        return todo;
      })
    }))
	}


  //События инпут - получения данных из инпута! можно написать отдельно для каждого инпута метод
  //но это не удобно поскольку ипутов может быть много, поэтому лучше написать один метод для все ипутов
  // через атрибут name=""

  // hendleNameChangeInput = (event) => { // передаем событие ипут
  //   console.log(event.currentTarget.value)
  //   this.setState({
  //     name: event.currentTarget.value
  //   })
  // }

  //  hendlePasswordChangeInput = (event) => { // передаем событие ипут
  //   console.log(event.currentTarget.value)
  //   this.setState({
  //     password: event.currentTarget.value
  //   })
  // }

  hendleOnChange = (event) => {
    console.log(event.currentTarget);
    console.log(event.currentTarget.name); // input name or input passwor
    console.log(event.currentTarget.value); // result 
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  //Метод Сабмит отправка формы
  hendleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
  }
  addFromFormToToDo = text => { // добовляем из формы текст в ТоДоЛист
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text, 
      compledted: false,
    }
    this.setState(prevState => ({
      todolist: [todo, ...prevState.todolist] 

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
        {/* <form onSubmit={this.hendleSubmit}>
          <label>
            Name
           <input type="text" name="name" value={this.state.name} onChange={this.hendleOnChange}></input>
          </label>
            <label>
            Password
           <input type="numbers" name="password" value={this.state.password} onChange={this.hendleOnChange}></input>
          </label>
          <button type='submit'>Отправить</button>
        </form> */}
       
      {/* <h1>Состояние компонента</h1> */}
      {/* <Counter initialValue={10} /> 
      <CounterTow initialValue={10} />
      <DropDown />
      <ColorPicker option={colorPickerOption} /> */}
        <ToDoEditor textFromForm={this.addFromFormToToDo} />
				<ToDoList
					todolist={todolist}
					onDeleteToDo={this.deleteToDo}
					onToggleCompleted={this.toggleCompleted}	
				/> 
        <p>Количество: {todolist.length}</p>
        <p>Количество выполненых: {completedToDo}</p>
        
        {/* //передаем методкласса удаления туду в пропс */}
    </>
		)
	}
}

export default App;
