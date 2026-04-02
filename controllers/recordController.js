const Record = require("../models/Record");

// CREATE
exports.createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(record);
};

// GET ALL
exports.getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

// UPDATE
exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(record);
};

// DELETE
exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};