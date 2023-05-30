import express from "express";
const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});
app.post("/weather", (req, res) => {
  const { cityName } = req.body;

  res.send(cityName);
});

app.listen(port, () => {
  console.log(`Server is listening on port:${port}`);
});
