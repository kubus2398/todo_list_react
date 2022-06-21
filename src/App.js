import "./zadania.css";
import "./navBar.css";
import Form from "./form/index.js";
import Tasks from "./tasks/index.js";

const tasks = [
  { id: 1, content: "costam", done: false },
  { id: 2, content: "askdjhda", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <div>
      <div className="srodek">
        <div className="navTab">
          <a className="nav" href="#podtytul">
            {" "}
            Podtytuł
          </a>
          <a className="nav" href="#tabela">
            {" "}
            Tabela
          </a>
          <a className="nav" href="../podstrony/formularz.html">
            Przejdź do formularza
          </a>
          <a className="nav" href="../podstrony/foto.html">
            Przejdź do tekstu
          </a>
          <a className="nav" href="../podstrony/kantor.html">
            Przejdź do kantoru
          </a>
          <a className="nav" href="../podstrony/dane.html">
            Przejdź do danych
          </a>
          <a className="nav nav_grid" href="../index.html">
            Powrot
          </a>
        </div>

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
