import React,{Component} from 'react'
import {connect} from 'react-redux'

import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from './store/actions'
import AddTodo from './Component/AddTodo'
import TodoList from './Component/TodoList'
import Footer from './Component/Footer'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        }
    }
    render (){
        var todos=[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
        }];
        const {dispatch,visibleTodos,visibilityFilter}=this.props;
        return (
            <div>
                <AddTodo onAddClick={text=>dispatch(addTodo(text))}></AddTodo>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index=>dispatch(completeTodo(index))}
                 />
                 <Footer filter={visibilityFilter} onFilterChange={filter=>dispatch(setVisibilityFilter(filter))} />
            </div>
        )
    }
}

function selectTodos(todos,filter){
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed);
    }
}

function select(state){
    return {
        visibleTodos:selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(select)(App)
