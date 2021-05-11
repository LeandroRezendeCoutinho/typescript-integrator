import axios from "axios";
import { Sale } from "./Sale";

export default class DataSender {
  constructor() {
  }

  async send(data: Sale[]) {
    return await axios.post("http://localhost:4567/receive", data)
  }
}