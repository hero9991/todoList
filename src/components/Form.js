import React from 'react'


const Form = ({ inputValue, setInputValue, listData, setListData, setStatus }) => {

    const buttonHandler = (e) =>{
        e.preventDefault();
        setListData([...listData, { value: inputValue, status: false, id: Math.random() }]);
        setInputValue('')
    }
    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    
        return (
        <form>
            <div className='choose'>
                <select onChange={statusHandler}>
                    <option value='all'>all</option>
                    <option valut='completed'>completed</option>
                    <option valut='uncompleted'>uncompleted</option>
                </select>
            </div>
            <input onChange={inputHandler} value={inputValue}></input>
            <button onClick={buttonHandler}>add</button>
        </form >
    )
}

export default Form;