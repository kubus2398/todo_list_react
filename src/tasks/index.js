import "./tasks.css";
import Button from "../buttons/index.js";

const Tasks = (props) => (
  <fieldset className="lista_fieldset">
    <legend className="zadania_legend">Lista zadań</legend>
    <ul className="zadania_list">
      {props.tasks.map((task) => (
        <>
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
              <Button classes="zadania_delete" buttonContent="Usuń" />
            </li>
          </label>
        </>
      ))}
    </ul>
  </fieldset>
);

export default Tasks;
