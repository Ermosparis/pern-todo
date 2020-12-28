const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
PORT = process.env.PORT || 5000;

app.use(corse())
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT,()=>{
    console.log(`Server has started on ${PORT}`)
})
