const express = require("express");
const cors = require('cors');
const transactionsController = require("./controllers/transactions")
 


const app = express();
app.use(express.json());
app.use(cors());

app.use((req,res, next) => {
  console.log(`${req.method} request made a t${req.url}`)
  next()
})

//when someone goes to a route that starts with /items
app.use("/transactions", transactionsController)

// ROOT
app.get("/", (req, res) => {
  res.send("Budgeting App");
});

app.get("*", (req,res) => {
  res.status(404).send("Page Not Found")
})
module.exports = app;
