const clock = document.getElementById("clock");
function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = () => li.classList.toggle("completed");
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
