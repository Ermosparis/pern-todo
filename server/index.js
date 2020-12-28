const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./db");
const router = require("./routes/router");
PORT = process.env.PORT || 5000;

app.use(corse());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`);
});
