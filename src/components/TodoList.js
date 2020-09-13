import React from 'react'
import Todo from './Todo'

const TodoList = ({ listData, setListData, filteredState}) => {
    return (
        <div>
            <ul>
                {filteredState.map((el) => <Todo key={el.id} value={el.value}
                    listData={listData} todo={el} setListData={setListData} />)}
            </ul>
        </div>
    )
}

export default TodoList