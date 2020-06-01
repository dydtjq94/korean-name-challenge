"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _controller = require("../controllers/controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get(_routes["default"].home, _controller.homeCon);
router.post(_routes["default"].submit, _controller.submitCon);
router.get(_routes["default"].result, _controller.resultCon);
var _default = router;
exports["default"] = _default;