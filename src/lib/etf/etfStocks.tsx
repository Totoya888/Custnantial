import axios from "axios";

export default async function getETFStocks(link?: string) {
  if(!link) {
    link = "https://www.twse.com.tw/rwd/api/codeEtf";
  }
  const stocks = (await axios.get(link));

  return stocks;
}