"use strict";
exports.__esModule = true;
exports.forEach = void 0;
var errors_1 = require("../errors/errors");
var checkers_1 = require("./type-checkers/checkers");
var forEach = function (list, callback, _index) {
    var arrayLength = list;
    var _key;
    if (checkers_1.isArray(list)) {
        for (; _key < arrayLength; _key++) {
            var _result = callback(list[_key]);
            return _result;
        }
    }
    else if (checkers_1.isObject(list)) {
        for (_key in list) {
            if (list.hasOwnProperty(_key)) {
                callback(list[_key], _key, list);
            }
        }
    }
    else {
        throw new errors_1["default"](list + " is not an Object or Array");
    }
};
exports.forEach = forEach;
