const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientsSchema = new Schema({
  firstName: String,
  secondName: String,
  status: String,
  clientData: Array,
});

// ClientsSchema.methods.toAuthJSON = function () {
//   return {
//     _id: this._id,
//     firstName: this.firstName,
//     secondName: this.secondName,
//     status: this.status,
//   };
// };

mongoose.model('Clients', ClientsSchema)