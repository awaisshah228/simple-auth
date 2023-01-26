const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  qr_code:{
    type: String,
  },
  Id: {
    type: String,
  },
  cnic: {
    type: String,
    // unique: true
  },
  name: {
    type: String,
  },
  fullName_link: {
    type: String,
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
    type: Date,
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

module.exports = mongoose.model("member", memberSchema);
