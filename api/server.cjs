const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const { questions } = require("./questions.cjs");

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

app.get("/random-question", (req, res) => {
  const idx = Math.floor(Math.random() * questions.length);
  const question = questions[idx];
  res.json({
    id: question.id,
    statement: question.statement,
    options: question.options,
  });
});

app.get("/questions", (req, res) => {
  res.json(
    questions.map((q) => ({
      id: q.id,
      statement: q.statement,
      options: q.options,
    }))
  );
});

app.post("/questions/", (req, res) => {
  const answers = req.body;
  let result = 0;
  answers.forEach((an) => {
    const question = questions.find(({ id }) => id === an.id);
    if (question?.rightAnswer === an.text) {
      result++;
    }
  });
  res.status(200).json(result);
});

app.post("/questions/:id", (req, res) => {
  const id = req.params.id;
  const answer = req.body;
  const question = questions.find((q) => q.id == id);
  if (!question) {
    res.status(400).json({ error: `Question with id ${id} was not found` });
  } else {
    res.status(200).json(answer === question.rightAnswer);
  }
});

app.listen(port, () => {
  console.log(`Backend is ready at http://localhost:${port}`);
});
