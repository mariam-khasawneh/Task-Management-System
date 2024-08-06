require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./Routes/userRouters");
const taskRoutes = require("./Routes/taskRouters");

const express = require("express");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.listen(3000, () => console.log("port 3000"));
