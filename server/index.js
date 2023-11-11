require("dotenv").config();
const express = require("express");
const todoRoutes = require("./routes/todo");
const sequelize = require("./utils/database");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 9000;

app.use(cors());

app.use(express.json());
app.use("/api/todo", todoRoutes);

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
}
start();
