const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
connectDB(); // database

app.use("/api/goals", require("./routes/goalRoutes"))
app.use("/api/user", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))
// info: mess
// warn:
// error:
