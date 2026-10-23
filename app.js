const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    taskInput.focus();
    return;
  }

  const emptyMessage = taskList.querySelector(".empty-message");

  if (emptyMessage) {
    emptyMessage.remove();
  }


  const li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.focus();
});
