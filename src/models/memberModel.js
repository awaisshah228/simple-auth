const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Id: {
    type: String,
    unique: true,
  },
  cnic: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  fullName_link: {
    type: String,
    unique: true,
  },
  hh_mobilizer: {
    type: String,
  },
  hh_mobilizer_link: {
    type: String,
  },
  serial_number: {
    type: String,
  },
  registration_date: {
    type: String,
  },
  activities: {
    type: String,
  },
  phone: {
    type: String,
  },
  family_member: {
    type: String,
  },
  first_disbursemnet: {
    type: String,
  },
  spending: {
    type: String,
  },
  actual_of_nets: {
    type: String,
  },
  balance: {
    type: String,
  },
  status: {
    type: String,
  },
  archive: {
    type: String,
  },
  nationlity: {
    type: String,
  },
  country: {
    type: String,
  },
  province: {
    type: String,
  },
  district: {
    type: String,
  },
  council: {
    type: String,
  },
  dp: {
    type: String,
  },
  union_council: {
    type: String,
  },
  
});

module.exports = mongoose.model("user", userSchema);
