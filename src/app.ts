import DataFetcher from "./DataFetcher";
import DataProcessor from "./DataProcessor";
import DataSender from "./DataSender";

async function run() {

  for (let index = 0; index < 100_000; index++) {
    const fetcher = new DataFetcher()
    const processor = new DataProcessor()
    const sender = new DataSender()
    const sales = await fetcher.fetchData()
    const data = await processor.process(sales)
    const response = await sender.send(data)
    if (response.status === 200) {
      console.log(`In tegration ${index}`);
    }
  }
}

run()