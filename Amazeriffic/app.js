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
  // добавляем вызов функции showOldBooks() при переключении на вторую вкладку
  if (tabName === "oldBooks") {
    showOldBooks();
  }
}

// Получаем элементы с помощью их id
var newBooksTab = document.getElementById("newBooks");
var oldBooksTab = document.getElementById("oldBooks");
var addBookTab = document.getElementById("addBook");
var newBooksList = document.getElementById("newBooksList");
var oldBooksList = document.getElementById("oldBooksList");
var bookNameInput = document.getElementById("bookName");
var tagsTab = document.getElementById("tags");

// Массив книг
var books = [];
// Функция для отображения первой вкладки
function showNewBooks() {
  // Очищаем список книг
  newBooksList.innerHTML = "";
  // Сортируем книги по дате создания в обратном порядке
  books.sort(function(a, b) {
    return b.createdAt - a.createdAt;
  });
  // Добавляем каждую книгу в список
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var li = document.createElement("li");
    li.textContent = book.name;
    newBooksList.appendChild(li);
  }
  // Отображаем первую вкладку
  newBooksTab.style.display = "block";
  oldBooksTab.style.display = "none";
  addBookTab.style.display = "none";
  }

// Функция для отображения второй вкладки
function showOldBooks() {
  // Очищаем список книг
  oldBooksList.innerHTML = "";
  // Сортируем задачи по дате создания
  books.sort(function(a, b) {
    return a.createdAt - b.createdAt;
  });
  // Добавляем каждую задачу в список
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var li = document.createElement("li");
    li.textContent = book.name;
    oldBooksList.appendChild(li);
  }
  // Отображаем вторую вкладку
  oldBooksTab.style.display = "block";
  newBooksTab.style.display = "none";
  addBookTab.style.display = "none";
}

// Функция для отображения третьей вкладки
function showAddBook() {
  // Отображаем третью вкладку
  addBookTab.style.display = "block";
  oldBooksTab.style.display = "none";
  newBooksTab.style.display = "none";
}

// Функция для добавления книги
function addBook() {
  // Получаем значения полей ввода
  var bookName = bookNameInput.value;
  // Создаем объект книги
  var book = {
    name: bookName,
    createdAt: new Date()
  };
  // Добавляем книгу в массив
  books.push(book);
  // Отображаем первую вкладку
  showNewBooks();
  // Очищаем поля ввода
  bookNameInput.value = "";
}
// Функция для отображения третьей вкладки
function tags() {
  // Отображаем третью вкладку
  addTaskTab.style.display = "none";
  oldTasksTab.style.display = "none";
  newTasksTab.style.display = "none";
  tags.style.display = "block";
}

