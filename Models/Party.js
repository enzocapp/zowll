const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PartySchema = new Schema(
  {
    name: String,
    price: Object,
    maxInList: Number, //numero maximo de los que se pueden unir
    inList: Number, //anotados en la lista
    requested: Array, //Esto es para poner los usuarios que enviaron sus soliccitudes para anotarse
    ubication: String,
    extra:String, //Esto es para info extra como si hay dj, barra etc

    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PartyModel = model("Party", PartySchema);

module.exports = PartyModel;
