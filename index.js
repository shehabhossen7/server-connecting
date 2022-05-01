const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("my node is starting now very simple server is ready");
});

const users = [
  {
    id: 1,
    name: "borsha mam",
    email: "borsha@gmail.com",
    phone: "0178888888",
  },
  {
    id: 2,
    name: "rita mam",
    email: "rita@gmail,.com",
    phone: "0178888888",
  },
  {
    id: 3,
    name: "bondita mam",
    email: "bondita@gmail.com",
    phone: "0178888888",
  },
  {
    id: 4,
    name: "borkha mam",
    email: "bobita@gmail.com",
    phone: "0178888888",
  },
  {
    id: 5,
    name: "bobita mam",
    email: "bobita@gmail.com",
    phone: "0178888888",
  },
  {
    id: 6,
    name: "andita mam",
    email: "andita@gmail.com",
    phone: "0178888888",
  },
  {
    id: 7,
    name: "sarikha mam",
    email: "sarikha@gmail.com",
    phone: "0178888888",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  //   const user = users[id];
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.listen(port, () => {
  console.log("server Liaenting in", port);
});