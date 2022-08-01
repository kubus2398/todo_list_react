import "./tasks.css";
import { useState } from "react";
import { Button } from "../buttons/index.js";
import { Fragment } from "react";

const Tasks = ({ tasks }) => {
  const handleDelete = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    console.log(index, tasks);
  };

  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <fieldset className="lista_fieldset">
      <legend className="zadania_legend">Lista zadań</legend>
      <ul className="zadania_list">
        {tasks.map((task) => (
          <Fragment key={task.id}>
            <label className="zadania_label">
              <li className="zadania_item zadania_item--button">
                <Button classes="zadania_done" buttonContent="Zrobione" />
              </li>
            </label>
            <li
              className={`zadania_item" `}
              style={task.done ? { "text-decoration": "line-through" } : {}}
            >
              {task.content}
            </li>
            <label className="zadania_label">
              <li className="zadania_item zadania_item--delete">
                <Button
                  classes="zadania_delete"
                  buttonContent="Usuń"
                  handleClick={() => handleDelete(task.id)}
                />
              </li>
            </label>
            <Button
              classes="zadania_delete"
              buttonContent="Ukryj"
              handleClick={() => hideDone(toggleHideDone)}
            />
          </Fragment>
        ))}
      </ul>
    </fieldset>
  );
};

export default Tasks;
