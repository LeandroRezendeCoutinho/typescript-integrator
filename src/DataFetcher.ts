import axios, { AxiosResponse } from "axios";
import { Sale } from "./Sale";

export default class DataFetcher {
  constructor() {
  }

  async fetchData(): Promise<Array<Sale>> {
    const response = await axios.get("http://localhost:4567/data")

    return response.data
  }

}
