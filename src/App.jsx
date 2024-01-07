
import React from 'react';

import InputBox from './InputBox.jsx';
import Output from './Output.jsx';
import { useState } from 'react'

let global = 0;
function App() {
  
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  
  const handleInputChange = (e) => {
      setText(e.target.value);
  };

  const click = () => {
      if (text === '') {
        return
      }
      setData(prevData => {
        setText('')
        return [ ...prevData, {data : text, id : global++}]
      })
  }
  function deleteClick(idItem) {
    setData(pre => pre.filter(item => item.id !== idItem))
    // setData(prevSquares => {
  }
  return (
    <div className='App h-screen flex flex-col items-center justify-center gap-2 bg-zinc-500'>
      <InputBox 
        inText = {text}
        onchange = {handleInputChange}
        submit = {click}
      />
      {data.map((item, index) => (
          <Output 
            key={item.id}
            id={item.id}
            name = {item.data}
            delete = {deleteClick}
          />
        ))}
    </div>
   
  );
}

export default App;
