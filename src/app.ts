import DataFetcher from "./DataFetcher";
import DataProcessor from "./DataProcessor";

async function run() {

  for (let index = 0; index < 10; index++) {
    const fetcher = new DataFetcher()
    const processor = new DataProcessor()
    const sales = await fetcher.fetchData()
    const data = await processor.process(sales)
    console.log(`In tegration ${index}`);
    console.log(data)
  }
}

run()