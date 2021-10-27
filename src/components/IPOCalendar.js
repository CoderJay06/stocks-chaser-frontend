import React, { useState, useEffect } from "react";

/*
  TODO: parse ipo data to display company names, dates
*/
function IpoCalendar() {
  // const [ipos, setIpos] = useState([])
  const { StringStream } = require("scramjet");
  const request = require("request");
  const _APIKEY = process.env.REACT_APP_STOCKS_API_KEY;

  useEffect(() => {
    const ipoCalendarUrl = `https://www.alphavantage.co/query?function=IPO_CALENDAR&apikey=${_APIKEY}`;

    // fetch(ipoCalendarUrl)
    //   .then(res => {
    //     if (!res.ok) {
    //       throw Error("Something's wrong")
    //     }
    //     return res.text()
    //   })
    //   .then(data => console.log(data.split(' ')))
    //   .catch(err => console.log(err))
    request
      .get(ipoCalendarUrl)
      .pipe(new StringStream())
      // .CSVParse()                                   // parse CSV output into row objects
      .each((object) => {
        console.log(object.split(" "));
      });
  }, []);

  return (
    <>
      <h2>IPO's</h2>
    </>
  );
}

export default IpoCalendar;
