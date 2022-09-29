import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

// Test
const modelTest = [
  { id: '1f1720d1-4e90-41c2-b2de-3098700638c3', name: "Hacer las compras", date: "2022-09-28", done: false },
  { id: '1f1720d1-4e90-41c2-b2de-3098700638c4', name: "Limpiar la casa", date: "2022-09-27", done: true },
];

function MainCard() {
  const [newTask, setNewTask] = useState({ name: "", date: "" });
  const [tasksList, setTaskList] = useState(modelTest);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewTask((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.name && newTask.date) {
      const newObjTask = {
        id: uuidv4(),
        name: newTask.name,
        date: newTask.date,
        done: false,
      }
      setTaskList((tasksList) => [...tasksList, newObjTask]);
      setNewTask({ name: "", date: "" })
    }
  };

  const handleTaskDone = (e) => {
    const id = e.target.tagName === 'path' ? e.target.parentNode.parentNode.parentNode.dataset["id"] : e.target.parentNode.parentNode.dataset["id"];
    setTaskList((arr) =>
      arr.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        } else {
          return task
        }
      })
    )
  };

  const handleDeleteTask = (e) => {
    const id = e.target.tagName === 'path' ? e.target.parentNode.parentNode.parentNode.dataset["id"] : e.target.parentNode.parentNode.dataset["id"];
    console.log(id)
    setTaskList((arr) =>
      arr.filter((task) => task.id !== id)
      )
  };

  return (
    <div>
      <h1>ToDo List App <small>📝</small></h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        addTask={addTask}
      />
      <TaskList tasksList={tasksList} handleTaskDone={handleTaskDone} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default MainCard;
