import express from "express";
import fetch from "node-fetch";
import path from "path";

const app = express();
app.use(express.json());

// раздаём сайт
app.use(express.static("site"));

app.post("/chat", async (req, res) => {
  const r = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    body: JSON.stringify({
      model: "deepseek-r1:8b",
      prompt: req.body.prompt
    })
  });
  const data = await r.json();
  res.json({ reply: data.response });
});

app.listen(3000);
