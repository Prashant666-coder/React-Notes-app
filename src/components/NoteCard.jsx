import React from 'react'

const NoteCard = ({ task, delNote }) => {
  return (
    <div>
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start gap-5 mt-5">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-52 w-38 flex flex-col items-start relative rounded-xl bg-cover text-black pt-6 pb-5 px-4 bg-[url('/src/assets/notes.png')]"
              >
                <h3 className="leading-tight text-lg font-bold">
                  {elem.title}
                </h3>

                <p className="mt-2 leading-tight font-medium text-gray-500">
                  {elem.details}
                </p>

                <button
                  onClick={() => delNote(idx)}
                  className="w-full bg-red-600 py-1 text-white rounded font-bold cursor-pointer text-xs mt-auto"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default NoteCard