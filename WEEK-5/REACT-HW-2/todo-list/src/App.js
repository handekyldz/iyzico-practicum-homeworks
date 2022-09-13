import React, { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as DeleteIcon } from './assets/DeleteIcon.svg'
import { ReactComponent as EditIcon } from './assets/EditIcon.svg'
import { ReactComponent as SaveIcon } from './assets/SaveIcon.svg'

function App() {
  const [todoList, setTodoList] = useState([])



  const [newTodo, setNewTodo] = useState ('')

  const [editedTodo, setEditedTodo] = useState ('')

  const addTodo = (e) => {
    e.preventDefault()
    if (newTodo !=="") { setTodoList(prevTodoList => [...prevTodoList, { id: uuidv4(), todo: newTodo, isEditable: false, isCompleted: false }])
    setNewTodo('')}
  }

  useEffect(() => {
  }, [todoList]
  )

  const completeTodo = (id) => {
    setTodoList(prevTodoList => prevTodoList.map(
      todoItem => todoItem.id === id ? { ...todoItem, isCompleted: !todoItem.isCompleted } : todoItem))
  }

  const editTodo = (id, oldTodo ) => {
    setTodoList(prevTodoList => prevTodoList.map(
      todoItem => todoItem.id === id ? { ...todoItem, isEditable: !todoItem.isEditable,  todo: editedTodo} : todoItem))
  }

   const deleteTodo = (id) => {
  setTodoList(prevTodoList => prevTodoList.filter(
    todoItem => todoItem.id !== id 
  ))
  }

  return (

    <div className="App">
      <div className='container'>
        <header className='header'>
          <h1 className='header-txt'>Todo List </h1>
        </header>
        <div className='form-wrapper mt-4'>
          <form>
            <input
              property='newTodo'
              className='new-todo'
              placeholder='What needs to be done?'
              value={newTodo}
              autoFocus
              //input'un içindeki kısmı almak için eventinin targetinin value'sına ihtiyacımız oluyor.
              //içine girdiğimiz değere eşitlememiz gerektiği için setTodo içine alıyoruz
              onChange={(e) => setNewTodo(e.target.value)}>

            </input>
            <button
              className='add-button'
              onClick={(e) => addTodo(e)}
            >Add
            </button>
          </form>
        </div>
        <div>
          <ul>
            {todoList.map((todoItem) =>
              <div className='item-container'>
              <li className='w-75 justify-content-center todo-li' key={todoItem.id} >
                <div className='checkbox-item '>
                  <input
                  className='checkbox'
                    property='done'
                    type={'checkbox'}
                    value={todoItem.isCompleted}
                    onChange={() => completeTodo(todoItem.id)}
                  ></input>
                  {
                  !todoItem.isEditable ? 
                  <label className={`${todoItem.isCompleted ? 'text-decoration-line-through': ''} todo-label`}>{todoItem.todo}</label> :
                  <input
                  property='newTodo'
                  className='edit-todo'
                  value={editedTodo}
                  autoFocus
                  onChange={(e) => setEditedTodo(e.target.value)}></input>
                }
                </div>
                <div className='todo-item-buttons'> 
                 {
                  !todoItem.isEditable===true ?
                  <EditIcon width={25} 
                  height={25} 
                  style={{ cursor: 'pointer' }} 
                  className="edit-icon" 
                  onClick={ () => editTodo( todoItem.id, todoItem.todo ) }/>  :
                  <SaveIcon 
                  width={25} 
                  height={25} 
                  style={{ cursor: 'pointer' }} 
                  className="save-icon" 
                  onClick={ () => editTodo( todoItem.id, todoItem.todo ) }/> 
                  }
                  <DeleteIcon 
                  width={25} 
                  height={25} 
                  style={{ cursor: 'pointer' }} 
                  className="edit-icon  " 
                  onClick = {() => deleteTodo(todoItem.id)}/>
                </div>
              </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
