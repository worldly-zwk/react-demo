import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        }
    }
    render (){
        return (
            <h1>{this.state.date}</h1>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("root")
)
