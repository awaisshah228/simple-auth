const Member = require("../models/memberModel");
const BadRequestError = require("../errors/bad-request-error");
const { generateAccessToken } = require("../utils/generateToken");
const memberCtrl = {
  addMember: async (req, res) => {
    const {
      qr_code,
      cnic,
      name,
      fullName_link,
      hh_mobilizer,
      hh_mobilizer_link,
      serial_number,
      registration_date,
      activities,
      phone,
      family_member,
      first_disbursemnet,
      spending,
      actual_of_nets,
      balance,
      status,
      archive,
      nationlity,
      country,
      province,
      district,
      council,
      dp,
      union_council,
    } = req.body;
    const memberExist = await Member.find({ qr_code })[0];
    // console.log(members.cnic)

    const { v4: uuidv4 } = require("uuid");
    const Id = uuidv4();

    if (memberExist) {
      throw new BadRequestError("Already member added with same qr");
    }

    const member = new Member({
      qr_code,
      Id,
      cnic,
      name,
      fullName_link,
      hh_mobilizer,
      hh_mobilizer_link,
      serial_number,
      registration_date,
      activities,
      phone,
      family_member,
      first_disbursemnet,
      spending,
      actual_of_nets,
      balance,
      status,
      archive,
      nationlity,
      country,
      province,
      district,
      council,
      dp,
      union_council,
    });
    await member.save();

    return res.json(member);
  },
  getMember: async (req, res) => {
    const qr_code = req.params.qr;
    const member = await Member.findOne({ qr_code });

    if (!member) {
      throw new BadRequestError("member not exist with this qr code");
    }
    res.json(member);
  },
};
module.exports = memberCtrl;
