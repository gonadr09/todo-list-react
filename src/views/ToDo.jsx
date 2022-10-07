import React from "react";
import useToDo from "../hooks/useToDo";
import useForm from "../hooks/useForm";
import newTaskForm from "../helpers/newTaskForm";
import testTasksModel from "../services/testTasksModel";
import NewTask from "../components/NewTask";
import TaskList from "../components/TaskList";

const MainCard = () => {
  const { tasksList, setTaskList, handleTaskDone, handleDeleteTask } = useToDo(testTasksModel);
  const { newTask, handleChange, handleSubmit } = useForm(newTaskForm, tasksList, setTaskList);

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
