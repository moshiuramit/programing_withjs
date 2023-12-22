
import {useState} from "react";

const ToDo = props =>(
    <tr>
        <td><label>{props.id}</label> </td>
        <td><input /></td>
        <td><label>{props.createdAt}</label></td>
    </tr>
);

function ReverseTodo( ) {
    const [todos, setTodos] = useState([{
        id: 'todo1',
        createdAt: '18:00'
        },{
        id: 'todo2',
        createdAt: '20:30'
    }]);
    const reverseOrder= () => {
        setTodos([...todos].reverse());
    }
    // Although item indexes can be used as keys, using indexes as keys can create problems if the order of your list of items is prone to change and can negatively affect performance. 
    //Using unique and stable identifiers, such as item IDs, is recommended instead.  
    return (
        <div>
            <button onClick={reverseOrder}>Reverse Order</button>
            <table>
                <tbody>
                    {todos.map((todo, index)=> (
                        <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
  

export default ReverseTodo;
  