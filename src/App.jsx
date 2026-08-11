import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
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
          placeholder='Enter Notes Heading'
          className='px-5 font-medium w-full py-2 border-2 outline-none rounded'
          /> 

          <textarea 
          type="text" 
          placeholder="Enter Details" 
          className='px-5 font-medium w-full h-32 py-2 border-2 outline-none rounded'
          />

          <button 
          className='bg-white w-full text-black px-5 by-2 outline-none rounded'
          >Add Notes
          </button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>

      <h1 className='text-4xl font-bold'>Recent Notes : </h1>

      <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
      </div>
        
      </div>
    </div>
  )
}

export default App