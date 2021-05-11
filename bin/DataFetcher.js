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
// type Sale = {
//   data_venda: string
//   loja_cnpj: string
//   vendedor_cpf: string
//   vendedor_id: number
//   valor_vendas: number
//   quantidade_pecas: number
//   quantidade_vendas: number
// }
// JAPA
// type Sale = {
//   data_venda: string
// }
// type SalesListResponse = {
//   data: Sale[]
// }
// const fetchData = async () => {
//   const response = await fetch("http://localhost:4567/data")
//   const { data } = await response.json() as SalesListResponse
//   return data
// }
//# sourceMappingURL=DataFetcher.js.map