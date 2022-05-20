import './ToDoList.css';

const ToDoList = (props) => {
    
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
        <ul className='unorderedList'>
            <li>
                <input type="checkbox"/>
                {toDoArray[0].title}
            </li>
            <li>
                <input type="checkbox"/>
                {toDoArray[1].title}
            </li>
            <li>
                <input type="checkbox"/>
                {toDoArray[2].title}
            </li>
            <li>
                <input type="checkbox"/>
                {toDoArray[3].title}
            </li>
            <li>
                <input type="checkbox"/>
                {toDoArray[4].title}
            </li>
        </ul>

    )

};

export default ToDoList;