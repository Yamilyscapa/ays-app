import express from "express"
import dotenv from "dotenv"
import router from "./router"

// Initializations
dotenv.config()
const app = express()

// Constants
const PORT = process.env.PORT

// Routes
router(app)

// App
app.listen(PORT, () => {
  console.log("Server initializated on port:", PORT)
})
