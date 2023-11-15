const mongoose = require("mongoose"); //installation of mongoose
const express = require("express"); //installation of express

const cors = require("cors");
const studentRoutes = require("./controller/studentRoutes");

const app = express(); //instantiation

mongoose.set("strictQuery", true); // to make entries case sensitive

const uri =
  "mongodb+srv://udith:bluesky@cluster0.vjuaj6a.mongodb.net/MyHighSchool";

mongoose.connect(uri); // to trigger connection event

const db = mongoose.connection; // to make connection with database

db.on("open", () => {
  console.log("Database connected");
});

db.on("error", (error) => {
  console.log("Error while connecting database", error);
});

app.use(express.json());
app.use(cors()); //instantiating cors
app.use("/students", studentRoutes);
const port = 5000;
app.listen(port, () => {
  console.log("server listening on port ", port);
});
//end

// const port = 5000;

// app.listen(port, () => {
//   console.log("server listening on port ", port); //listening on server port
// });
