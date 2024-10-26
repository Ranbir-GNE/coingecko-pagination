import React from "react";

const CryptoList = ({ cryptos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cryptos.map((crypto) => (
        <div key={crypto.id} className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">
            {crypto.name} ({crypto.symbol.toUpperCase()})
          </h2>
          <p className="text-gray-700">Price: ${crypto.current_price}</p>
          <p
            className={`text-${
              crypto.price_change_percentage_24h >= 0 ? "green" : "red"
            }-500`}
          >
            24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="text-gray-700">
            Market Cap: ${crypto.market_cap.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
