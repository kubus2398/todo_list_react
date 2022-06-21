import "./nav.css";

export const NavTab = (props) => (
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
);
