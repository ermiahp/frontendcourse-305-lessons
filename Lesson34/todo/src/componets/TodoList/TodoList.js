import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';



const TodoList = ({todo, index , handleToggle, removeTodo}) => {
    return(
        <ListItem
        key={index}
        role="listitem"
        button
        >
            <ListItemIcon>
                <Checkbox
                checked={todo.checked}
                tabIndex={-1}
                disableRipple
                onClick={() => handleToggle(index)}
                />
                
            </ListItemIcon>
            <ListItemText primary={todo.value} style={{color: 'black'}}/>
            <Icon 
                style={{cursor: 'pointer'}} 
                color="error"
                onClick={() => removeTodo(index)}
            >delete</Icon>
        </ListItem>
    )
}

export default TodoList;