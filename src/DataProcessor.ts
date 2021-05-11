import { Sale } from "./Sale";

export default class DataProcessor {
  constructor() {
  }

  async process(sales: Sale[]) {
    let returnList: Array<Sale> = new Array<Sale>()
    let grouped_sales = this.groupBy(x => (x.data_venda && x.vendedor_cpf) ?? 'default', sales)

    for (const key in grouped_sales) {
      const element = grouped_sales[key];

      let saleResume = {
        data_venda: element[0]['data_venda'],
        loja_cnpj: element[0]['loja_cnpj'],
        vendedor_cpf: element[0]['vendedor_cpf'],
        vendedor_id: element[0]['vendedor_id'],
        valor_vendas: element.map(x => x.valor_vendas).reduce((acc, value) => { return acc + value }),
        quantidade_pecas: element.map(x => x.quantidade_pecas).reduce((acc, value) => { return acc + value }),
        quantidade_vendas: element.map(x => x.quantidade_vendas).reduce((acc, value) => { return acc + value }),
      }

      returnList.push(saleResume)
    }

    return returnList
  }

  private groupBy<T extends any>(getKey: (value: T) => string, array: T[]) {
    return array.reduce((grouped, value) => {
      const key = getKey(value)

      return {
        ...grouped,
        [key]: [...(grouped[key] ?? []), value]
      }
    }, {} as Record<string, T[]>)
  }
}


