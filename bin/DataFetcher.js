"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class DataFetcher {
    constructor() {
    }
    async fetchData() {
        const response = await axios_1.default.get("http://localhost:4567/data");
        return response.data;
    }
}
exports.default = DataFetcher;
//# sourceMappingURL=DataFetcher.js.map