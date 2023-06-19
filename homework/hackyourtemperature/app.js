import keys from "./sources/keys.js";
import fetch from "node-fetch";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.post("/weather", async (req, res) => {
  const { cityName } = req.body;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?APPID=${keys.API_KEY}&q=${cityName}`;

  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    if (data.code === "404") {
      res.send({ weatherText: "City is not found!" });
    } else {
      const cityName = data.name;
      const temperature = data.main.temp;
      res.send({
        weatherText: `The temperature in ${cityName} is ${temperature}°C`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

export default app;
