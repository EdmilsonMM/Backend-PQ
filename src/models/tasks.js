const mongoose = require("mongoose");
const {Schema} = mongoose;

const tasks = new Schema({
    usuario: String,
    razonSocial: String,
    cargo: String,
    celular: Number,
    correo: String,
    mensaje: String
})

module.exports = mongoose.model('tasks', tasks);