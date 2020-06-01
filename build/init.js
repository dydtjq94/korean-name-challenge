"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 5000;

var handleListening = function handleListening() {
  return console.log("\uD83D\uDE3BLISTENING ON: https://localhost:".concat(PORT));
};

_app["default"].listen(PORT, handleListening);