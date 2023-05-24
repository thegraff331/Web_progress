var express = require("express"),
http = require("http"),
app = express(),
toDos =
[
  {
    "description": "View the entire list of TV shows",
    "tags": [ "list", "TVshow" ]
  },

  {
    "description": "View all channel list",
    "tags": [ "list", "channel" ]
  },

  {
    "description": "View the schedule of a specific TV show",
    "tags": [ "schedule", "TVshow" ]
  },

  {
    "description": "View the schedule of a specific channel",
    "tags": [ "schedule", "channel" ]
  },

  {
    "description": "View the schedule for the whole week",
    "tags": [ "schedule", "week" ]
  },

  {
    "description": "View schedule for tomorrow",
    "tags": [ "schedule", "tomorrow" ]
  },

  {
    "description": "View schedule for today",
    "tags": [ "schedule", "today" ]
  }
];

app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);

app.get("/todos.json", function (req, res) {
	res.json(toDos);
});

app.use(express.static(__dirname + "/client"));

app.use(express.urlencoded({ extended: true }));
app.post("/todos", function (req, res) { // сейчас объект сохраняется в req.body
	var newToDo = req.body;
	console.log(newToDo);
	toDos.push(newToDo);

	res.json({"message":"Вы размещаетесь на сервере!"}); // отправляем простой объект
});

