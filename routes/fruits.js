const express = require('express')
const router = express.Router()

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
router.post('/', (req, res) => {
    fruits.push(req.body)
    res.send(fruits)
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