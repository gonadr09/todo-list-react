import React from "react";

function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <div className="new-task">
      <h3>Nueva tarea:</h3>
      <form className="inputs-box" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={newTask.name}
          placeholder="Nombre de la tarea"
          autoComplete="off"
          required
        ></input>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={newTask.date}
          placeholder="dd/mm/aaaa"
          required
        ></input>

        <button type="submit">
          Añadir +
        </button>
      </form>
      <p className="warning">
        *Completá ambos campos para agregar una nueva tarea
      </p>
    </div>
  );
}

export default NewTask;
