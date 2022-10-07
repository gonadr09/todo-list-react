import React from "react";
import useToDo from "../hooks/useToDo";
import useForm from "../hooks/useForm";
import formModel from "../helpers/formModel";
import testModel from "../helpers/testModel";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const MainCard = () => {
  const { tasksList, setTaskList, handleTaskDone, handleDeleteTask } = useToDo(testModel);
  const { newTask, handleChange, handleSubmit } = useForm(formModel, tasksList, setTaskList);

  return (
    <div>
      <h1>
        ToDo List App <small>📝</small>
      </h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TaskList
        tasksList={tasksList}
        handleTaskDone={handleTaskDone}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default MainCard;
