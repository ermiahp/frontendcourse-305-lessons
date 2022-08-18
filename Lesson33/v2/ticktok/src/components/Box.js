import React from 'react'; 
import './Box.css';

class Box extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0,
		}
	}

	theyClickedMe(x, y) {
		console.log(x, y);
		this.setState({
			count: this.state.count + 1,
		})
	}

    render(){
        return(
            <div>
                {[0,1,3].map(x => {
                    return(
                        <div className="row">
                            {
								[0,1,3].map(y => {
								return(
										<div 
										className="box"
										 onClick={ () => this.theyClickedMe(x, y)}
										 key={`${x}${y}`}
										 >
											Test
										 </div>
									)
								})
                            }
                        </div>
                    )
                })}
				<div>
					{[...Array(this.state.count)].map(x => <h1>x</h1>)}
				</div>
            </div>
        )
    }
}

export default Box;