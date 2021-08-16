import React from 'react'
import './Style.css'


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className= 'todolist'>
                <h1>Todo List</h1>
                <h6>React-Redux</h6>
            </div>
        )
    }
}

export default Header