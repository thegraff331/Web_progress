function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  // добавляем вызов функции showOldTasks() при переключении на вторую вкладку
  if (tabName === "oldTasks") {
    showOldTasks();
  }
}

// Получаем элементы с помощью их id
var newTasksTab = document.getElementById("newTasks");
var oldTasksTab = document.getElementById("oldTasks");
var addTaskTab = document.getElementById("addTask");
var newTasksList = document.getElementById("newTasksList");
var oldTasksList = document.getElementById("oldTasksList");
var taskNameInput = document.getElementById("taskName");


// Массив задач
var tasks = [];
// Функция для отображения первой вкладки
function showNewTasks() {
  // Очищаем список задач
  newTasksList.innerHTML = "";
  // Сортируем задачи по дате создания в обратном порядке
  tasks.sort(function(a, b) {
    return b.createdAt - a.createdAt;
  });
  // Добавляем каждую задачу в список
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var li = document.createElement("li");
    li.textContent = task.name;
    newTasksList.appendChild(li);
  }
  // Отображаем первую вкладку
  newTasksTab.style.display = "block";
  oldTasksTab.style.display = "none";
  addTaskTab.style.display = "none";
}


// Функция для отображения второй вкладки
function showOldTasks() {
  // Очищаем список задач
  oldTasksList.innerHTML = "";
  // Сортируем задачи по дате создания
  tasks.sort(function(a, b) {
    return a.createdAt - b.createdAt;
  });
  // Добавляем каждую задачу в список
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var li = document.createElement("li");
    li.textContent = task.name;
    oldTasksList.appendChild(li);
  }
  // Отображаем вторую вкладку
  oldTasksTab.style.display = "block";
  newTasksTab.style.display = "none";
  addTaskTab.style.display = "none";
}

// Функция для отображения третьей вкладки
function showAddTask() {
  // Отображаем третью вкладку
  addTaskTab.style.display = "block";
  oldTasksTab.style.display = "none";
  newTasksTab.style.display = "none";
}

// Функция для добавления задачи
function addTask() {
  // Получаем значения полей ввода
  var taskName = taskNameInput.value;
  // Создаем объект задачи
  var task = {
    name: taskName,
    createdAt: new Date()
  };
  // Добавляем задачу в массив
  tasks.push(task);
  // Отображаем первую вкладку
  showNewTasks();
  // Очищаем поля ввода
  taskNameInput.value = "";
}

