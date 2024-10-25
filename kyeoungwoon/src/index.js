// const express = require('express')  // -> CommonJS
import express from "express"; // -> ES Module

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("GET /about");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
