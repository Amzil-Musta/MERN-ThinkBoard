import express from "express";
import fakeData from "./fakedata.json";
// Importing express and fake data from fakedata.json
// The assert { type: "json" } is used to import JSON files in ES modules

const app = express();

app.get("/api/notes", (req, res) => {
  res.json(fakeData);
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
