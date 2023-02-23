const express = require('express')
const router = express.Router()
const {check, validationResult} = require("express-validator")

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.use(express.json())

//get
router.get('/', (req, res) => {
    res.json(users)
})

//get specific id
router.get('/:id', (req, res) => {
    res.json(users[req.params.id - 1])
})

//create
router.post('/', [
    check("name").not().isEmpty().trim(),
    check("age").not().isEmpty().trim()
], 
async (req, res) => {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()) {
        res.json({error: errors.array()})
    } else {
        users.push(req.body)
        res.send(users)
    }
})

//update
router.put('/:id', (req, res) => {
    users[req.params.id - 1] = req.body
    res.send(users)
})

//delete
router.delete('/:id', (req, res) => {
    users.splice(req.params.id - 1, 1)
    res.json(users)
})

module.exports = router