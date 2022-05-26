import './ToDoList.css';

const ToDoList = (props) => {
    
    // commented out the below array , no longer in use.
//   const toDoArray = [
//     {
//         id: 1,
//         title: 'Take Out The Trash'   
//     },
//     {
//         id: 2,
//         title: 'Pay The Bills'
//     },
//     {
//         id: 3,
//         title: 'Wash The Car'
//     },
//     {
//         id: 4,
//         title: 'Go To Dentist'
//     },
//     {
//         id: 5,
//         title: 'Start With A React Project'
//     }
// ];
    return (
        <ul className='unorderedList'>
            {
                props.data.map( (element, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox"/>
                            {element.text}
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default ToDoList;