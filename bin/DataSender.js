"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class DataSender {
    constructor() {
    }
    async send(data) {
        return await axios_1.default.post("http://localhost:4567/receive", data);
    }
}
exports.default = DataSender;
//# sourceMappingURL=DataSender.js.map