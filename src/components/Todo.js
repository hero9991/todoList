import React from 'react'


const Todo = ({ value, listData, setListData, todo }) => {
  
    const deleteTodo = () => {
        setListData(listData.filter((el) => el.id !== todo.id))
    }
    const completeTodo = () => {
        setListData(listData.map(el => el.id === todo.id ? {...el, status: !el.status} : el))
    }
    
    return (
        <div className='todo'>
            <li className={todo.status? 'completed':''}>{value}</li>
            <div>
                <button onClick={completeTodo}>complete</button>
                <button onClick={deleteTodo}>delete</button>
            </div>
        </div>
    )
}

export default Todo