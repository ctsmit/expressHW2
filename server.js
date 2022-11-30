const app = require("express")()
const port = 3000
const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
const fibonacciFinder = (num) => {
   if (num <= 3) return true

   let last = 3
   let prev = 2
   let temp = 1
   while (last+prev <= num) {
      if (prev + last == num) return true //double equals to avoid Number/parseFLoat
      temp = prev
      prev = last
      last += temp
   }
   return false
}


app.get("/greeting/:name", (req, res) => {
   res.send("Hi there! " + req.params.name + "!")
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
   let tip = req.params.total*(req.params.tipPercentage*.01)
   res.send(tip.toString())
})
app.get("/magic/:question", (req, res) => {
   let random = answers[Math.floor(Math.random() * answers.length)]
   res.send('<h1>'+req.params.question + ': '+ random + '</h1>')
})


//Fibonnaci
app.get("/fibonacci/:num", (req, res) => {
   if (fibonacciFinder(req.params.num)) {
      res.send("Very good. It is Fibonacci")
   }else{res.send("I can tell this is not a fibonacci number")}
})


app.listen(port, () => {
   console.log("listening")
})