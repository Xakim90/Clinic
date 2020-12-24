const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    bmi: Number,
    bp: Number,
    t: Number,
    rr: Number,
    status: String
});

const Hospital = mongoose.model("hospital", HospitalSchema);

module.exports = Hospital;