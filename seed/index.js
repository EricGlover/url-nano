// seeds/index.js

const mongoose = require("mongoose");
const mongooseeder = require("mongooseeder");
const models = require("../models");

//get the mongoUrl
const env = process.env.NODE_ENV || "development";
const config = require("../config/mongo")[env];
const envUrl = process.env[config.use_env_variable];
const localUrl = `mongodb://${config.host}/${config.database}`;
const mongoUrl = envUrl ? envUrl : localUrl;

mongooseeder.seed({
  mongodbUrl: mongoUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    const { Urls } = models;
    return Urls.create({
      fullUrl: "http://cashcats.biz/",
      miniUrl: "dank",
      visitors: []
    });
  }
});
