import "./navBar.css";
import Form from "./form/index.js";
import { Tasks } from "./tasksnew/index.js";
import { NavTab } from "./nav/index.js";

const tasks = [
  {
    id: 1,
    content: "ajkhfgdajksdfgajdksg f",
    done: false,
  },
  { id: 2, content: "askdjhda", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <div>
      <div className="srodek">
        <NavTab />

        <main className="srodek">
          <Form />
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
          <button className="darkmode">
            Wlacz <span className="themeName">ciemny</span> motyw
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
