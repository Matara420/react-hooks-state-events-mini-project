// src/components/TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} onDelete={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;