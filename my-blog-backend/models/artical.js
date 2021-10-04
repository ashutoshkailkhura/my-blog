const Joi = require("joi");
const mongoose = require("mongoose");

const Comments = mongoose.Schema({
  username: { type: String },
  usercomment: { type: String },
});

const ArticalSchema = mongoose.Schema({
  name: {
    type: String,
    sparse: true,
    unique: true,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  likes: {
    type: Number,
  },
  comments: [Comments],
});

const Artical = mongoose.model("Artical", ArticalSchema);

// profile validate for mobile
function CommentValidate(comment) {
  const CommentSchema = Joi.object({
    username: Joi.string().required(),
    usercomment: Joi.string().required(),
  });
  return CommentSchema.validate(comment);
}

module.exports.Artical = Artical;
module.exports.CommentValidate = CommentValidate;
