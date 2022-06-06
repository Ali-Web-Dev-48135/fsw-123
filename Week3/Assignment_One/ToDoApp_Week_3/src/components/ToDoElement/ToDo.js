
const ToDo = ({data, completeTodoProp, deleteTodoProp}) => {
    
    const inlineStyleText = {
        "text-decoration": "line-through"
    };

    const completeElementHandler = (id) => {
        completeTodoProp(id);

    };

    const deleteElementHandler = (id) => {
        console.log(id);
        console.log("Hello World")
        
        deleteTodoProp(id);
    };
    
    // const checkedOrNot = (element) => element.isCompleted;

    return (
        

        <ul className='unorderedList'>
        {
            data.map( (element, index) => {
                
                return (
                    <li key={element.id} style={{textDecoration : element.isCompleted === true ? "line-through" : ""}}>
                        <input type="checkbox" 
                            // onClick={() => completeElementHandler(element.id)}
                            checked = {element.isCompleted} 
                            onChange={() => completeElementHandler(element.id)}
                            />
                            {element.text}
                        <button onClick={ () => deleteElementHandler(element.id)}>X</button>
                    </li>
                    
                )
            })
        }
    </ul>
    )

};

export default ToDo;