import { useState } from "react";
import TodoForm from "./components/ToDoForm/TodoForm";
import ToDoList from "./components/ToDoElement/ToDoList";
import {todosArray} from './components/STORE.js';
import {v4 as uuidV4} from "uuid";


const App = () => {
  const [todos, setToDos] = useState(todosArray);

  const addTodo = (text) => {
    const toDoObject = {
      id: uuidV4(),
      text: text,
      isCompleted: false,
    };

    setToDos((oldTodos) => {
      return [...oldTodos, toDoObject];
    });
  };
   
  const completeTodo = (id) => {
    let temporaryToDosArray = [...todos];
    let toDoIndex = temporaryToDosArray.findIndex(element => element.id  === id);
    temporaryToDosArray[toDoIndex].isCompleted = !temporaryToDosArray[toDoIndex].isCompleted;
    setToDos(temporaryToDosArray);
  };

  const deleteToDo = (id) => {
    let temporaryToDosArray = [...todos];
    let deleteToDoArray = temporaryToDosArray.filter(element => element.id !== id);

    setToDos(deleteToDoArray);

  };
  return (
    <div>
      <h1>List Of Todos</h1>
      <h3>Add new todos via the input field:</h3>
      <TodoForm addTodo={addTodo}/>
      <ToDoList data={todos} completeTodo={completeTodo} deleteToDo={deleteToDo} />
    </div>
  );
}

export default App;


