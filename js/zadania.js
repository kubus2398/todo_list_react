const tasks = [];

const isUndone = (task) => !task.done;
const tasksUndone = () => tasks.filter(isUndone);
const toggleDone = document.querySelector(".toggleDone");

toggleDone.addEventListener("click", () => {
  render();
});

const render = () => {
  let htmlString = "";

  if (toggleDone.checked === true) {
    for (const task of tasksUndone()) {
      htmlString += `
      <label class="zadania_label"><li class="zadania_item zadania_item--button"><button class="zadania_done">Zrobione</button></li></label>
      <li 
      class="zadania_item"
        ${task.done ? 'style="text-decoration: line-through"' : ""}>
        ${task.content}
      </li>
      <label class="zadania_label"><li class="zadania_item zadania_item--delete"><button class="zadania_delete">Usuń</button></li></label>
      <hr>
      `;
    }
  } else
    for (const task of tasks) {
      htmlString += `
      <label class="zadania_label"><li class="zadania_item zadania_item--button"><button class="zadania_done">Zrobione</button></li></label>
      <li 
      class="zadania_item"
        ${task.done ? 'style="text-decoration: line-through"' : ""}>
        ${task.content}
      </li>
      <label class="zadania_label"><li class="zadania_item zadania_item--delete"><button class="zadania_delete">Usuń</button></li></label>
      <hr>
      `;
    }

  document.querySelector(".zadania_list").innerHTML = htmlString;

  const removeButtons = document.querySelectorAll(".zadania_delete");
  removeButtons.forEach((removeButton, taskIndex) => {
    removeButton.addEventListener("click", () => {
      removeTask(taskIndex);
    });
  });
  const doneButtons = document.querySelectorAll(".zadania_done");
  doneButtons.forEach((doneButton, taskIndex) => {
    doneButton.addEventListener("click", () => {
      toggleTaskDone(taskIndex);
    });
  });
};

const addNewTask = (newTaskContent) => {
  tasks.push({
    content: newTaskContent,
    done: false,
  });

  render();
};

const removeTask = (index) => {
  tasks.splice(index, 1);
  render();
};
const toggleTaskDone = (taskIndex) => {
  tasks[taskIndex].done = !tasks[taskIndex].done;
  render();
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const newTaskContent = document.querySelector(".zadania_input").value.trim();
  if (newTaskContent === "") {
    return;
  }

  addNewTask(newTaskContent);
  document.querySelector(".zadania_input").value = "";
  document.querySelector(".zadania_input").focus();
};

const init = () => {
  render();
  const form = document.querySelector(".zadania_form");
  form.addEventListener("submit", onFormSubmit);
};
init();
