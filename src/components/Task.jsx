import React from "react";
import { BsFillTrashFill, BsSquare, BsCheckSquare } from "react-icons/bs";

function Task({ task, handleTaskDone, handleDeleteTask }) {
  return (
    <tr data-id={task.id} className={task.done ? "task-done task-card": "task-card"}>
      <td>{task.done ? <BsCheckSquare onClick={handleTaskDone} className="pointer"/> : <BsSquare onClick={handleTaskDone} className="pointer"/>}</td>
      <td>{task.name}</td>
      <td>{task.date}</td>
      <td>
        <BsFillTrashFill onClick={handleDeleteTask} className="red-color pointer" />
      </td>
    </tr>
  );
}

export default Task;
