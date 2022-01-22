import React from "react";
import IpoCalendar from "./IPOCalendar";
import StocksContainer from "../containers/StocksContainer";

const Home = () => {
  return (
    <div>
      <IpoCalendar />
      <StocksContainer />
    </div>
  );
};

export default Home;
