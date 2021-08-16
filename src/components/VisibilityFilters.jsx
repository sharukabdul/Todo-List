import React, { useState } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'

function VisibilityFilters(props) {

    const { item } = props
    const [filterKey, setFilterKey] = useState('all')

    return (

        <div>
            {item.length > 0 &&
                <div className= 'filters'>
                    <label>Filter Todo's:&nbsp;
                        <select name="filter" onChange={(evt) => setFilterKey(evt.target.value)}>
                            <option value="all">All</option>
                            <option value="completed" >Completed</option>
                            <option value="incomplete">Incomplete</option>
                        </select>
                    </label>
                </div>
            }

            {filterKey === "all" && item.filter(item => item.isCompleted === true || item.isCompleted === false).map((item, index) =>
                <TodoList item={item} key={index} index={index}/>)}

            {filterKey === "completed" && item.filter(item => item.isCompleted === true).map((item, index) =>
                <TodoList item={item} key={index} index={index}/>)}

            {filterKey === "incomplete" && item.filter(item => item.isCompleted === false).map((item, index) =>
                <TodoList item={item} key={index} index={index}/>)}

        </div>

    )
}

const mapStateToProps = state => {
    return {
        item: state.data
    }
}

export default connect(mapStateToProps, null)(VisibilityFilters)
