const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get("/Im_Spy", (req, res) => {
  res.json({hello: "spy"});
});

app.post("/path", (req, res) => {
  console.log(req.body);
  res.json({LETS_COUNT_HEHEHE: fizzbuzz(req.body.numbers)});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

function fizzbuzz(numbers) {
  return numbers;
}
