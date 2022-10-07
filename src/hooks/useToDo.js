import { useState } from "react";

const useToDo = (model=[]) => {

  const [tasksList, setTaskList] = useState(model);

  const handleTaskDone = (id) => {
    setTaskList(
      tasksList.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      })
    );
  };

  const handleDeleteTask = (id) => {
    setTaskList(tasksList.filter((task) => task.id !== id));
  };

  return { tasksList, setTaskList, handleTaskDone, handleDeleteTask };
};

export default useToDo;
