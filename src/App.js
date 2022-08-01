import "./navBar.css";
import { useState } from "react";
import Form from "./form/index.js";
import { Tasks } from "./tasksnew/index.js";
import { NavTab } from "./nav/index.js";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "ajkhfgdshgdsajkhg",
      done: false,
    },
    { id: 2, content: "askdjhda", done: true },
    { id: 3, content: "askdjhda", done: false },
  ]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const buttonDoneAll = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        return { ...task, done: true };
      })
    );
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return (
    <div>
      <div className="srodek">
        <NavTab />

        <main className="srodek">
          <Form addNewTask={addNewTask} />
          <Tasks
            tasks={tasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
            toggleDoneAll={buttonDoneAll}
          />
          <button className="darkmode">
            Wlacz <span className="themeName">ciemny</span> motyw
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
