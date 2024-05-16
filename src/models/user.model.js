import mongoose from "mongoose";

const usuarioEsquema = new mongoose.Schema ({
    usuario: {
        type: String,
        required: true,
        trim: true,
    },
    mail: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    institucion: {
        type: String,
        trim: true,
    },
})

export default mongoose.model('Usuario', usuarioEsquema)