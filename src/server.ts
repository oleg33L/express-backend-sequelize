import app from "./app"

const server = app.listen(app.get("port"), () => {
  console.log(
    "Server running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  )
  console.log("Press Ctrl+C to stop")
})

export default server