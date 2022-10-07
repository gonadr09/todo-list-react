import React from "react";
import { BsFillTrashFill, BsSquare, BsCheckSquare } from "react-icons/bs";

const Task = ({ task, handleTaskDone, handleDeleteTask }) => {
  return (
    <tr className={task.done ? "task-done task-card" : "task-card"}>
      <td>
        <button onClick={() => handleTaskDone(task.id)} className="checkbox">
          {task.done ? <BsCheckSquare /> : <BsSquare />}
        </button>
      </td>
      <td>{task.name}</td>
      <td>{task.date}</td>
      <td>
        <BsFillTrashFill
          onClick={() => handleDeleteTask(task.id)}
          className="red-color pointer"
        />
      </td>
    </tr>
  );
};

export default Task;
