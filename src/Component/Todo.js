import React,{Component,PropTypes} from 'react'

export default class Todo extends Component{
    render (){
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.Completed ? 'line-through' : 'none',
                    cursor: this.props.Completed ? 'default' : 'pointer'
                }}
                >
                {this.props.text}
            </li>
        )
    }
}
Todo.proptTypes={
    onClick: PropTypes.func.isRequired,
    Completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
