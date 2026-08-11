import React from 'react'

const AddNote = ({ title, setTitle, details, setDetails, submitHandler }) => {
  return (
    <div>
        <form
        className="flex w-full flex-col gap-4 items-start p-10"
        onSubmit={submitHandler}
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Notes Heading"
          className="px-5 font-medium w-full py-2 border-2 outline-none rounded"
        />

        <textarea
          placeholder="Enter Details"
          className="px-5 font-medium w-full h-32 py-2 border-2 outline-none rounded"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="bg-black active:scale-96 cursor-pointer w-full text-white px-5 py-2 outline-none rounded">
          Add Notes
        </button>
      </form>
    </div>
  )
}

export default AddNote