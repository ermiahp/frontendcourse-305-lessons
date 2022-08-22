import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';

import './Todo.css';
import TodoList from '../TodoList/TodoList';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, {value: todo, checked: false}]);
        setTodo('');
    }

    const handleToggle = (index) => {
        let temp = todos;
        temp[index].checked = !temp[index].checked;
        setTodos([...temp])
    }

    const removeTodo = (index) => {
        let temp = todos;
        temp.splice(index, 1);
        setTodos([...temp]);
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div  style={{display: 'flex', alignItems: 'center'}}>
                <TextField  onChange={(event) => setTodo(event.target.value)}
                label="Outlined" variant="outlined" value={todo}/>
                <Icon 
                    style={{cursor: 'pointer'}} 
                    color="primary" 
                    onClick={addTodo}
                >add_circle</Icon>
            </div>
            <List dense component="div" role="list" className="lists">
                {todos.map((tempTodo, index) => {
                    return(
                        <TodoList 
                            index={index} 
                            todo={tempTodo} 
                            handleToggle={handleToggle} 
                            removeTodo={removeTodo}
                        />
                    )
                })}
            </List>
        </div>
    )
}

export default Todo;