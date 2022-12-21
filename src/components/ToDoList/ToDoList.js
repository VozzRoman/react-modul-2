import React from "react";

const ToDoList = ({todolist, onDeleteToDo}) => {
    return (
		 <ul>
			 {todolist.map(todo => (
				 <li key={todo.id}>
					 <p>{todo.text}</p>
					 <button onClick={() => onDeleteToDo(todo.id)}>Удалить</button>
				 </li>
			 ))}
		  </ul>
    )
}
export default ToDoList;
