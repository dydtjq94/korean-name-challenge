"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resultCon = exports.submitCon = exports.homeCon = void 0;

var _routes = _interopRequireDefault(require("../routes"));

var _storage = require("../storage/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var homeCon = function homeCon(req, res) {
  console.log("home");
  res.render("home", {
    pageTitle: "Korean Name Generator"
  });
};

exports.homeCon = homeCon;

var submitCon = function submitCon(req, res) {
  var _req$body = req.body,
      month = _req$body.month,
      day = _req$body.day,
      year = _req$body.year,
      gender = _req$body.gender;

  if (month < 13 && day <= 31 && year > 1900) {
    try {
      console.log(month, day, year, gender);

      var first = _storage.monthStorage[parseInt(month)];

      var second = _storage.dayStorage[parseInt(day)];

      var third = "";

      if (gender === "male") {
        third = _storage.yearMaleStorage[parseInt(year) % 10];
      } else {
        third = _storage.yearFemaleStorage[parseInt(year) % 10];
      }

      var pronunciation = "".concat(first[1], " ").concat(second[2], " ").concat(third[2]);
      var description = "".concat(second[1], " ").concat(third[1]);
      var name = "".concat(first[0]).concat(second[0]).concat(third[0]);
      res.render("result", {
        pageTitle: "YOUR NAME",
        name: name,
        description: description,
        pronunciation: pronunciation
      });
    } catch (error) {
      console.log(error);
      res.render("home", {
        pageTitle: "HOME"
      });
    }
  } else {
    console.log("no!");
    res.render("error", {
      pageTitle: "ERROR"
    });
  }
};

exports.submitCon = submitCon;

var resultCon = function resultCon(req, res) {};

exports.resultCon = resultCon;