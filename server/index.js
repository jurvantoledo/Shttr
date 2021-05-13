const express = require("express");
const corsMiddleWare = require("cors");
const bodyParser = require('body-parser')

const app = express();
const PORT = 4000;

app.use(corsMiddleWare());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.DELAY) {
    app.use((req, res, next) => {
      setTimeout(() => next(), parseInt(process.env.DELAY));
    });
  }


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });