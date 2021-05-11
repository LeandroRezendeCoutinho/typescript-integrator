"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataFetcher_1 = __importDefault(require("./DataFetcher"));
const DataProcessor_1 = __importDefault(require("./DataProcessor"));
const DataSender_1 = __importDefault(require("./DataSender"));
async function run() {
    for (let index = 0; index < 100000; index++) {
        const fetcher = new DataFetcher_1.default();
        const processor = new DataProcessor_1.default();
        const sender = new DataSender_1.default();
        const sales = await fetcher.fetchData();
        const data = await processor.process(sales);
        const response = await sender.send(data);
        if (response.status === 200) {
            console.log(`In tegration ${index}`);
        }
    }
}
run();
//# sourceMappingURL=app.js.map