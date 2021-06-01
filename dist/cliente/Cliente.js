"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Free_1 = __importDefault(require("../suscripcion/free/Free"));
var Cliente = /** @class */ (function () {
    function Cliente(name, dni, obj) {
        if (obj === void 0) { obj = {}; }
        this.name = name;
        this.dni = dni;
        this.pack = (Object.keys(obj).length === 0) ? new Free_1.default(0, 15, true) : obj;
    }
    Cliente.prototype.setPack = function (pack) {
        this.pack = pack;
    };
    return Cliente;
}());
exports.default = Cliente;
