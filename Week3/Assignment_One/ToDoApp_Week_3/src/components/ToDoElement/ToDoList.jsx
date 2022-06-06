import ToDo from './ToDo';
import './ToDoList.css';

const ToDoList = ({data, completeTodo, deleteToDo}) => {
    

    return (
       <ToDo data={data} completeTodoProp={completeTodo} deleteTodoProp={deleteToDo}/>
    )
};

export default ToDoList;