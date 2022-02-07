const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/countries"));

mongoose
    .connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT || 5000))
    .catch(err => console.log(err));
