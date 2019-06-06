
const express = require("express");
const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/packs", (request, response) => {
    response.sendFile(`${__dirname}/backpacks.json`);
});

app.listen(4000, () => console.log("http://localhost:4000/packs"));
