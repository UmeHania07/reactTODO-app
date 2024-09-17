import React, { useState } from 'react'

function TodoInput(props) {
  const [inputItem, setInputItem] = useState('')

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputItem)
      setInputItem("");
    }
  }
  return (
    <div className='input-container'>
      <input type="text" className='input-box-todo'
        placeholder='Enter Your Items🔥...'
        value={inputItem}
        onChange={e => {
          setInputItem(e.target.value)
        }} onKeyDown={handleEnterPress}/>

      <button className='add-btn' onClick={() => {
        props.addList(inputItem)
        setInputItem(" ");
      }}>+</button>

      {/* <div className='lol'> {inputItem}  </div> */}




    </div>
  )
}

export default TodoInput
