"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSusciption = /** @class */ (function () {
    function AbstractSusciption(c, d, p) {
        this.cost = c;
        this.durationDays = d;
        this.publicity = p;
    }
    AbstractSusciption.prototype.setCost = function (c) {
        this.cost = c;
    };
    AbstractSusciption.prototype.getCost = function () {
        return this.cost;
    };
    AbstractSusciption.prototype.setDurationDays = function (d) {
        this.durationDays = d;
    };
    AbstractSusciption.prototype.getDurationDays = function () {
        return this.durationDays;
    };
    AbstractSusciption.prototype.setPublicity = function (c) {
        this.publicity = c;
    };
    AbstractSusciption.prototype.getPublicity = function () {
        return this.publicity;
    };
    return AbstractSusciption;
}());
exports.default = AbstractSusciption;
