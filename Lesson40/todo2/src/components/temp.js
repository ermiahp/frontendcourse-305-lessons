import React from 'react';
import { useSelector } from 'react-redux';

const Temp = () => {
    const todos = useSelector((state) => state.todo.numberOfTodoHasBeenCompleted);

    return(
        <h1>{todos}</h1>
    )
}


export default Temp;