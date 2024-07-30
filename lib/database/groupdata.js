const mongoose = require('mongoose');

const GroupdataSchema = new mongoose.Schema({
  id: { type: String, required: true },
  desc: { type: String },
  invitecode: { type: String },
  owner: { type: String, default: undefined },
  size: { type: Number },
  subject: { type: String },
  subjectTime: { type: Number },
  linkedParent: { type: String },
  author: { type: String }
});

const groupdb = mongoose.model("groupdb", GroupdataSchema);

module.exports = { groupdb };
