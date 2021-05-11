"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataProcessor {
    constructor() {
    }
    async process(sales) {
        let grouped_sales = this.groupBy(x => { var _a; return (_a = (x.data_venda && x.vendedor_cpf)) !== null && _a !== void 0 ? _a : 'default'; }, sales);
        let returnList = new Array();
        for (const key in grouped_sales) {
            if (Object.prototype.hasOwnProperty.call(grouped_sales, key)) {
                const element = grouped_sales[key];
                let saleResume = {
                    data_venda: element[0]['data_venda'],
                    loja_cnpj: element[0]['loja_cnpj'],
                    vendedor_cpf: element[0]['vendedor_cpf'],
                    vendedor_id: element[0]['vendedor_id'],
                    valor_vendas: element.map(x => x.valor_vendas).reduce((acc, value) => { return acc + value; }),
                    quantidade_pecas: element.map(x => x.quantidade_pecas).reduce((acc, value) => { return acc + value; }),
                    quantidade_vendas: element.map(x => x.quantidade_vendas).reduce((acc, value) => { return acc + value; }),
                };
                returnList.push(saleResume);
            }
        }
        return returnList;
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