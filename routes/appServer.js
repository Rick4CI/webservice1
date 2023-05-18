const express = require('express')
const router = express.Router()
const appServer = require('../lib/appServer.js')
const app = appServer.app;
const port = 3000

exports.app = app
exports.port = port
module.exports = router
