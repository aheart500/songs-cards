const express = require("express");

const app = express();

app.use(express.static("client"));

app.listen(3000, () => console.log("listenting on 3000"));
