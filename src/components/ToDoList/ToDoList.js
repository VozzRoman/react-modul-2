import React from "react";

const ToDoList = ({todolist}) => {
    return (
		 <ul>
			 {todolist.map(todo => (
				 <li key={todo.id}>
					 <p>{todo.text}</p>
					 <button>Удалить</button>
				 </li>
			 ))}
		  </ul>
    )
}
export default ToDoList;
