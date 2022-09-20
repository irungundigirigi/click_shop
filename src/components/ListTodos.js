import React, {useEffect, useState} from 'react'

export default function ListTodos() {
    const[todos, setTodos] = useState([])

    //Delete function
    const onDelete = async (id) => {
        try {
            
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,
            {
                method:"DELETE"
            })
            console.log("ee")
            
        } catch (err) {
            console.error(err.message);
            
        }
    }


    const getTodos = async () => {
        try {
            const response = await fetch ("http://localhost:5000/todos")
            const data = await response.json();
            console.log(data)
            setTodos(data)
        } catch (err) {
            console.error(err.message);
            
        }
    }
    useEffect(() => {
        getTodos();
        
    },[]
    );

  return (
    <div>
    <table class="table mt-5 text-center" >
        <thead>
            <tr>
                <th>Task</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><button className="btn btn-progress ml-2">Edit</button></td>
                <td><button className="btn btn-danger ml-2" onClick={() => onDelete(todo.todo_id)}>Delete</button></td>
            </tr>
            ))}    
        </tbody>
    </table>
    </div>
  )
}
