import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, {value: todo, checked: false}]);
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
                label="Outlined" variant="outlined" />
                <Icon 
                    style={{cursor: 'pointer'}} 
                    color="primary" 
                    onClick={addTodo}
                >add_circle</Icon>
            </div>
            <List dense component="div" role="list" className="lists">
                {todos.map((tempTodo, index) => {
                    return(
                        <ListItem
                        key={index}
                        role="listitem"
                        button
                        >
                            <ListItemIcon>
                                <Checkbox
                                checked={tempTodo.checked}
                                tabIndex={-1}
                                disableRipple
                                onClick={() => handleToggle(index)}
                                />
                                
                            </ListItemIcon>
                            <ListItemText primary={tempTodo.value} style={{color: 'black'}}/>
                            <Icon 
                                style={{cursor: 'pointer'}} 
                                color="error"
                                onClick={() => removeTodo(index)}
                            >delete</Icon>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default Todo;