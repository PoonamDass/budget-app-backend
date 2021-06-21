const transactions  =require("express").Router()
const transactionsArray = require("../models/transaction")
//create a router for transactions

transations.get("/", (req,res) => {
    res.json(transactionsArray)
})
module.exports = transactions