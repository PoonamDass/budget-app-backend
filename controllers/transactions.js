const transactions  =require("express").Router()
const transaction = require("../models/transaction")
const transactionsArray = require("../models/transaction")
//create a router for transactions

transactions.get("/", (req,res) => {
    res.json(transactionsArray)
})

transactions.get("/:id", (req, res)=>{
    const {id} = req.params
    const transaction = transactionsArray[id]
    transaction ? res.json(transaction) : res.redirect('/404')
})

transactions.post("/", (req,res) => {
    transactionsArray.push(req.body)
    const newTransaction = transactionsArray.length-1
    res.json(transactionsArray[newTransaction])
})

transactions.delete("/:id", (req,res) => {
    const {id} = req.params
    const deletedTransaction = transactionsArray.splice(id,1)
    res.json(deletedTransaction[0])
})

transactions.put("/:id", (req,res) => {
    const {id} = req.params
    const {body} = req
    transactionsArray[id] =body
    res.json(transactionsArray[id])
})
module.exports = transactions