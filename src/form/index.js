import "./form.css";

const Form = (props) => (
  <form className="zadania_form">
    <fieldset className="zadania_fieldset">
      <legend className="zadania_legend">Dodaj zadanie</legend>
      <input className="zadania_input" />
      <button className="zadania_dodaj">Dodaj zadanie</button>
      <input type="checkbox" name="toggleDone" className="toggleDone" />{" "}
      Wyświetl nie zrobione
    </fieldset>
  </form>
);

export default Form;
