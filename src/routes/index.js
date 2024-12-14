import { Router } from "express"

// Initializations
const router = Router()

// App
router.get("/", (req, res) => {
  res.send("Hello from '/'")
})

export default router
