"use strict";

const app = require("./src/index.server");
const serverless = require("serverless-http");

module.exports.hello = serverless(app);
