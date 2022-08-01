import "./form.css";
import { useState } from "react";

const Form = ({ addNewTask, placeholder }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent === "Wpisz treść zadania") {
      setNewTaskContent("Wpisz treść zadania");
    }
    if (newTaskContent !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
  };

  return (
    <form className="zadania_form" onSubmit={onFormSubmit}>
      <fieldset className="zadania_fieldset">
        <legend className="zadania_legend">Dodaj zadanie</legend>
        <input
          value={newTaskContent}
          className="zadania_input"
          placeholder="Wpisz treść zadania"
          onChange={({ target }) => setNewTaskContent(target.value)}
        />
        <button className="zadania_dodaj">Dodaj zadanie</button>
      </fieldset>
    </form>
  );
};

export default Form;
