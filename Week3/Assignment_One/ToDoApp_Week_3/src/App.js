import { useState } from "react";
import ToDoList from "./components/ToDoElement/ToDoList";
import {todosArray} from './components/STORE.js';

const App = () => {
  const [todos, setToDos] = useState(todosArray);
   
  const completeTodo = (id) => {
    let temporaryToDosArray = [...todos];
    let toDoIndex = temporaryToDosArray.findIndex(element => element.id  === id);
    console.log(id);
    temporaryToDosArray[toDoIndex].isCompleted = !temporaryToDosArray[toDoIndex].isCompleted;
    console.log(temporaryToDosArray[toDoIndex].isCompleted);
    setToDos(temporaryToDosArray);
  };

  const deleteToDo = (id) => {
    console.log("From App.js");
    let temporaryToDosArray = [...todos];
    let deleteToDoArray = temporaryToDosArray.filter(element => element.id !== id);

    setToDos(deleteToDoArray);

  };

  


  return (
    <div>
      <h1>List Of Todos</h1>
      <ToDoList data={todos} completeTodo={completeTodo} deleteToDo={deleteToDo} />
    </div>
  );
}

export default App;


