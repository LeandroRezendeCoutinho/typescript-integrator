import { ISale } from "./Interfaces/ISale";

export class Sale {
  data_venda!: string;
  loja_cnpj!: string;
  vendedor_cpf!: string;
  vendedor_id!: number;
  valor_vendas!: number;
  quantidade_pecas!: number;
  quantidade_vendas!: number;

  constructor(sale: ISale ) {
      // Object.assign(this,{ sale })
    const data_venda  = sale.data_venda
    const loja_cnpj = sale.loja_cnpj
    const vendedor_cpf = sale.vendedor_cpf
    const vendedor_id = sale.vendedor_id
    const valor_vendas = sale.valor_vendas
    const quantidade_pecas = sale.quantidade_pecas
    const quantidade_vendas = sale.quantidade_vendas
  }
}