import React from "react";
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';

class TodoV2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
    }
    addOne() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    render() {
        return(
            <div style={{display: 'flex', alignItems: 'center'}}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Icon color="primary">add_circle</Icon>
            </div>
        )
    }
}


export default TodoV2;