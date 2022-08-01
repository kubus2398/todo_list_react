import "./buttons.css";

export const Button = ({ classes, buttonContent, handleClick }) => (
  <button onClick={handleClick} className={classes}>
    {buttonContent}
  </button>
);
