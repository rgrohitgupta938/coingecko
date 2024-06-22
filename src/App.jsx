import React, { useEffect, useState } from "react";
import Rows from "./Rows";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Current Price</th>
            <th>Market Cap</th>
            <th>Price Change(24Hrs)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, inx) => (
            <Rows key={inx} crypData={d} inx={inx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
