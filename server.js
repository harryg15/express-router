const express = require("express")
const app = express()
const port = 3000
const userRouter = require("./routes/users")
const fruitRouter = require("./routes/fruits")

app.use("/users", userRouter)
app.use("/fruits", fruitRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
