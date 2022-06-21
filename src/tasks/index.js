import "./tasks.css";

const Tasks = (props) => (
  <fieldset className="lista_fieldset">
    <legend className="zadania_legend">Lista zadań</legend>
    <ul className="zadania_list">
      {props.tasks.map((task) => (
        <>
          <label className="zadania_label">
            <li className="zadania_item zadania_item--button">
              <button className="zadania_done">Zrobione</button>
            </li>
          </label>
          <li
            className={`"zadania_item" ${
              task.done ? 'style="text-decoration: line-through"' : ""
            }`}
          >
            ${task.content}
          </li>
          <label className="zadania_label">
            <li className="zadania_item zadania_item--delete">
              <button className="zadania_delete">Usuń</button>
            </li>
          </label>
        </>
      ))}
    </ul>
  </fieldset>
);

export default Tasks;
