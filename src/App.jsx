import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData } from "./api/coingecko";
import CryptoList from "./components/CryptoList";
import Pagination from "./components/Pagination";
import { useCurrency } from "./context/currencyContext";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const [page, setPage] = useState(1);
  const { currency, switchCurrency } = useCurrency();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cryptoData", page, currency],
    queryFn: () => fetchCryptoData(page, 10, currency),
    keepPreviousData: true,
    staleTime: 300000,
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Crypto Tracker</h1>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => switchCurrency("usd")}
          className="px-4 py-2 mx-2 bg-gray-800 text-white rounded-md"
        >
          USD
        </button>
        <button
          onClick={() => switchCurrency("gbp")}
          className="px-4 py-2 mx-2 bg-gray-800 text-white rounded-md"
        >
          GBP
        </button>
        <button
          onClick={() => switchCurrency("jpy")}
          className="px-4 py-2 mx-2 bg-gray-800 text-white rounded-md"
        >
          JPY
        </button>
      </div>

      {isLoading && (
        <div className="flex justify-center mt-5">
          <LoadingSpinner />
        </div>
      )}
      {isError && (
        <div className="text-center text-red-500">Error fetching data.</div>
      )}

      <CryptoList cryptos={data || []} />
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        hasData={Boolean(data && data.length)}
      />
    </div>
  );
};

export default App;
