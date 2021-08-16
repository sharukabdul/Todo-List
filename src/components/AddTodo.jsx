import React, { useState } from 'react'
import { connect } from 'react-redux'
import VisibilityFilters from './VisibilityFilters'
import './Style.css'

function AddTodo(props) {

    const { addName } = props
    const [todoName, setTodoName] = useState('')
    const [taskDate, setTaskDate] = useState('')


    const handleClick = (e) => {
        if (todoName && taskDate !== '') {
            addName({ todo: todoName, date: new Date(`${taskDate} 23:59:59`) })
            setTodoName('')
            setTaskDate('')
        }
        if(!todoName || !taskDate) {
            alert('All fields are mandatory!')
        }
    }


    const handleLogout = (e) => {
        props.history.push('/')
    }

    return (
        <div>
            <div>
                <h4 className= 'welcome'>Welcome <b>{props.match.params.name}</b></h4>
                <button onClick={() => handleLogout()} className="btn-danger">Logout</button>
            </div>

            <div className= 'todohead'>
                <label><b>Todo Name:&nbsp;</b></label>&nbsp;
                <input value={todoName} onChange={(e) => setTodoName(e.target.value)} type="text" id= "todo"/>&nbsp;&nbsp;&nbsp;
                <label><b>Date of completion: &nbsp;</b></label><input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} /> &nbsp;
                <button onClick={() => handleClick()} className="btn-success"><b>+</b></button>
            </div>
            <VisibilityFilters />
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        addName: (val) => { dispatch({ type: 'ADD_TODO', payload: val }) },
    }

}

export default connect(null, mapDispatchToProps)(AddTodo)
