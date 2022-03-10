const postModel = require("../models/post.model");
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
module.exports.readPost = (req, res) => {
 return res.status(400).send("try test ");
};
