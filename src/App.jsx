import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex items-start p-10 justify-between'>
        <div className='flex w-1/2 items-start flex-col gap-5'>
          <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 border-2 rounded'
          /> 

          <input 
          type="text" 
          placeholder="Enter Details" 
          className='px-5 w-full h-20 py-2 border-2 rounded'
          />

          <button 
          className='bg-white w-full text-black px-5 by-2 rounded'
          >Add Notes
          </button>

          </div>

          <img 
          className='w-50 rotate-y-180'
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" 
          alt="" srcset="" 
          />
      </form>
    </div>
  )
}

export default App