import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { useState } from 'react';
import './Style.css'



function TodoList(props) {

    const { item, index, markComplete, deleteTodo } = props

    const [showModal, setShowModal] = useState(false)

    const handleChange = (index) => {
        markComplete(index)

    }
    const handleDelete = (index) => {
        deleteTodo(index)
    }

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }


    return (
        <div>
            <div style={ item.todoDate > new Date() ? { border: "2px solid blue", marginTop: "10px", padding: "5px", width: '70%', marginLeft: "15%" } : { border: "2px solid red", marginTop: "5px", padding: "5px", width: '70%', marginLeft: "15%" }}>
                <input type="checkbox" checked={item.isCompleted} onChange={() => handleChange(index)} id="checkbox" />
                <h6 onClick={() => handleOpenModal()} id="ExpandIcon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></h6>
                <div>
                    &nbsp;<span id="todoDisplay" style={item.isCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" }} >{item.todoName} &nbsp; {item.todoDate > new Date() ? '' : <span style={{ color: 'red' }}>(Pending)</span>}</span>
                    <Modal isOpen={showModal} contentLabel="onRequestClose Example" onRequestClose={() => handleCloseModal()} className="Modal" overlayClassName="Overlay" ariaHideApp={false}>
                        <>
                            <button className= 'btn btn-danger' id= 'buttonDel' onClick={() => handleCloseModal()}>X</button>
                            <div style={{ margin: "10px 10px 10px 20px" }}>
                                <b>Todo Description: </b> {item.todoName} <br /> <br />
                                <b>Todo Expected Date of completion: </b> {item.todoDate.toString()} <br /> <br />
                                <b>Todo Status: </b> {item.todoDate > new Date() ? 'Active' : <span style={{ color: 'red' }}>(Pending)</span>}
                            </div>
                        </>
                    </Modal>
                    <h6 onClick={() => handleDelete(index)} id="DeleteIcon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></h6>
                    {/* <svg className= 'edit' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> */}
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {

        markComplete: (val) => { dispatch({ type: 'MARK_COMPLETE', payload: val }) },
        deleteTodo: (val) => { dispatch({ type: 'DELETE_TODO', payload: val }) }

    }

}

export default connect(null, mapDispatchToProps)(TodoList)
