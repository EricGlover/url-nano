//URL
const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
  {
    fullUrl: String,
    miniUrl: String,
    visitors: Array
  },
  {
    timestamps: true
  }
);

const Urls = mongoose.model("Urls", UrlSchema);
module.exports = Urls;
