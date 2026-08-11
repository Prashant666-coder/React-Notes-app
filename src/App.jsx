import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title, details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  } 

  return (
    <div className='min-h-screen lg:flex bg-black text-white  '>

      <form className='flex lg:w-1/2 flex-col gap-4 items-start p-10' 
      onSubmit={(e) => {
        submitHandler(e)
      }}>
          <h1 className='text-4xl font-bold'>Add Notes</h1>
          <input 
          type="text" 
          value = {title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          placeholder='Enter Notes Heading'
          className='px-5 font-medium w-full py-2 border-2 outline-none rounded'
          /> 

          <textarea 
          type="text" 
          placeholder="Enter Details" 
          className='px-5 font-medium w-full h-32 py-2 border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          />

          <button 
          className='bg-white active:scale-96  w-full text-black px-5 by-2 outline-none rounded'
          >Add Notes
          </button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>

        <h1 className='text-4xl font-bold'>Recent Notes : </h1>

        <div className='flex flex-wrap justify-start gap-5 mt-5'>

          {task.map((elem , idx) => {
            return <div 
            key={idx} 
            className='h-52 w-35 rounded-xl bg-white text-black p-4'
            >
              <h3>{elem.title}</h3>
              <p>{elem.details}</p>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App