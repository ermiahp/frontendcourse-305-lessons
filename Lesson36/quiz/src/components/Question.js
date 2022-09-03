import React from "react";
import axios from "axios";

class Question extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div dangerouslySetInnerHTML={{__html: this.props.title}}/>
                <label for="correct">Correct</label>
                <input  value={'correct'} type="radio" id="correct"/>
                <label for="wrong">Wrong</label>
                <input  value={'wrong'} type="radio" id="wrong"/>
            </div>
        )
    }
};


export default Question;