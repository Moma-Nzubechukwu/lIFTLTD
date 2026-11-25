const express = require("express");
const path = require("path")

require("dotenv").config();
const app = express();

app.use(express.static("./frontend"));
app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "index.html"))

    })
    // app.listen(3000, () => console.log("listening"));