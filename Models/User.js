const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
    partiesMade: Number, //esto es cuantas jodas publicó, a la 3era empezamos a cobrar comision por entrada
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

module.exports = UserModel;
