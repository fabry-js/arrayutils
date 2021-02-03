"use strict";
exports.__esModule = true;
exports.AUmap = exports.AUforEach = void 0;
function AUforEach(list, callback) {
    if (list) {
        for (var _i = 0; _i < list.length; _i++) {
            var res = callback(list[_i], _i);
            if (res)
                return res;
        }
        return undefined;
    }
}
exports.AUforEach = AUforEach;
function AUmap(list, callback) {
    var result;
    if (list) {
        result = [];
        for (var _i = 0; _i < list.length; _i++) {
            result.push(callback(list[_i], _i));
        }
    }
    return result;
}
exports.AUmap = AUmap;
