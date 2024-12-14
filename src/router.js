import main from "./routes/index"
import status from "./routes/status"

function router(app) {
  app.use("/", main)
  app.use("/status", status)
}

export default router
