import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        className="task-card"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <h3>{task.title}</h3>
        <p>{task.description.slice(0, 50)}...</p>
      </div>
    )}
  </Draggable>
);

export default TaskCard;
