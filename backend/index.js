import express from "express";

const app = express();
const port = 3560;

app.get("/", (req, res) => {
  res.send("Hello???!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
