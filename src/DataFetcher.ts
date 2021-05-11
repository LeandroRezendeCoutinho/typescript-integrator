import axios, { AxiosResponse } from "axios";
import { ISale } from "./Interfaces/ISale";

export default class DataFetcher {
  constructor() {
  }

  async fetchData():Promise<Array<ISale>> {
    const response = await axios.get("http://localhost:4567/data")

    return response.data
  }

}

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