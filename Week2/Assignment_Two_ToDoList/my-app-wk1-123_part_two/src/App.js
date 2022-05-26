import ToDoList from "./components/ToDoElement/ToDoList";
import {todos} from './components/STORE.js';

const App = () => {

  return (
    <div>
      <h1>List Of Todos</h1>
      <ToDoList data={todos}/>
    </div>
  );
}

export default App;
