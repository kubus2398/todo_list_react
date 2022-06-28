import "./tasks.css";
import { Button } from "../buttons/index.js";

export const Tasks = ({ tasks }) => {
  const handleDelete = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    console.log(index, tasks);
  };

  return (
    <fieldset className="zadaniaFieldset">
      <legend className="zadaniaLegend">Lista Zadań</legend>{" "}
      <div className="tasksBox">
        {tasks.map((task) => (
          <>
            <div className="taskWrapper" key={task.id}>
              <p className="zadaniaButton">
                <Button classes="zadania_done" buttonContent="Zrobione" />
              </p>

              <p
                className={`zadaniaText`}
                style={task.done ? { "text-decoration": "line-through" } : {}}
              >
                {task.content}
              </p>
              <p className="zadaniaButton">
                <Button
                  classes="zadania_delete"
                  buttonContent="Usuń"
                  handleClick={() => handleDelete(task.id)}
                />
              </p>
            </div>
            <hr />
          </>
        ))}
      </div>
    </fieldset>
  );
};
