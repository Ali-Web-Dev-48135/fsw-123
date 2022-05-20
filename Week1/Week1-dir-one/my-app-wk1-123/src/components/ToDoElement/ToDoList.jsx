import {React, Fragment} from "react";
import ToDo from './ToDo';

const ToDoList = (props) => {
    return (
        <Fragment>
            <ToDo arrayList = {props.toDoList}/>
        </Fragment>

    )

};

export default ToDoList;