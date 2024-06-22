import React from "react";
import "./index.css";
const Rows = ({ crypData, inx }) => {
  const { name, price_change_24h, market_cap, current_price, image, symbol } =
    crypData;
  console.log(inx);
  return (
    <>
      <tr>
        <td>{inx + 1}</td>
        <td className="fRow">
          <span>
            <img src={image} alt="" />
          </span>
          <span className="name">{name}</span> (<span>{symbol}</span>)
        </td>
        <td>{current_price}$</td>
        <td>{market_cap}$</td>
        <td>{price_change_24h}$</td>
      </tr>
    </>
  );
};

export default Rows;
