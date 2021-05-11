import axios, { AxiosResponse } from "axios";
import { ISale } from "./Interfaces/ISale";

export default class DataSender {
  constructor() {
  }

  async send(data:ISale[]) {
    const response = await axios.post("http://localhost:4567/receive", data)
    return response
  }
}