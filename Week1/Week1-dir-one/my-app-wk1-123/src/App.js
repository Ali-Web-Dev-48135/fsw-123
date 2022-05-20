import React from "react";
import ToDoList from "./components/ToDoElement/ToDoList";




const App = () => {

  const toDoArray = [
    {
        id: 1,
        title: 'Take Out The Trash'   
    },
    {
        id: 2,
        title: 'Pay The Bills'
    },
    {
        id: 3,
        title: 'Wash The Car'
    },
    {
        id: 4,
        title: 'Go To Dentist'
    },
    {
        id: 5,
        title: 'Start With A React Project'
    }
];
  return (
    <div>
      <h1>List Of Todos.</h1>
      <ToDoList toDoList={toDoArray}/>
    </div>
  );
}

export default App;
