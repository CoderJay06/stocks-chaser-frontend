import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import { jsonToCSV } from "react-papaparse";

function parseData(parse) {
    return function(data) {
        let dataKeys = Object.keys(data).join(",").split(",");
        let dataValues = Object.values(data).join(",").split(",");
        dataKeys = dataKeys.reduce((acc, curr) => ( (acc[curr] = dataValues[dataKeys.indexOf(curr)], acc) ), {});
        data = dataKeys;
        data.date = parse(data.date);
        data.open = +data.open;
        data.high = +data.high;
        data.low = +data.low;
        data.close = +data.close;
        data.volume = +data.volume;
        return data;
    };
}

const parseDate = timeParse("%Y-%m-%d");

export function getData(tickerSymbol) {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED` +
      `&symbol=${tickerSymbol}&outputsize=compact&apikey=${process.env.REACT_APP_STOCKS_API_KEY}`
    const promiseData = fetch(url)
        .then(response => response.json())
        .then(data => {

         let dateArr = [];
         for (let key in data['Time Series (Daily)']) {
             let obj = {
                 date: key,
                 open: data['Time Series (Daily)'][key]['1. open'],
                 high: data['Time Series (Daily)'][key]['2. high'],
                 low: data['Time Series (Daily)'][key]['3. low'],
                 close: data['Time Series (Daily)'][key]['4. close'],
                 volume: data['Time Series (Daily)'][key]['6. volume']
             }
             dateArr.push(obj)
           }
           data = jsonToCSV(dateArr);
           return tsvParse(data, parseData(parseDate))
        })
    return promiseData;
}
