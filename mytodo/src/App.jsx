import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './Component/TodoInput'
import TodoList from './Component/TodoList'

function App() {
  const [listTodo, setListTodo] = useState([])
  //mai jo bhi likho gi input mai ho yahan akey list mai jo ek arrey hn is mai save hoga
  let addList = (inputmsg) => {
    setListTodo([...listTodo, inputmsg])
    //iska mtlb h k mai jo bhi item update kro ho spread hojaye phir new item enter ho
  }

  const deleteListItem = (key) => {
     let newListTodo = [...listTodo];
     newListTodo.splice(key ,1)
     setListTodo([...newListTodo])
  }

  return (
    <>
      <div className='main-container'>
        <div className="center-container">

          <TodoInput addList={addList} />

          <h1 className='app-heading'>TODO📝</h1>
          <hr />

          {listTodo.map((listitem, i) => {
            return (
              <TodoList key={i} index={i} item={listitem} deleteitem={deleteListItem}/>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default App
