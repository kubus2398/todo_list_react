import "./tasks.css";
import { Fragment, useState } from "react";
import { Button } from "../buttons/index.js";

export const Tasks = ({ tasks, removeTask, toggleTaskDone, toggleDoneAll }) => {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(!hideDone);
  };

  const filteredTasks = tasks.filter((task) =>
    hideDone ? task.done === false : true
  );

  return (
    <fieldset className="zadaniaFieldset">
      <legend className="zadaniaLegend">Lista Zadań</legend>{" "}
      <div className="tasksBox">
        <div className="zadaniaMainButtons">
          <Button
            classes="zadaniaToggleHide"
            buttonContent="Ukryj zrobione"
            handleClick={() => toggleHideDone()}
          />
          <Button
            classes="zadaniaDoneAll"
            buttonContent="Ukończ wszystkie"
            handleClick={() => toggleDoneAll()}
          />
        </div>
        {filteredTasks.map((task) => (
          <Fragment key={task.id}>
            <div className="taskWrapper">
              <p className="zadaniaButton">
                <Button
                  classes="zadania_done"
                  buttonContent="Zrobione"
                  handleClick={() => toggleTaskDone(task.id)}
                />
              </p>

              <p
                className={`zadaniaText`}
                style={task.done ? { textDecoration: "line-through" } : {}}
              >
                {task.content}
              </p>
              <p className="zadaniaButton">
                <Button
                  classes="zadania_delete"
                  buttonContent="Usuń"
                  handleClick={() => removeTask(task.id)}
                />
              </p>
            </div>
            <hr />
          </Fragment>
        ))}
      </div>
    </fieldset>
  );
};
