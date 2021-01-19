const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientsSchema = new Schema({
  name: String,
  surname: String,
  status: String,
  birthCity: Number,
  birthYear: Number,
  clientData: Array,
});

ClientsSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    name: this.name,
    surname: this.surname,
    status: this.status,
    clientData: this.clientData
  };
};
// ClientsSchema.methods.toAuthJSON = function () {
//   return {
//     _id: this._id,
//     firstName: this.firstName,
//     secondName: this.secondName,
//     status: this.status,
//   };
// };

mongoose.model('Clients', ClientsSchema)