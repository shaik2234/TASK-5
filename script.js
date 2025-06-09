document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Add via button
  addTaskBtn.addEventListener("click", addTask);

  // Add via Enter key
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");
    li.className = "task-item";

    const taskLeft = document.createElement("div");
    taskLeft.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = taskText;

    checkbox.addEventListener("change", () => {
      li.classList.toggle("task-completed", checkbox.checked);
    });

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(label);

    const removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      li.style.animation = "slideFadeOut 0.3s ease-out";
      setTimeout(() => li.remove(), 300);
    });

    li.appendChild(taskLeft);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  }
});
