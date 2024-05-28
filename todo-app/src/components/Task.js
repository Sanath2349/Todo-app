import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, deleteTask } from "../redux/actions";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    if (newText.trim()) {
      dispatch(editTask(task.id, { ...task, text: newText }));
      setIsEditing(false);
    }
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEditTask}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
