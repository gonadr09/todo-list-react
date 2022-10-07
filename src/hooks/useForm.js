import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useForm = (form, state, setState) => {
  const [newTask, setNewTask] = useState(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const createTask = () => {
    return {
      id: uuidv4(),
      name: newTask.name,
      date: newTask.date,
      done: false,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskToAdd = createTask();
    setState([...state, taskToAdd]);
    setNewTask({ name: "", date: "" });
  };

  return { newTask, handleChange, handleSubmit };
};

export default useForm;
