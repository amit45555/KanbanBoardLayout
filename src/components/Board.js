import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import Column from "./Column";
import SearchBar from "./SearchBar";
import TaskModal from "./TaskModal";
import { moveTask } from "../redux/taskSlice";
import "./index.css";

const Board = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const searchQuery = useSelector((state) => state.tasks.searchQuery);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    dispatch(
      moveTask({
        source: source.droppableId,
        destination: destination.droppableId,
        taskId: result.draggableId,
      })
    );
  };

  const filteredTasks = (columnTasks) =>
    columnTasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="board">
      <SearchBar />
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.keys(tasks).map((columnId) => (
          <Column
            key={columnId}
            columnId={columnId}
            tasks={filteredTasks(tasks[columnId])}
            title={columnId}
          />
        ))}
      </DragDropContext>
      <button className="add-task-btn" onClick={() => setModalOpen(true)}>
        +
      </button>
      <TaskModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Board;
