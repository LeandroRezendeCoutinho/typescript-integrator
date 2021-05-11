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
