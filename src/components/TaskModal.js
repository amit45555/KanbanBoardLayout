import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";

const TaskModal = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTask({ id: uuidv4(), title, description }));
    setTitle("");
    setDescription("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Create Task</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Add Task</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskModal;
