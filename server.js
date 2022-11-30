const app = require("express")()
const port = 3000

app.get("/greeting/:name", (req, res) => {
   res.send("Hi there! " + req.params.name + "!")
})


app.listen(port, () => {
   console.log("listening")
})