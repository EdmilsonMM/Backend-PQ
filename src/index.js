const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

require('dotenv').config();

mongoose.connect(process.env.URI)
.then(db => console.log("BD CONNECT"))
.catch(err => console.log("error"))

const port = process.env.PORT || 3000;


app.use(morgan("dev"));
app.use(express.json());
app.use(cors())


app.use("/api/formulario",require("./routes/tasks"))

app.use(express.static(__dirname + "/public"));

app.listen(port,()=>{
    console.log(`Servidor activo en el port ${port}`);
})
