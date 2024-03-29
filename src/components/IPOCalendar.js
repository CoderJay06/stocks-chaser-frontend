import React, { useState, useEffect } from "react";

function IpoCalendar() {
  const [allIpos, setAllIpos] = useState([]);

  useEffect(() => {
    const _APIKEY = process.env.REACT_APP_STOCKS_API_KEY;
    const ipoCalendarUrl = `https://www.alphavantage.co/query?function=IPO_CALENDAR&apikey=${_APIKEY}`;

    fetch(ipoCalendarUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error("Something's wrong");
        }
        return res.text();
      })
      .then((data) => {
        const parsedData = data.split("\n");

        let iposData = [];
        for (let i = 1; i < parsedData.length; i++) {
          iposData.push(parsedData[i].split(","));
        }

        iposData = iposData.map((ipoData) => {
          return {
            symbol: ipoData[0],
            name: ipoData[1],
            ipoDate: ipoData[2],
            priceRangeLow: ipoData[3],
            priceRangeHigh: ipoData[4],
            currency: ipoData[5],
            exchange: ipoData[6]
          };
        });

        setAllIpos(iposData);
      })
      .catch((err) => console.log(err));
  }, []);

  function parseDate(date) {
    if (date) {
      const dateArray = date.split("-");
      const month = dateArray[1];
      const day = dateArray[2];
      const year = dateArray[0];

      return `${month}/${day}/${year[2] + year[3]}`;
    }
  }

  function renderIpos() {
    return allIpos.map((ipoData) => {
      return (
        <tr key={ipoData.symbol} className="w-full mx-auto mt-16 rounded-lg shadow-2xl bg-green-700 bg-opacity-80 
        hover:bg-green-900 hover:bg-opacity-75 text-white-200 ">
          <td> {ipoData.symbol} </td>
          <td> {ipoData.name} </td>
          <td> {parseDate(ipoData.ipoDate)} </td>
          <td> {ipoData.priceRangeLow} </td>
          <td> {ipoData.priceRangeLow} </td>
          <td> {ipoData.currency} </td>
          <td> {ipoData.exchange} </td>
        </tr>
      );
    });
  }

  return (
    <div
      className="overflow-x-auto mx-20 mt-8 rounded-lg bg-green-600 shadow-2xl
    bg-opacity-75 hover:bg-green-700 hover:bg-opacity-80 text-white px-4 py-6"
    >
      <table
        className="w-full x-auto mt-8 text-center rounded-lg bg-green-600 shadow-2xl
    bg-opacity-75 hover:bg-green-900 hover:bg-opacity-80 text-white px-2 py-4"
      >
        <caption className="font-extrabold text-center text-4xl">IPO Calendar</caption>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Date</th>
            <th>Price (Low)</th>
            <th>Price (High)</th>
            <th>Currency</th>
            <th>Exchange</th>
          </tr>
        </thead>
        <tbody>{renderIpos()}</tbody>
      </table>
    </div>
  );
}

export default IpoCalendar;
