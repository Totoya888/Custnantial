import ETFListPagination from "@/components/etf/ETFListPagination";
import ETFListTable from "@/components/etf/ETFListTable";
import { etfInfo, columns } from "@/lib/etf/etfColumn";
import getETFStocks from "@/lib/etf/etfStocks";
import axios from "axios";

const page = async ({
  searchParams,
}: {
  searchParams: { key: string | undefined };
}) => {
  const id = "0050";
  const url = "https://api.finmindtrade.com/api/v4/data";
  const params = {
    dataset: "TaiwanStockDividendResult",
    data_id: id,
    start_date: "2021-01-01",
    token: process.env.FINMIND_TOKEN,
  };
  const stocks = await getETFStocks("https://www.twse.com.tw/rwd/api/codeEtf");
  console.log("stocks: ", stocks.data);
  // const info = await axios.get(url, { params: params });
  // console.log(info.data.data[0])
  // const data = [];
  // for (let i = 0; i < info.data.data.length; i++) {
  //   data.push({
  //     id: info.data.data[i].stock_id,
  //     name: info.data.data[i].stock_id, //TODO: will be updated
  //     beforePrice: info.data.data[i].before_price,
  //     afterPrice: info.data.data[i].after_price,
  //     date: info.data.data[i].date,
  //     dividend: info.data.data[i].stock_and_cache_dividend,
  //   });
  // }
  // console.log(data[0]);
  const data = [{
    id: "ABC123",
    name: "Example ETF",
    beforePrice: 100,
    afterPrice: 110,
    date: "2022-01-01",
    dividend: 5,
  }];
  return (
    <div className="flex w-full min-h-screen px-32 py-16">
      <div className="flex flex-col gap-4">
        <ETFListTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
