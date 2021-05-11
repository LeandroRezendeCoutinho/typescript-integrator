"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataProcessor {
    constructor() {
    }
    async process(sales) {
        let grouped_sales = this.groupBy(x => { var _a; return (_a = (x.data_venda && x.vendedor_cpf)) !== null && _a !== void 0 ? _a : 'default'; }, sales);
        // grouped_sales.
        for (const key in grouped_sales) {
            if (Object.prototype.hasOwnProperty.call(grouped_sales, key)) {
                const element = grouped_sales[key];
                console.log(element);
            }
        }
        return grouped_sales;
    }
    groupBy(getKey, array) {
        return array.reduce((grouped, value) => {
            var _a;
            const key = getKey(value);
            return Object.assign(Object.assign({}, grouped), { [key]: [...((_a = grouped[key]) !== null && _a !== void 0 ? _a : []), value] });
        }, {});
    }
}
exports.default = DataProcessor;
//# sourceMappingURL=DataProcessor.js.map