import React from "react";
import Task from "./Task";

const TaskList = ({ tasksList, handleTaskDone, handleDeleteTask }) => {
  let renderTask;
  if (tasksList.length > 0) {
    renderTask = tasksList.map((task) => (
      <Task
        key={task.id}
        task={task}
        handleTaskDone={handleTaskDone}
        handleDeleteTask={handleDeleteTask}
      />
    ));
  } else {
    renderTask = (
      <tr>
        <td>
          <small>No hay tareas pendientes 😎</small>
        </td>
      </tr>
    );
  }

  return (
    <div className="task-list">
      <h3>Lista de tareas:</h3>
      <table>
        <tbody>{renderTask}</tbody>
      </table>
    </div>
  );
}

export default TaskList;
