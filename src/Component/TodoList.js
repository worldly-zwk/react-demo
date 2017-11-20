import React,{Component} from 'react'
import Todo from './Todo'

export default class TodoList extends Component{
    render (){
        return (
            <ul>
                {this.props.todos.map((val,ind)=>
                    <Todo {...val}
                        key={ind}
                        onClick={()=>this.props.onTodoClick(ind)} />
                )}
            </ul>
        )
    }
}
