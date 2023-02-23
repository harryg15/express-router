const express = require('express')
const router = express.Router()
const {check, validationResult} = require("express-validator")

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.use(express.json())

//get
router.get('/', (req, res) => {
    res.json(fruits)
})

//get specific id
router.get('/:id', (req, res) => {
    res.json(fruits[req.params.id - 1])
})

//create
router.post('/', [
    check("name").not().isEmpty().trim(),
    check("color").not().isEmpty().trim()
], 
async (req, res) => {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()) {
        res.json({error: errors.array()})
    } else {
        fruits.push(req.body)
        res.send(fruits)
    }
})

//update
router.put('/:id', (req, res) => {
    fruits[req.params.id - 1] = req.body
    res.send(fruits)
})

//delete
router.delete('/:id', (req, res) => {
    fruits.splice(req.params.id - 1, 1)
    res.json(fruits)
})

module.exports = router