import React from "react";
import Task from "./Task";

function TaskList({ tasksList, handleTaskDone, handleDeleteTask }) {
  return (
    <div className="task-list">
      <h3>Lista de tareas:</h3>
      <table>
        <tbody>
          {tasksList.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleTaskDone={handleTaskDone}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
