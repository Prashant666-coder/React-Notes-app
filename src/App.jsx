import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    setTitle("");
    setDetails("");
  };

  const delNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen lg:flex bg-gray-200 text-black">
      <div className="lg:w-1/2">
        <AddNote
          title={title}
          setTitle={setTitle}
          details={details}
          setDetails={setDetails}
          submitHandler={submitHandler}
        />
      </div>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <NoteCard task={task} delNote={delNote} />
      </div>
    </div>
  );
};

export default App;
