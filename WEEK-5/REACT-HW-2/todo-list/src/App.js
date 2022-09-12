import React, { useEffect, useState } from 'react';
import './App.css';
import {ReactComponent as DeleteIcon} from './assets/DeleteIcon.svg'
import {ReactComponent as EditIcon} from './assets/EditIcon.svg'
import {ReactComponent as SaveIcon} from './assets/SaveIcon.svg'

function App() {
const [todoList, setTodoList] = useState ([])

const [todo,setTodo] = useState ('')

const addTodo = (e) => {
e.preventDefault()
setTodoList(prevTodoList => [...prevTodoList,todo])
setTodo('')
}

useEffect ( () => {
console.log(todoList);
},[todoList]
)

  return (

    <div className="App">
      <div className='container'>
      <header className='header'>
        <h1>Todo List </h1>
      </header>
      <div className='d-flex justify-content-center align-item-center'>
      <form>
        <input 
        property='newTodo' 
        className='new-todo' 
        placeholder='What needs to be done?'
        value={todo} 
        autoFocus
        //input'un içindeki kısmı almak için eventinin targetinin value'sına ihtiyacımız oluyor.
        //içine girdiğimiz değere eşitlememiz gerektiği için setTodo içine alıyoruz
        onChange={(e) =>setTodo(e.target.value) }>
            
        </input>
        <button 
        className='btn'
        onClick={(e)=>addTodo(e)}
        >Add
        </button>
      </form>
      </div>
      <div>
        {todoList.map((todoItem,index) => 
          <ul>
            <li className='d-flex w-75 justify-content-center' key={index} >
              <div className='checkbox-item '>
                <input property='done' type={'checkbox'}></input> 
                <label className='todo-item-label ml-4'>{todoItem}</label> 
              </div>
              <div className='todo-item-buttons ml-auto'>
              <EditIcon width={25} height={25} style={{cursor:'pointer'}} className="mr-2"/>
              <SaveIcon width={25} height={25} style={{cursor:'pointer'}} className="mr-2"/>
              <DeleteIcon width={25} height={25} style={{cursor:'pointer'}} className="mr-2"/>
              </div>
            </li>
          </ul>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
