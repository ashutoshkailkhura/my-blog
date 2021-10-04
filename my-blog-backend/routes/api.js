var express = require("express");
var router = express.Router();
require("dotenv").config();
var { Artical, CommentValidate } = require("../models/artical");

router.get("/artical-list", async function (req, res, next) {
  const data = await Artical.find({}).select({ name: 1, title: 1 });
  res.status(200).send(data);
});

router.get("/artical/:name", async function (req, res, next) {
  const name = req.params.name;
  if (!name) return res.status(404).send("No Record Found");

  const data = await Artical.findOne({ name: name });
  res.status(200).send(data);
});

router.post("/artical/:name/like", async function (req, res, next) {
  const articalName = req.params.name;
  console.log(articalName);
  const artical = await Artical.find({ name: articalName });
  if (!artical) return res.status(404).send("No Record Found");
  await Artical.updateOne(
    { name: articalName },
    {
      $inc: { likes: 1 },
    }
  );

  const updateArtical = await Artical.findOne({ name: articalName });
  res.send([updateArtical]);
});

router.post("/artical/:name/add-comment", async function (req, res, next) {
  const articalName = req.params.name;
  const { username, usercomment } = req.body;
  const { error } = CommentValidate(req.body);
  if (error) return res.status(400).send(error);
  const artical = await Artical.findOne({ name: articalName });
  if (!artical) return res.status(404).send("No Record Found");
  await Artical.updateOne(
    { name: articalName },
    {
      $set: { comments: artical.comments.concat({ username, usercomment }) },
    }
  );

  const updateArtical = await Artical.findOne({ name: articalName });
  res.send(updateArtical);
});

module.exports = router;
