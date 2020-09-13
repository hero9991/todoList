import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [listData, setListData] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredState, setFilteredState] = useState([])

  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]))
      } else setListData(JSON.parse(localStorage.getItem('todos')))
    }
    getLocalTodos()
  }, [])
  
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredState(listData.filter(el => el.status === true))
          break
        case 'uncompleted':
          setFilteredState(listData.filter(el => el.status === false))
          break
        case 'all':
          setFilteredState(listData)
          break
        default:
          break
      }
    }
    const saveLocalTodos = () => {  
      localStorage.setItem('todos', JSON.stringify(listData))
    }
    filterHandler()
    saveLocalTodos()
  }, [status, listData])
  
  return (
    <div className='App'>
      <header>
        <h1>ToDo LiSt</h1>
      </header>
      <Form inputValue={inputValue} setInputValue={setInputValue}
        listData={listData} setListData={setListData}
        setStatus={setStatus} />
      <TodoList listData={listData} setListData={setListData} filteredState={filteredState} />
    </div>
  );
}

export default App;
