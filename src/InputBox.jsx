import React from 'react'


function InputBox(props) {
  return (
    <div className='flex flex-row gap-2'>
        <input
        className='rounded-md bg-zinc-300 p-2'
        type="text"
        value={props.inText}
        onChange={props.onchange}
        placeholder="  Add text here... "
       />
       <button onClick={props.submit} className='bg-zinc-800 text-slate-200 hover:bg-green-700 border-none rounded-md py-2 px-4'>Submit</button>
    </div>
  )
}

export default InputBox