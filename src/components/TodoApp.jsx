import React from 'react'
import { createStore } from "redux"
import { Provider } from 'react-redux'
import VisibilityFilters from './VisibilityFilters'
import reducer from '../Reducers/reducer'


const initValue = {
    data: [
        { todoName: "hi", isCompleted: false },
        { todoName: "bye", isCompleted: false },
        { todoName: "why", isCompleted: true }
    ]
}

const store = createStore(reducer, initValue)


function TodoApp(props) {
    console.log(props.match.params, "username")

    return (
        <div>
            <Provider store={store}>
                <VisibilityFilters {...props}/>
            </Provider>

        </div>
    )
}

export default TodoApp
