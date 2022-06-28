import "./buttons.css";

export const Button = ({ classes, buttonContent, handleClick }) => (
  <button onClick={handleClick} className={classes}>
    {buttonContent}
    {console.log(handleClick)}
  </button>
);

// const removeTask = (index) => {
//   tasks.splice(index, 1);
//   render();
// };

// const removeButtons = document.querySelectorAll(".zadania_delete");
// removeButtons.forEach((removeButton, taskIndex) => {
//   removeButton.addEventListener("click", () => {
//     removeTask(taskIndex);
//   });
// });
